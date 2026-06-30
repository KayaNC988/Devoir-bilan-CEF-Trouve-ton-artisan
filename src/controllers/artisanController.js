const { Artisan, Category, Specialty } = require("../models");
const { Op } = require("sequelize");

exports.getAllArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            include: [
                {
                    model: Specialty,
                    include: [Category],
                },
            ],
        });
        if (!artisans || artisans.length === 0) {
            return res.status(404).json({ error: "Aucun artisan trouvé." });
        }

        res.status(200).json(artisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTopArtisans = async (req, res) => {
    try {
        const topArtisans = await Artisan.findAll({
            where: { isTop: true },
            include: [
                {
                    model: Specialty,
                    include: [Category],
                },
            ],
        });
  

        res.status(200).json(topArtisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getArtisanById = async (req, res) => {
    try {
        const artisan = await Artisan.findByPk(req.params.id, {
            include: [
                {
                    model: Specialty,
                    include: [Category],
                },
            ],
        });
        if (!artisan) {
            return res.status(404).json({ error: "Artisan non trouvé." });
        }
        res.status(200).json(artisan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.searchArtisans = async (req, res) => {
    try {
        const { name, city } = req.query;
        const where = {};

        if (name) {
            where.name = { [Op.like]: `%${name}%` };
        }
        if (city) {
            where.city = { [Op.like]: `%${city}%` };
        }

        const artisans = await Artisan.findAll({ 
            where,
            include: [
                {
                    model: Specialty,
                    include: [Category],
                },
            ],
        });
        
        res.status(200).json(artisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
