import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.text('resume').notNullable()
      table.dateTime('release_date').notNullable()
      table.integer('genres_id').unsigned()
      table.integer('anggota_cast_id').unsigned()
      table.foreign('genres_id').references('id').inTable('genres')
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
