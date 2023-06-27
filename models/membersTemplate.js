const membersTemplate = (connection, Sequelize, Employers) => {
    return connection.define('members', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        jobTitle: { type: Sequelize.STRING },    
        employerId: { type: Sequelize.INTEGER, references: { model: Employers, key: 'id' } }
    }, { paranoid: true })
}

module.exports = membersTemplate