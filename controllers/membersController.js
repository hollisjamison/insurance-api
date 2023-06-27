const models = require("../models");

const getMemberById = async (req, res) => {
  try {
    const { id } = req.params;

    const foundMember = await models.MembersModel.findOne({
      where: { id: id },
      include: [
        { model: models.EmployersModel },
        { model: models.ProductsModel },
      ],
    });

    return foundMember ? res.send(foundMember) : res.sendStatus(404);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getMemberById };
