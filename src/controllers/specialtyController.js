const { Specialty, Category } = require('../models');

exports.getAllSpecialties = async (req, res) => {
    try {
        const specialties = await Specialty.findAll({
            include: [Category],
        });
        res.status(200).json(specialties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};