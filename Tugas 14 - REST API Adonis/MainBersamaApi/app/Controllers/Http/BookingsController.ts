import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Booking from 'App/Models/Booking'
//import CreateBookingValidator from 'App/Validators/CreateBookingValidator'
import Field from 'App/Models/Field'
//NQ.Wvoubd80xnsrh2cpJtYOs2FcZZPz363wjgdStAWX_eGRCneUlV6QCzhpy9Yy
export default class BookingsController {
    public async booking({request, response, params, auth}: HttpContextContract){
        try {
            const field = await Field.findByOrFail('id', params.id)
            const user = auth.user!
            
            //const payload = await request.validate(CreateBookingValidator) 
            //await auth.use('api').authenticate()
            
            //Lucid Orm
            const newBooking = new Booking();
            newBooking.play_date_start = request.input('play_date_start')
            newBooking.play_date_end = request.input('play_date_end')
            
            newBooking.related('fields').associate(field)
            user.related('myBooking').save(newBooking)

            return response.status(200).json({message: 'berhasil booking'})
        } catch (error) {
            response.unprocessableEntity({error: error.message})
        }
    }
    /*
    public async show({params, response }: HttpContextContract) {
        try {
        const booking = await Booking.query()
            .select('id', 'play_date_start', 'play_date_end')
            .where('id', '=', params.id)
            .withCount('players', (query) => {
                query.as('players_count')
        })
            .preload('players', (query) => {
                query.select('id', 'name', 'email')
        })
            .firstOrFail()
        const {id, play_date_start, play_date_end, players} = booking.toJSON()
        const players_count = booking.$extras.players_count
        response.ok({ message : 'success', data: {id, play_date_start, play_date_end, players_count, players} })
        } catch (error) {
            if (error.messages) {
                return response.unprocessableEntity({ message: 'failed', error: error.messages})
            } else {
                return response.unprocessableEntity({ message: 'failed', error: error.message})
            }
        }
    }
    
    public async store({request, response, auth}: HttpContextContract){
        try {
            //const data = await request.validate(CreateBookingValidator) 
            await auth.use('api').authenticate()
            response.status(200).json({message: 'success booking', data: data })
        } catch (error) {
            response.unprocessableEntity({error: error.message})
        }
    }*/
}
