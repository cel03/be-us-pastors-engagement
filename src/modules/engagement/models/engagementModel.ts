import { Model, DataTypes, Sequelize } from 'sequelize';

interface EngagementAttributes {
  id?: number;
  timestamp: Date;
  pastorId?: number;
}

class Engagement extends Model<EngagementAttributes> implements EngagementAttributes {
  public id!: number;
  public timestamp!: Date;

  static initModel(sequelize: Sequelize): typeof Engagement {
    Engagement.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        timestamp: {
          type: DataTypes.DATE,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'Engagement'
      }
    );
    return Engagement;
  }
}

export default Engagement;
