'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('fm_tarifa', {
      tr_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      ddd_origin: {
        type: Sequelize.INTEGER,
        references: 'fm_ddds',
        referencesKey: 'ddd_id'
      },
      ddd_destination: {
        type: Sequelize.INTEGER,
        references: 'fm_ddds',
        referencesKey: 'ddd_id'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
