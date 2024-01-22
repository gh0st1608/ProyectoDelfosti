import { Request, Response } from 'express';
import CardApplication from "../../application/card.application";


export default class {
  application: CardApplication;

  constructor(readonly app: CardApplication) {
    this.application = app;
    this.getCardByToken = this.getCardByToken.bind(this);
  }

  async getCardByToken(req: Request, res: Response) {
    try {
     /*  const tokenCard = req.headers["authorization"]; */
      const tokenCard = req.body.tokenCard;
      console.log('body',tokenCard)
      if (Array.isArray(tokenCard)) {
        res.json({mensaje:"Solo debe ingresar un token"});
      }
      if (!tokenCard) {
        res.json({
          mensaje:"No se encontro algún token"
        });
      }else{
        const cardWithToken = await this.application.getCardByToken(tokenCard);
        res.json(cardWithToken);
      }
    }  
    catch (error : any) {
      console.log(error)
    }
  }
}
/*
  async register(req: Request, res: Response) {
    const { user, password } = req.body;

    const results: Tokens = await this.application.register(
      user,
      password
    );
    res.json(results);
  }

  async login(req: Request, res: Response) {
      const { user, password } = req.body;
      const tokens: Tokens | null = await this.application.login(user, password);

      if (tokens) {
        res.json(tokens);
      } else {
        res.status(401).send("Not found user");
      }
    }
  async getNewAccessToken(req: Request, res: Response) {
    const { refreshToken } = req.body;
    const tokens = await this.application.getNewAccessToken(refreshToken);

    if (tokens) {
      res.json(tokens);
    } else {
      res.status(404).send("Not found user");
    }
  }
  */


