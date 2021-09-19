import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import { schema, rules } from '@ioc:Adonis/Core/Validator';
//import { HttpContext } from "@adonisjs/http-server/build/standalone";
import CreateMovieValidator from 'App/Validators/CreateMovieValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class MoviesController {
    public async index({request, response}: HttpContextContract){
        if(request.qs()){
            let title = request.qs().title
            let moviesFiltered = await Database.from('movies').where('title',title).select('id', 'title', 'resume', 'release_date', 'genres_id')
            return response.status(200).json({message: 'success get movies', data: moviesFiltered })
        }
        let movies = await Database.from('movies').select('*')
        return response.status(200).json({message: 'success get contacts', data: movies })
    }

    public async store({request, response}: HttpContextContract){
        try {
            await request.validate(CreateMovieValidator) 
            let newMovieId = await Database.table('movies').returning('id').insert({
                title: request.input('title'),
                resume: request.input('resume'),
                release_date: request.input('release_date'),
                genres_id: parseInt(request.input('genres_id')),
                anggota_cast_id: 1
            })
            response.created({message: 'created', newId: newMovieId})
        } catch (error) {
            response.unprocessableEntity({error: error.messages})
        }
    }

    public async show({params, response}: HttpContextContract){
        let movie = await Database.from('movies').where('id', params.id).select('id', 'title', 'resume', 'release_date', 'genres_id').firstOrFail()
        return response.status(200).json({message: 'success get movie with id', data: movie})
    }

    public async update({request, response, params}: HttpContextContract){
        let id = params.id
        await Database.from('movies').where('id', id).update({
            title: request.input('title'),
            resume: request.input('resume'),
            release_date: request.input('release_date'),
            genres_id: request.input('genres_id'),
            anggota_cast_id: 0
        })
        return response.status(200).json({message: 'updated'})
    }

    public async destroy({response, params}: HttpContextContract){
        let id = params.id
        await Database.from('movies').where('id', id).delete()
        return response.ok({message: 'deleted'})
    }
}
