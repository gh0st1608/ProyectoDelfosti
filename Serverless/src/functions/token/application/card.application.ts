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

    const tokenRes = Token.generate(card)

/*     switch (appointment.countryISO) {
      case "PE":
        factory = new FactoryPE();
        break;
      case "CO":
        factory = new FactoryCO();
        break;
      case "EC":
        factory = new FactoryEC();
        break;
    } */
    await this.cardRepository.create(tokenRes, card, factory);

    return tokenRes
  }
}
