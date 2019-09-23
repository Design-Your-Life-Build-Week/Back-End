const db = require('../data/dbConfig.js')

module.exports = {
    getCatsandActs
}

function getCatsandActs(id) {
    return db('keys as K')
    .innerJoin('activities as A', "K.categories_id", "A.id")
    .innerJoin("users as U", "K.user_id", "U.id")
    .select('categories.name', "categories.dateCreated", "A")
    .where("K.user_id", id)
}