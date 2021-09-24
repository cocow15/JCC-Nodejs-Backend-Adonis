import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Field from 'App/Models/Field'
export default class Booking extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public play_date_start: DateTime

  @column()
  public play_date_end: string

  @column()
  public userId: number

  @column()
  public fieldId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @manyToMany(() => User)
  public Users: ManyToMany<typeof User> 

  @belongsTo(() => User)
  public bookingUser: BelongsTo<typeof User>

  @belongsTo(() => Field)
  public fields: BelongsTo<typeof Field>
  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
