import { Model, DataTypes, Sequelize } from 'sequelize';

interface PastorAttributes {
  id?: number;
  firstName: string;
  lastName: string;
}

class Pastor extends Model<PastorAttributes> implements PastorAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;

  static initModel(sequelize: Sequelize): typeof Pastor {
    Pastor.init(
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'Pastor'
      }
    );
    return Pastor;
  }
}

export default Pastor;
