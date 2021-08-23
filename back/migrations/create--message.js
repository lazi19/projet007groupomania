"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Messages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "userId",
        },
        onDelete: "CASCADE",
      },
      // userFirstname: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "Users",
      //     key: "firstname",
      //     as: "userFirstname",
      //   },
      //   onDelete: "CASCADE",
      // },
      message : {
        allowNull: false,
        type: Sequelize.STRING,
      },
      messageUrl : {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // content: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      // },
      // likes: {
      //   allowNull: true,
      //   type: Sequelize.STRING,
      // },
      // attachment: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Messages");
  },
};
