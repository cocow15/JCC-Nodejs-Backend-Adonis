import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import { schema, rules } from '@ioc:Adonis/Core/Validator';
//import { HttpContext } from "@adonisjs/http-server/build/standalone";
import CreateContactValidator from 'App/Validators/CreateContactValidator'
import Database from '@ioc:Adonis/Lucid/Database'


export default class ContactsController {
    public async index({request, response}: HttpContextContract){
        if(request.qs()){
            let name = request.qs().name
            let venuesFiltered = await Database.from('venues').where('name', name).select('id', 'name', 'address', 'phone')
            return response.status(200).json({message: 'success get contacts', data: venuesFiltered })
        }
        let venues = await Database.from('venues').select('*')
        return response.status(200).json({message: 'success get contacts', data: venues })
    }

    public async store({request, response}: HttpContextContract){
        try {
            await request.validate(CreateContactValidator) 
            let newVenueId = await Database.table('venues').returning('id').insert({
                name: request.input('name'),
                address: request.input('address'),
                phone: request.input('phone')
            })
            response.created({message: 'created', newId: newVenueId})
        } catch (error) {
            response.unprocessableEntity({error: error.messages})
        }
    }

    // public async booking({request, response}: HttpContextContract){
    //     try {
    //         await request.validate(CreateBookingValidator)   
    //     } catch (error) {
    //         response.unprocessableEntity({error: error.messages})
    //     }
    // }

    public async show({params, response}: HttpContextContract){
        let venue = await Database.from('venues').where('id', params.id).select('id', 'name', 'address', 'phone').firstOrFail()
        return response.status(200).json({message: 'success get venues with id', data: venue})
    }

    public async update({request, response, params}: HttpContextContract){
        let id = params.id
        await Database.from('venues').where('id', id).update({
            name: request.input('name'),
            address: request.input('address'),
            phone: request.input('phone')
        })
        return response.status(200).json({message: 'updated'})
    }

    public async destroy({response, params}: HttpContextContract){
        let id = params.id
        await Database.from('venues').where('id', id).delete()
        return response.ok({message: 'deleted'})
    }
}
