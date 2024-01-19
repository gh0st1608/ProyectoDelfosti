import express from 'express';
import Controller from "./card.controller";
import CardApplication from "../../application/card.application";
import CardInfrastructure from "../../infrastructure/card.infrastructure";
import { ErrorsService } from "../../../services/errors.service";
import ValidatorsService from "../../../services/validators.service";
import { tokenSchema } from "./token.schema";

const cardInfrastructure = new CardInfrastructure();
const application = new CardApplication(cardInfrastructure);
const controller = new Controller(application);

class Router {
  readonly router: express.Router;

  constructor() {
    this.router = express.Router();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post(
      "/get-card-by-token",
      ValidatorsService.validate(tokenSchema.TOKEN),
      ErrorsService.catchError(controller.getCardByToken)
    );
  }
}

export default new Router().router;
