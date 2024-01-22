import { Card } from "../domain/card";
import { CardRepository } from "../domain/repositories/card.repository";
import {Token} from '../helpers/token.helper'
import {
  Factory,
  FactoryPE
/*   FactoryCO,
  FactoryEC,*/
   
} from "../infrastructure/card.factory";

export class CardApplication {
  constructor(private cardRepository: CardRepository) {}

  async find(tokenCard: string) {
    let factory: Factory;
    //console.log('application',token)
    console.log('application',tokenCard)
    factory = new FactoryPE();
    const card = await this.cardRepository.find(tokenCard, factory);

    const data = Token.decode(card['Item']['tokenJwt'])


    const cardResponse = new Card(data['card'])

    const result = {...cardResponse, cvv: undefined}

    console.log(result)
    return result
  }
}
