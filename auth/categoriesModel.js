const db = require('../data/dbConfig.js')

module.exports = {
    getUsers,
    getCategories,
    getCategoriesById,
    getActivities,
    getCategoryByUser,
    activities,
    insert,
    remove,
    update
}

function getUsers() {
    return db('users')
}

function getCategories() {
    return db('categories')
}

function getCategoriesById(id) {
    return db('categories').where({id: id}).first()
}

function getActivities() {
    return db('activities')
}

function getCategoryByUser(id) {
    return db ('categories').where({users_id: id}).first()
    }
function insert(category) {
    return db('categories')
        .insert(category)
        .then(ids => {
            return getCategoryByUser(ids[0])
        })    
}

function remove(id) {
    return db('categories')
        .where('id', id)
        .del()   
    
}

function update(id, change) {
    return db('categories')
    .where({id}).update(change)
}


function activities(id) {
    return db('categories').where({id}).first()
    .then(categories => {
        return db('activities').where({categories_id: id})
        .then(activities => {
            categories.activities = activities;
            return categories
        })
    })     
}
