module.exports = (sequelize, Sequelize) => {
  const Roles = require("./roles.model")(sequelize, Sequelize);
  const Users = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  Users.belongsTo(Roles,{
    foreignKey: "roleId",
    as: "roles",
  });
  return Users;
};

