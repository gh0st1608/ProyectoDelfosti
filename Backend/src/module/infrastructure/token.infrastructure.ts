/* import Card from "../domain/card"; */
import TokenRepository from "../domain/repository/token.repository";
import Model from "./models/card.model";



export default class TokenInfrastructure implements TokenRepository {
  
  async insert(tokenCard: string, tokenJwt : string): Promise<void> {
    await Model.create({
      tokenCard: tokenCard,
      tokenJwt : tokenJwt
    });
  }
  
  /* 
  async find(where: { [s: string]: string | number },
    ): Promise<Card | null> {
    return await Model.find(where);
  } */
   
  
}
