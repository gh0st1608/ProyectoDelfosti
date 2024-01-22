import Card from "../domain/card";
import CardRepository from "../domain/repository/card.repository";
import Model from "./models/card.model";



export default class CardInfrastructure implements CardRepository {
  

  async findOne(where: { [s: string]: string | number }): Promise<Card | null> {
    return await Model.findOne(where);
     
  }
  
  
}
