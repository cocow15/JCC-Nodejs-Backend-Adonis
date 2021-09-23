import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateBookingValidator from 'App/Validators/CreateBookingValidator'

export default class BookingsController {
    public async booking({request, response, auth}: HttpContextContract){
        try {
            const data = await request.validate(CreateBookingValidator) 
            await auth.use('api').authenticate()
            response.status(200).json({message: 'success booking', data: data })
        } catch (error) {
            response.unprocessableEntity({error: error.message})
        }
    }
}
