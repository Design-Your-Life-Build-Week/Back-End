exports.seed = function(knex, promise) {
    // Deletes ALL existing entries
    return knex('activities').insert([
      {user_id: 1, categories_id: 1},
      {user_id: 1, categories_id: 2},
      {user_id: 1, categories_id: 3},
      {user_id: 2, categories_id: 4}

    ])
  }