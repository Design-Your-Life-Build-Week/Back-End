exports.seed = function(knex, promise) {
    // Deletes ALL existing entries
    return knex('categories').insert([
      {
        name: "career",        
      },
      {
        name: "fitness"
      }
    ])
  }
     