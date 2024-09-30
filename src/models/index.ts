import fs from 'fs';
import path from 'path';
import { Sequelize, ModelStatic } from 'sequelize';
import { envs } from '../core/config/env';
import { associateModels } from './associations';

const basename = path.basename(__filename);

interface DbInterface {
	[key: string]: ModelStatic<any> | Sequelize | typeof Sequelize;
	sequelize: Sequelize;
	Sequelize: typeof Sequelize;
}

const db: DbInterface = {};

const sequelize = new Sequelize(envs.DB_NAME, envs.DB_USER, envs.DB_PASSWORD, {
	host: envs.DB_HOST,
	dialect: 'mysql'
});

// Load models from all apps folders
const appsPath = path.join(__dirname, '../modules');
fs.readdirSync(appsPath).forEach((app) => {
	const appModelsPath = path.join(appsPath, app, 'models');
	if (fs.existsSync(appModelsPath)) {
		fs.readdirSync(appModelsPath)
			.filter((file) => {
				return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts';
			})
			.forEach((file) => {
				const model = require(path.join(appModelsPath, file)).default;
				db[model.name] = model.initModel(sequelize);
			});
	}
});

// Associate models
associateModels();

Object.keys(db).forEach((modelName) => {
	if ('associate' in db[modelName] && typeof db[modelName].associate === 'function') {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
