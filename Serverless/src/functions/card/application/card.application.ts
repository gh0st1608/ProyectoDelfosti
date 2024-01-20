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

  async find(tokenAuth: string) {
    let factory: Factory;
    //console.log('application',token)
    console.log('application',tokenAuth)
    factory = new FactoryPE();

    const payload : Card = Token.decode(tokenAuth)

    /* const token = Token.generate(token) */

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
    return await this.cardRepository.find(payload, factory);
  }
}
