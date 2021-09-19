import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import { schema, rules } from '@ioc:Adonis/Core/Validator';
//import { HttpContext } from "@adonisjs/http-server/build/standalone";
import CreateGenreValidator from 'App/Validators/CreateGenreValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class GenresController {
    public async index({request, response}: HttpContextContract){
        if(request.qs()){
            let name = request.qs().name
            let genresFiltered = await Database.from('genres').where('name', name).select('id', 'name')
            return response.status(200).json({message: 'success get contacts', data: genresFiltered })
        }
        let genres = await Database.from('genres').select('*')
        return response.status(200).json({message: 'success get contacts', data: genres })
    }

    public async store({request, response}: HttpContextContract){
        try {
            await request.validate(CreateGenreValidator) 
            let newGenreId = await Database.table('genres').returning('id').insert({
                name: request.input('name')
            })
            response.created({message: 'created', newId: newGenreId})
        } catch (error) {
            response.unprocessableEntity({error: error.messages})
        }
    }

    public async show({params, response}: HttpContextContract){
        let genre = await Database.from('genres').where('id', params.id).select('id', 'name').firstOrFail()
        return response.status(200).json({message: 'success get genre with id', data: genre})
    }

    public async update({request, response, params}: HttpContextContract){
        let id = params.id
        await Database.from('genres').where('id', id).update({
            name: request.input('name')
        })
        return response.status(200).json({message: 'updated'})
    }

    public async destroy({response, params}: HttpContextContract){
        let id = params.id
        await Database.from('genres').where('id', id).delete()
        return response.ok({message: 'deleted'})
    }
}
