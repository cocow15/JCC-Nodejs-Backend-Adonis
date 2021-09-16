import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateBookingValidator {
  constructor (protected ctx: HttpContextContract) {
  }

	/*
	 * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
	 *
	 * For example:
	 * 1. The username must be of data type string. But then also, it should
	 *    not contain special characters or numbers.
	 *    ```
	 *     schema.string({}, [ rules.alpha() ])
	 *    ```
	 *
	 * 2. The email must be of data type string, formatted as a valid
	 *    email. But also, not used by any other user.
	 *    ```
	 *     schema.string({}, [
	 *       rules.email(),
	 *       rules.unique({ table: 'users', column: 'email' }),
	 *     ])
	 *    ```
	 */
  public schema = schema.create({
	nama: schema.string({},[
		rules.alpha(),
		rules.minLength(4)
	]),
	nama_venue: schema.string({},[
		rules.alpha(),
		rules.minLength(5)
	]),
	tanggal_booking: schema.date({}, [
		rules.after(1, 'days')
	])
  })

	/**
	 * Custom messages for validation failures. You can make use of dot notation `(.)`
	 * for targeting nested fields and array expressions `(*)` for targeting all
	 * children of an array. For example:
	 *
	 * {
	 *   'profile.username.required': 'Username is required',
	 *   'scores.*.number': 'Define scores as valid numbers'
	 * }
	 *
	 */
  	public messages = {	  
		'required': 'the {{field}} is required to create new venues',
		'nama.alpha': 'the {{field}} must be characters without number and symbols',
		'nama_venue.alpha': 'the {{field}} must be characters without number and symbols',
		'tanggal_booking.after': 'booking is invalid, you must booking one day before!'
	}
}
