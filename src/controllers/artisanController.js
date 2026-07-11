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
    const { name = "", city = "" } = req.query;

    const where = {};

    if (city.trim()) {
      where.city = {
        [Op.like]: `%${city.trim()}%`,
      };
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

    const searchedName = name.trim().toLowerCase();

    const filteredArtisans = searchedName
      ? artisans.filter((artisan) => {
          const artisanName = artisan.name?.toLowerCase() || "";
          const specialtyName =
            artisan.Specialty?.name?.toLowerCase() || "";

          return (
            artisanName.includes(searchedName) ||
            specialtyName.includes(searchedName)
          );
        })
      : artisans;

    res.status(200).json(filteredArtisans);
  } catch (error) {
    console.error("Erreur recherche artisans :", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getArtisansByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        const artisans = await Artisan.findAll({
            include: [
                {
                    model: Specialty,
                    include: [Category],
                    where: {},
                }
            ]
        });

        const filteredArtisans = artisans.filter(artisan => artisan.Specialty.Category.name === category);

        res.status(200).json(filteredArtisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
