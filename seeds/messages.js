
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, text: 'rowValue1', user_id: 1},
        {id: 2, text: 'rowValue2', user_id: 2},
        {id: 3, text: 'rowValue3', user_id: 3}
      ]);
    });
};
