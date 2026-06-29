require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");
require("./models/");
const PORT = process.env.PORT || 3000;

sequelize
    .authenticate()
    .then(async () => {
        console.log("Connexion à MySQL réussie.");

        await sequelize.sync();
        console.log("Base synchronisée avec succès.");
        
        app.listen(PORT, () => {
            console.log(`Serveur démarré sur http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Erreur de connexion à MySQL :", error);
    });