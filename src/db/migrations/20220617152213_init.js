
exports.up = function(knex) {
    return knex.schema.createTable('location', function(table) {
        table.increments();
        table.string('lat');
        table.string('long');
        table.string('average_location');
        table.timestamps();
    })
};

exports.down = function(knex) {
  
};
