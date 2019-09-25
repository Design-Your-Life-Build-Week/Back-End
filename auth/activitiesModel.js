const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
}

function find() {
    return db('activities')
}

function findById(id) {
    return db('activities')
    .where("id", id).first()
}

function insert(activity) {
    return db('activities')
        .insert(activity)
        .then(ids => {
            return find(ids[0])
        })
}

function update(id, change) {
    return db('activities')
        .where ({id}).update(change)        
}

function remove(id) {
    return db('activities')
        .where('id', id)
        .del()
}