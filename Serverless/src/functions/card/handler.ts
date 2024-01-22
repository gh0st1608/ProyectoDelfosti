import { CardController } from "./adapters/controllers/card.controller";
import { CardApplication } from "./application/card.application";
/* import { Card, FieldsRequired } from "./domain/card"; */
//import { CardRepository } from "./domain/repositories/card.repository";
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
 /*  const tokenAuth1 : string | undefined = event.headers.Authorization; */
  const headers = event.headers;
 /*  console.log('authorization1', tokenAuth1)
  console.log('authorization2', tokenAuth2) */
/*   const token: string = tokenAuth1.split(' ')[1]  */
 /*  console.log('tokenSplit',token) */

/*   console.log('handler',body) */
  //const body = JSON.parse(event.body);

  const schemaHeaders = joi.object({
    Authorization: joi.string().pattern(/^pk_test_[a-zA-Z0-9]{16}$/),
    'Postman-Token': joi.string().allow(),
    'Content-Type': joi.string().allow(),
    'Content-Length' : joi.string().allow(),
    'Host' : joi.string().allow(),
    'User-Agent' : joi.string().allow(),
    'Accept' : joi.string().allow(),
    'Accept-Encoding' : joi.string().allow(),
    'Connection' : joi.string().allow(),
  })

  const schemaBody = joi.object({
    tokenCard: joi.string().pattern(/[a-zA-Z0-9]{16}$/),
  })
  /* const token: string = authorizationHeader.split(' ')[1] */

  /* if (token.length !== 16 || !expToken.test(token)) {
    req.body.error = createError.Unauthorized(error)
    return next('route')
  } */

  const validationResultHeaders: joi.ValidationResult<any> = schemaHeaders.validate(headers);
  const validationResultBody: joi.ValidationResult<any> = schemaBody.validate(body);

  if (validationResultHeaders.error) {
    throw new BusinessError(
      validationResultHeaders.error.stack,
      validationResultHeaders.error.message,
      411
    );
  }

  if (validationResultBody.error) {
    throw new BusinessError(
      validationResultBody.error.stack,
      validationResultBody.error.message,
      411
    );
  }




  const tokenCard = body.tokenCard;
  const card = await controller.find(tokenCard);

  return {
    statusCode: 200,
    card: card,
  };
};
