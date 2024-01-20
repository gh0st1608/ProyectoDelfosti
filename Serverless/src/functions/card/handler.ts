import { CardController } from "./adapters/controllers/card.controller";
import { CardApplication } from "./application/card.application";
/* import { Card, FieldsRequired } from "./domain/card"; */
//import { CardRepository } from "./domain/repositories/card.repository";
import { CardInfrastructure } from "./infrastructure/card.infrastructure";
import joi from "joi";
import { BusinessError } from "./helpers/errors.helper";
import { exit } from "process";

const repository: CardInfrastructure = new CardInfrastructure();
const application: CardApplication = new CardApplication(
  repository
);
const controller: CardController = new CardController(
  application
);



export const cardHandler = async (event) => {
  /* const body = event.body; */
  const tokenAuth = event.headers;

  if(!tokenAuth){
    exit
  }
/*   console.log('handler',body) */
  //const body = JSON.parse(event.body);

  const schema = joi.object({
      Authorization: joi.string().pattern(/^pk_test_[a-zA-Z0-9]{16}$/),
      'Postman-Token': joi.string().allow()
  })

  const validationResult: joi.ValidationResult<any> = schema.validate(tokenAuth);
  //const validationResult: joi.ValidationResult<any> = schema.validate(headers);

  if (validationResult.error) {
    throw new BusinessError(
      validationResult.error.stack,
      validationResult.error.message,
      411
    );
  }


/*   const properties: FieldsRequired = {
    card_number: body.card_number,
    cvv: body.cvv,
    expiration_month: body.expiration_month,
    expiration_year: body.expiration_year,
    email: body.email
  }; */

  /* const card: Card = new Card(properties); */
  console.log(tokenAuth)
  const card = await controller.find(tokenAuth);

  return {
    statusCode: 200,
    card: card,
  };
};
