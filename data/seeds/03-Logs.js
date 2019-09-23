
exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
  return knex('activities').insert([
    {
      name: "Create a Design your life app",      
      starRating: 3,
      reflections: "What a wild ride this is!",
      category_id: 1
    },
    {
      name: "Create a BE",      
      starRating: 2,
      reflections: "Bugs everywhere!",
      category_id: 1
    },
    {
      name: "Running",      
      starRating: 5,
      reflections: "A good 5k is lovely",
      category_id: 2
    },

  ])
}
   
