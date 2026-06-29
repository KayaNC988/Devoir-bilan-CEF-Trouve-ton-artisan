const Category = require('./Category');
const Specialty = require('./Specialty');
const Artisan = require('./Artisan');

Category.hasMany(Specialty, { foreignKey: 'categoryId' });
Specialty.belongsTo(Category, { foreignKey: 'categoryId' });
Specialty.hasMany(Artisan, { foreignKey: 'specialtyId' });
Artisan.belongsTo(Specialty, { foreignKey: 'specialtyId' });

module.exports = {
    Category,
    Specialty,
    Artisan
};

