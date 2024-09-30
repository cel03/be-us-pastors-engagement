import { Model, DataTypes, Sequelize } from 'sequelize';

interface UsStateAttributes {
	id?: number;
	name: string;
	code: string;
}

// TODO: unique constraint on code
class UsState extends Model<UsStateAttributes> implements UsStateAttributes {
	public id!: number;
	public name!: string;
	public code!: string;

	static initModel(sequelize: Sequelize): typeof UsState {
		UsState.init(
			{
				name: {
					type: DataTypes.STRING,
					allowNull: false
				},
				code: {
					type: DataTypes.STRING(2),
					allowNull: false
				}
			},
			{
				sequelize,
				modelName: 'UsState'
			}
		);
		return UsState;
	}
}

export default UsState;
