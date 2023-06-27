const Sequelize = require('sequelize')
const productsTemplate = require('./productsTemplate')
const enrollmentsTemplate = require('./enrollmentsTemplate')
const membersTemplate = require('./membersTemplate')
const employersTemplate = require('./employersTemplate')

const connection = new Sequelize('h_insurance', 'insuranceUser', 'insurance1234!', { host: 'xxxxxx', dialect: 'mysql' })

const ProductsModel = productsTemplate(connection, Sequelize)
const EmployersModel = employersTemplate(connection, Sequelize)
const MembersModel = membersTemplate(connection, Sequelize, EmployersModel)
const EnrollmentsModel = enrollmentsTemplate(connection, Sequelize, MembersModel, ProductsModel)

// one to many....
EmployersModel.hasMany(MembersModel)
MembersModel.belongsTo(EmployersModel)

// many to many
ProductsModel.belongsToMany(MembersModel, { through: EnrollmentsModel })
MembersModel.belongsToMany(ProductsModel, { through: EnrollmentsModel })

module.exports = {
    ProductsModel,
    EmployersModel,
    MembersModel,
    EnrollmentsModel
}