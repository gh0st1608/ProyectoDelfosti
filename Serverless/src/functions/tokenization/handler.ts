import { CardController } from "./adapters/controllers/card.controller";
import { CardApplication } from "./application/card.application";
import { Card, FieldsRequired } from "./domain/card";
import { CardRepository } from "./domain/repositories/card.repository";
import { CardInfrastructure } from "./infrastructure/card.infrastructure";
import joi from "joi";
import { BusinessError } from "./helpers/errors.helper";

const repository: CardInfrastructure = new CardInfrastructure();
const application: CardApplication = new CardApplication(
  repository
);
const controller: CardController = new CardController(
  application
);



export const cardHandler = async (event) => {
  const body = event.body;
  const token = event.headers['Authorization'];
  //const body = JSON.parse(event.body);

  const schema = joi.object({
    card_number: joi.number().required().custom((value : any) => {
      return value !== undefined /* && luhn(value.toString() */ && (value.toString().length >= 13 && value.toString().length <= 16)
      //return helper.message("Password must be at least 8 characters long");
    }),
    cvv: joi.number().required().custom((value : any) => {
        return value !== undefined && (value.toString().length === 3 || value.toString().length === 4)
    }),
    expiration_year: joi.string().length(4).required().custom((value : any) => {
        const numericYear = Number(value)
        if (isNaN(numericYear)) return false;
        const todayYear = (new Date()).getFullYear()
        return numericYear >= todayYear && numericYear <= todayYear + 5
    }),
    expiration_month: joi.string().min(1).max(2).required().custom((value : any) =>{
        const numericMonth = Number(value)
        if (isNaN(numericMonth)) return false;
        return numericMonth >= 1 && numericMonth <= 12;
    }),
    email: joi.string().required().email().min(5).max(100).custom((value : any) => {
        const validDomains = ["gmail.com", "hotmail.com", "yahoo.es"];
        if (!value) return false;
        const domain = value.split("@")[1];
        return validDomains.includes(domain);
  })
  });

  const validationResult: joi.ValidationResult<any> = schema.validate(body);

  if (validationResult.error) {
    throw new BusinessError(
      validationResult.error.stack,
      validationResult.error.message,
      411
    );
  }

  const properties: FieldsRequired = {
    card_number: body.card_number,
    cvv: body.cvv,
    expiration_month: body.expiration_month,
    expiration_year: body.expiration_year,
    email: body.email
  };

  const card: Card = new Card(properties);
  console.log(card)
  await controller.create(token,card);

  return {
    statusCode: 200,
    //body: result,
  };
};
