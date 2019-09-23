
exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
  return knex('activities').insert([
    {
      name: "Create a Design your life app",      
      starRating: 3,
      reflections: "What a wild ride this is!",
      categories_id: 1
    },
    {
      name: "Create a BE",      
      starRating: 2,
      reflections: "Bugs everywhere!",
      categories_id: 1
    },
    {
      name: "Running",      
      starRating: 5,
      reflections: "A good 5k is lovely",
      categories_id: 2
    },

  ])
}
   
