import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Categories from 'App/Models/Categories'
export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public seller_id: number

  @column()
  public category_id: number

  @column()
  public description: string

  @column()
  public quantity: number

  @column()
  public price: number

  @column()
  public image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Seller relation
  @belongsTo(() => User, {
    foreignKey: 'seller_id',
  })
  public seller: BelongsTo<typeof User>

  // Category relation
  @belongsTo(() => Categories, {
    foreignKey: 'category_id',
  })
  public category: BelongsTo<typeof Categories>
}
