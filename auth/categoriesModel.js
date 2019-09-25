const db = require('../data/dbConfig.js')

module.exports = {
    getUsers,
    getCategories,
    getActivities,
    getCategoryByUser,
    activities,
    insert,
    remove
}

function getUsers() {
    return db('users')
}

function getCategories() {
    return db('categories')
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


function activities(id) {
    return db('categories').where({id})
    .then(categories => {
        return db('activities').where({categories_id: id})
        .then(activities => {
            categories.activities = activities;
            return categories
        })
    })     
}
