'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class task extends Model {
        static associate(models) {}
    }
    task.init(
        {
            task: DataTypes.STRING,
            time: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            id: { type: DataTypes.INTEGER, primaryKey: true }
        },
        {
            sequelize,
            modelName: 'task'
        }
    );
    return task;
};
