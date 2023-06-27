const productsTemplate = (connection, Sequelize) => {
  return connection.define(
    "products",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      vendor: { type: Sequelize.STRING },
      type: { type: Sequelize.ENUM("medical", "vlife") },
    },
    { paranoid: true }
  );
};

module.exports = productsTemplate;
