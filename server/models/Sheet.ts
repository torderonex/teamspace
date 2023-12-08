import seq from '../db/postgres';
import { DataTypes, Model, Optional } from 'sequelize';
import {ISheet} from '../../models/Sheet'

class Sheet extends Model<ISheet, Optional<ISheet, 'id'>> implements ISheet {
    public id!: number;
    public documentationId!: number;
    public name!: string;
    public body!: string;
  
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
    public readonly deletedAt?: Date;
  }
  
export interface UserInput extends Optional<ISheet, 'id'> {}
export interface UserOutput extends Required<ISheet> {}

Sheet.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      documentationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
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
  
  export default Sheet;