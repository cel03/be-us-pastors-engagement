import { exec } from 'child_process';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const runSeeders = () => {
	const sequelizeCliPath = path.resolve(__dirname, 'node_modules/.bin/sequelize');
	const seedCommand = `${sequelizeCliPath} db:seed:all`;

	// Add environment variables as arguments
	const envArgs = [
		`--url=mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
	].join(' ');

	const fullCommand = `${seedCommand} ${envArgs}`;

	exec(fullCommand, (error, stdout, stderr) => {
		if (error) {
			console.error(`Error running seeders: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`Seeding stderr: ${stderr}`);
			return;
		}
		console.log(`Seeding stdout: ${stdout}`);
	});
};

runSeeders();
