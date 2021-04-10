'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('tasks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            task: {
                allowNull: false,
                type: Sequelize.STRING
            },
            time: {
                allowNull: false,
                type: Sequelize.STRING
            },
            status: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('tasks');
    }
};
