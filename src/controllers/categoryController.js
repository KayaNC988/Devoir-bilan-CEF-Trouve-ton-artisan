const { Category, Specialty, Artisan } = require('../models');

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

exports.getArtisansByCategoryId = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, {
            include: [
                {
                model: Specialty,
                include: [Artisan],
            },
        ],
        });
        if (!category) {
            return res.status(404).json({ error: "Catégorie non trouvée." });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
