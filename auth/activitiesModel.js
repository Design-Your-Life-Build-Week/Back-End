const db = require('../data/dbConfig.js')

module.exports = {
    find,
    insert
}

function find() {
    return db('activities')
}

function insert(activity) {
    return db('activities')
        .insert(activity)
        .then(ids => {
            return find(ids[0])
        })
}