exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();  
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255)
    })
    .createTable('daily_logs', users => {
      users.increments()
      users
        .string('activity')
        .notNullable()
        .unique()
      users
        .string('category')
        .notNullable()
      users
        .integer('rating')
        .defaultTo(false)
      users
        .string('reflections', 500)
        //foreign key
      users
        .integer('daily_log_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('reflections', users => {
      users.increments()
      users
        .string('reflection', 500)
        .notNullable(),
      //foreign key
      users
        .integer('reflections_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')      
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
      .dropTableIfExists('daily_logs')
      .dropTableIfExists('reflections')
  };
  