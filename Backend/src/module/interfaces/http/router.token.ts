import express from 'express'
import Controller from "./token.controller";
import TokenApplication from "../../application/token.application";
import TokenInfrastructure from "../../infrastructure/token.infrastructure";
import { ErrorsService } from "../../../services/errors.service";
import ValidatorsService from "../../../services/validators.service";
import { cardSchema } from "./card.schema";

const tokenInfrastructure = new TokenInfrastructure();
const application = new TokenApplication(tokenInfrastructure);
const controller = new Controller(application);

class Router {
  readonly router: express.Router;

  constructor() {
    this.router = express.Router();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post(
      "/create-token",
      ValidatorsService.validate(cardSchema.CARD),
      ErrorsService.catchError(controller.createToken)
    );
  }
}

export default new Router().router;
