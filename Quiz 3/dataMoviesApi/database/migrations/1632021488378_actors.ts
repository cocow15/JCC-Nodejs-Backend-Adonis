import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actors extends BaseSchema {
  protected tableName = 'actors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.text('bio').notNullable()
      table.dateTime('date_of_birth').notNullable()
      table.integer('casts_id').unsigned()
      table.integer('anggota_cast_id').unsigned()
      table.foreign('casts_id').references('id').inTable('casts')
      table.foreign('anggota_cast_id').references('id').inTable('anggota_casts')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
