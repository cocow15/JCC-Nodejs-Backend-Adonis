import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bookings extends BaseSchema {
  protected tableName = 'bookings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.dateTime('play_date_start')
      table.string('play_date_end').notNullable()
      table.integer('user_id_booking').unsigned()
      table.foreign('user_id_booking').references('id').inTable('users').onDelete('CASCADE')
      table.integer('fields_id').unsigned()
      table.foreign('fields_id').references('id').inTable('fields').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
