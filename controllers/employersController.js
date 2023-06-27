const models = require('../models')

const getEmployerByIdWithMembers = async (req, res) => {
    try {
        const { id } = req.params

        const foundEmployer = await models.EmployersModel.findOne({
            where: {id: id},
            include: [{ model: models.MembersModel }]
        })
    
        return foundEmployer ? res.send(foundEmployer) : res.sendStatus(404)
    } catch (err) {
        res.status(500).send(err)
    }
}



module.exports = { getEmployerByIdWithMembers }