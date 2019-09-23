
exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
  return knex('activities').insert([
    {
      name: "Create a Design your life app",      
      starRating: 3,
      reflections: "What a wild ride this is!",
      user_id: 1
    }
  ])
}
   
