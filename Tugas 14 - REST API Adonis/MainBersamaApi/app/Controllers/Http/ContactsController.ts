import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import { schema, rules } from '@ioc:Adonis/Core/Validator';
//import { HttpContext } from "@adonisjs/http-server/build/standalone";
import CreateContactValidator from 'App/Validators/CreateContactValidator'
import CreateBookingValidator from 'App/Validators/CreateBookingValidator'
export default class ContactsController {
    public async index({request, response, params}: HttpContextContract){
        let name = request.qs().name
        response.status(200).json({name, b: params.b})
    }

    public async store({request, response}: HttpContextContract){
        try {
            const payload = await request.validate(CreateContactValidator)   
        } catch (error) {
            response.unprocessableEntity({error: error.messages})
        }
    }

    public async booking({request, response}: HttpContextContract){
        try {
            const payload2 = await request.validate(CreateBookingValidator)   
        } catch (error) {
            response.unprocessableEntity({error: error.messages})
        }
    }
}
