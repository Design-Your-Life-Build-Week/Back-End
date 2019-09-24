const db = require('../data/dbConfig.js')

module.exports = {
    findCategoriesAndActivities
}

function findCategoriesAndActivities(id) {
    return db('categories')
    .innerJoin('activities', 'activities.categories_id', 'categories.id')
    .where({categories_id: id})
}