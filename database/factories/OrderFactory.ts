import Factory from '@ioc:Adonis/Lucid/Factory'
import Order from 'App/Models/Order'
import { UserFactory } from './UserFactory'
import { ProductFactory } from './ProductFactory'

export const OrderFactory = Factory.define(Order, ({ faker }) => {
  return {
    cost: faker.datatype.number(),
    quantity: faker.datatype.number({
      min: 0,
      max: 100,
    }),
    payment_status: faker.datatype.boolean(),
    dispatch_status: faker.datatype.boolean(),
    delivery_status: faker.datatype.boolean(),
  }
})
  .relation('buyer', () => UserFactory)
  .relation('seller', () => UserFactory)
  .relation('product', () => ProductFactory)
  .build()
