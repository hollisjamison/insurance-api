const employersTemplate = (connection, Sequelize) => {
  return connection.define(
    "employers",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      address: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
    },
    { paranoid: true }
  );
};

module.exports = employersTemplate;
