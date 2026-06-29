const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define(
    'Artisan',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },  
        name: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        note: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: false, 
            validate: {
                isEmail: true,
            },
        },
        website: {
            type: DataTypes.STRING(255),
            allowNull: true,
    },   
        isTop: {
            type: DataTypes.BOOLEAN,
            allowNull: false,   
        defaultValue: false,
        },
    },
    {
        tableName: 'artisans',
        timestamps: true,
    }
    
);

module.exports = Artisan;