import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import seq from '../db/postgres';
import { IRoom } from '../../models/Room';
import Project from './Project';

class Room extends Model<IRoom, Optional<IRoom, 'id'>> implements IRoom {
  public id!: number;
  public projectId!: number;
  public name!: string;

  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
  public readonly deletedAt?: Date;

}

Room.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: seq,
    paranoid: true,
  }
);

Room.belongsTo(Project, {foreignKey:'projectId'});

export default Room;
