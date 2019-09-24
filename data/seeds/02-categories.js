exports.seed = function(knex, promise) {
    // Deletes ALL existing entries
    return knex('categories').insert([
      {
        name: "career",
        users_id: 1        
      },
      {
        name: "fitness",
        users_id: 1
      },
      {
        name: "relationship",
        users_id: 2
      },
      {
        name: "personal",
        users_id: 2
      }
    ])
  }
     