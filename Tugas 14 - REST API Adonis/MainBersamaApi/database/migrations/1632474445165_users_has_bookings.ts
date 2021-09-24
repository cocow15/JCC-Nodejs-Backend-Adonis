import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersHasBookings extends BaseSchema {
  protected tableName = 'users_has_bookings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('users_id').unsigned().references('users.id')
      table.integer('bookings_id').unsigned().references('bookings.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
