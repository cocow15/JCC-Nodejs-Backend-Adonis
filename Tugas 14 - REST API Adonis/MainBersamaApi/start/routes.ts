/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

Route.get('/', async () => {
  return { hello: 'world' }
}).as("home")

Route.get('/testing/:b', 'ContactsController.index').as('testing')
Route.post('/venues', 'ContactsController.store').as('contacts.store')
Route.post('/bookings', 'ContactsController.booking').as('contacts.booking')
