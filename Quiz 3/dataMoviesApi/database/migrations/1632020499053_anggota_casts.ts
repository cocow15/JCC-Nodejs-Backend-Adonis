import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AnggotaCasts extends BaseSchema {
  protected tableName = 'anggota_casts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('actors_name').notNullable()
      table.string('movies_name').notNullable()
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
