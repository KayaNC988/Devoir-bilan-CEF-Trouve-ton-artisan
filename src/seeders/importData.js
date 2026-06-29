const path = require("path");
const xlsx = require("xlsx");
const sequelize = require("../config/database");

const {
  Category,
  Specialty,
  Artisan,
} = require("../models");

async function importData() {
  try {
    await sequelize.sync({ force: true });
   
const filePath = path.join(__dirname, "../../data.xlsx");
const workbook = xlsx.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    console.log(`${data.length} lignes trouvées.`);

    for (const row of data) {
   
      

      const [category] = await Category.findOrCreate({
        where: {
          name: row["Catégorie"].trim(),
        },
      });
     

      const [specialty] = await Specialty.findOrCreate({
        where: {
          name: row["Spécialité"].trim(),
        },
        defaults: {
          categoryId: category.id,
        },
      });


      await Artisan.findOrCreate({
        where: {
          email: row["Email"],
        },
        defaults: {
          name: row["Nom"],
          note: row["Note"],
          city: row["Ville"],
          about: row["A propos"],
          website: row["Site Web"] || null,
          isTop: row["Top"] === true || row["Top"] === "vraie",
          specialtyId: specialty.id,
        },
      });
    }

    console.log("Import terminé avec succès.");

  } catch (error) {

    console.error(error);

  } finally {

    process.exit();

  }
}

importData();