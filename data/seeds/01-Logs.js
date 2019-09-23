
exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
  return knex('daily_logs').insert([
    {
      activity: "Create a Design your life app",
      category: "career",
      rating: 3,
      reflections: "What a wild ride this is!"
    }
  ])
}
   
