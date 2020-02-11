exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
      users.increments();  
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255)
    })
    .createTable('messages', message => {
      message.increments()
      message
        .string('text', 255)
        .notNullable()
      message
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
      .dropTableIfExists('messages')
  };
  