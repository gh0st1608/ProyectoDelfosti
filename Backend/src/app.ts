import express, { Application, Request, Response } from 'express';
//import { authorizationMiddleware } from "./middlewares/authorization";
import routerCard from "./module/interfaces/http/router.card";
import routerToken  from "./module/interfaces/http/router.token";
import cors  from 'cors';
import { ErrorsService } from "./services/errors.service";

class App {
  readonly expressApp: Application;

  constructor() {
    this.expressApp = express();
    this.middlewares();
    this.mountRoutes();
    this.mountErrors();
  }

  middlewares() {
    this.expressApp.use(express.json());
    this.expressApp.use(cors());
    this.expressApp.use(express.urlencoded({ extended: false }));
  }

  
  mountRoutes() {
    this.expressApp.use("/v1", routerCard,routerToken);
    this.expressApp.get("/", (req: Request, res: Response) => {
      res.send("All's ok");
    });
  }

  mountErrors() {
    this.expressApp.use(ErrorsService.notFound);
    this.expressApp.use(ErrorsService.generic);
  }
}

export default new App().expressApp;