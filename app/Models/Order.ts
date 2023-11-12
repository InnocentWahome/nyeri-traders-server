import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'
import User from 'App/Models/User'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_id: number

  @column()
  public buyer_id: number

  @column()
  public seller_id: number

  @column()
  public cost: number

  @column()
  public quantity: number

  @column()
  public payment_status: boolean

  @column()
  public dispatch_status: boolean

  @column()
  public delivery_status: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Product relation
  @belongsTo(() => Product, {
    foreignKey: 'product_id',
  })
  public product: BelongsTo<typeof Product>

  // Seller relation
  @belongsTo(() => User, {
    foreignKey: 'buyer_id',
  })
  public buyer: BelongsTo<typeof User>

  // Buyer relation
  @belongsTo(() => User, {
    foreignKey: 'seller_id',
  })
  public seller: BelongsTo<typeof User>
}
