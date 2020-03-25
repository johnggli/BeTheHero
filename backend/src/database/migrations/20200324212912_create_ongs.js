
exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); /* 2 é a quantidade de caracteres */
    });
};

exports.down = function (knex) { /* caso dê um erro na criação da tabela */
    return knex.schema.dropTable('ongs'); /* deleta a tabela */
};
