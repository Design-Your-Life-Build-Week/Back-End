const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById,
    insert,
    update
}

function find() {
    return db('activities')
}

function findById(id) {
    return db('activities')
    .where({id}).first()
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