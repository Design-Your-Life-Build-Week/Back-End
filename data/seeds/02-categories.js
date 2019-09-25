exports.seed = function(knex, promise) {
    // Deletes ALL existing entries
    return knex('categories').insert([
      {
        name: "physical & health",                
      },
      {
        name: "personal & social",        
      },
      {
        name: "work & career",        
      },
      {
        name: "family",        
      },
      {
        name: "spiritual"
      },
      {
        name: "financial"
      },
      {
        name: "mind & intellect"
      }
    ])
  }
     