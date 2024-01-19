import CardResponse from "../domain/cardResponse";
import CardRepository from "../domain/repository/card.repository";
import Model from "./models/card.model";



export default class CardInfrastructure implements CardRepository {
  
  /*
  async insert(token : string, card : Card): Promise<void> {
    await Model.create(card);
  }
*/
  async findOne(where: { [s: string]: string | number }): Promise<CardResponse | null> {
    return await Model.findOne(where);
     
  }
  
  
}
