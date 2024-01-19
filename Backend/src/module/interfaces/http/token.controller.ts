import { Request, Response, response } from 'express';
import TokenApplication from "../../application/token.application";


export default class {
  application: TokenApplication;

  constructor(readonly app: TokenApplication) {
    this.application = app;
    this.createToken = this.createToken.bind(this);
  }

  async createToken(req: Request, res: Response) {
    try {

      const card = req.body;
      const token = await this.application.createToken(card);
  
      res.json({ token });
      } catch (error) {
        console.log(error)
        console.log("fallo al crear token")
    }
    }
}

