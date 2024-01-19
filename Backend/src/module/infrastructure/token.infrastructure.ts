import Card from "../domain/card";
import TokenRepository from "../domain/repository/token.repository";
import Model from "./models/card.model";



export default class TokenInfrastructure implements TokenRepository {
  
  async insert(token: string, card : Card): Promise<void> {
    await Model.create({token: token,
       cardNumber : card.card_number, 
       cvv : card.cvv, 
       expirationMonth : card.expiration_month,
       expirationYear : card.expiration_year,
       email: card.email });
  }
  
  /* 
  async find(where: { [s: string]: string | number },
    ): Promise<Card | null> {
    return await Model.find(where);
  } */
   
  
}
