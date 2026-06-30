const { Category, Specialty } = require('../models');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: [Specialty],
        });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};