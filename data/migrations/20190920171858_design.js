exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();  
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255)
    })
    .createTable('categories', users => {
      users.increments()
      users
        .string('name')
        .notNullable(),
      users
        .datetime('dateCreated').defaultTo(knex.fn.now())
      users
        .integer('users_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')     
      })
    .createTable('activities', users => {
      users.increments()
      users
        .string('name')
        .notNullable()
        .unique()      
      users
        .integer('starRating')        
      users
        .string('reflections', 500)
      users
        .datetime('dateCreated').defaultTo(knex.fn.now())
        //foreign key
      users
        .integer('categories_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })   
  
  };
  
  exports.down = function(knex) {
    return knex.schema      
      .dropTableIfExists('activities')
      .dropTableIfExists('categories')
      .dropTableIfExists('users')  
      
      
  };
  