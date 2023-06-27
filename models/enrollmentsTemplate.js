const enrollmentsTemplate = (connection, Sequelize, Members, Products ) => {
    return connection.define('enrollments', {
        memberId: { type: Sequelize.INTEGER, references: { model: Members, key: 'id'}},
        productId: { type: Sequelize.INTEGER, references: { model: Products, key: 'id'}},
        startDate: { type: Sequelize.DATEONLY, allowNull: false },
        endDate: { type: Sequelize.DATEONLY, allowNull: false }
    }, { paranoid: true })
}

module.exports = enrollmentsTemplate