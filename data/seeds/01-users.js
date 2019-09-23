exports.seed = function(knex, promise) {
    // Deletes ALL existing entries
    return knex('users').insert([
      {
        username: "Adam",
        password: "password"
      },
      {  username: "Joey",
         password: "passoftheword"
      }
    ])
  }