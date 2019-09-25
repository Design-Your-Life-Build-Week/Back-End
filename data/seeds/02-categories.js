exports.seed = function(knex, promise) {
    // Deletes ALL existing entries
    return knex('categories').insert([
      {
        name: "fitness",
                
      },
      {
        name: "shopping",
        
      },
      {
        name: "outdoors",
        
      },
      {
        name: "family activities",
        
      }
    ])
  }
     