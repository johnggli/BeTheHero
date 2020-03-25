
exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); /* relacionamento */

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function (knex) { /* caso dê um erro na criação da tabela */
    return knex.schema.dropTable('incidents'); /* deleta a tabela */
};
