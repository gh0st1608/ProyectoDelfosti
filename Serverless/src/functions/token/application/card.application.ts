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

  async create(card: Card) {
    let factory: Factory;
    //console.log('application',token)
    console.log('application',card)
    factory = new FactoryPE();

    const tokenCard = Token.generate()

    const tokenJwt = Token.signIn(card)

    await this.cardRepository.create(tokenCard,tokenJwt,factory);

    return tokenCard
  }
}
