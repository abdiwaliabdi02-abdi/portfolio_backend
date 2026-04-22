import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Profile extends Model {}

Profile.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    bio: DataTypes.TEXT,
    location: DataTypes.STRING,
    nationality: DataTypes.STRING,
    availability: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    github: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    expectedSalary: DataTypes.FLOAT,
    ownACar: DataTypes.BOOLEAN,
    haveDrivingLicense: DataTypes.BOOLEAN,
    noticePeriod: DataTypes.STRING,
    immigrationStatus: DataTypes.STRING,
    referees: DataTypes.TEXT,
    willingToRelocate: DataTypes.BOOLEAN,
    languages: DataTypes.TEXT,
    skills: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "Profile",
  },
);
