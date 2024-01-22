//import { object, string, number } from 'yup'
import joi  from "joi";
import luhn from "fast-luhn";
export const cardSchema = {
    CARD: {
        /* headers: joi.object({
            authorization: joi.string().pattern(new RegExp(/^pk_test_[a-zA-Z0-9]{16}$/)),//Joi.string().pattern(/^pk_test_[a-zA-Z0-9]{16}$/),
            }), */
        /* headers: joi.object({
                authorization: joi.string().pattern(/^pk_test_[a-zA-Z0-9]{4}$/),
                'postman-token': joi.string().allow()
            }), */
        body: joi.object({
            card_number: joi.number().required().custom((value : any) => {
                const bol = (value !== undefined && luhn(value.toString()) )&& (value.toString().length >= 13 && value.toString().length <= 16)
/*                 console.log(bol) */
                return bol
                //return helper.message("Password must be at least 8 characters long");
            }),
            cvv: joi.number().required().custom((value : any, helpers) => {
                return (value !== undefined) && (value.toString().length == 3 || value.toString().length === 4) ? true : helpers.error("any.invalid")
            }),
            expiration_year: joi.string().length(4).required().custom((value : any, helpers) => {
                const numericYear = Number(value)
                if (isNaN(numericYear)) return false;
                const todayYear = (new Date()).getFullYear()
                return (numericYear >= todayYear && numericYear <= todayYear + 5) ? true : helpers.error("any.invalid")
            }),
            expiration_month: joi.string().min(1).max(2).required().custom((value : any, helpers) =>{
                const numericMonth = Number(value)
                return (isNaN(value)) ? helpers.error("any.invalid") : (numericMonth >= 1 && numericMonth <= 12 ) ? true : helpers.error("any.invalid")
            }),
            email: joi.string().required().email().min(5).max(100).custom((value : any, helpers) => {
                console.log(value)
                const validDomains = ["gmail.com", "hotmail.com", "yahoo.es"];
                console.log(!value)
                console.log(validDomains.includes(value.split("@")[1]));
                return (!value) ?  helpers.error("any.invalid") : (validDomains.includes(value.split("@")[1])) ? true : helpers.error("any.invalid")
            }),
        }),
    }
}
