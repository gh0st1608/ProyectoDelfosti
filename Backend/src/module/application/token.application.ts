import Card from "../domain/card";
import TokenRepository from "../domain/repository/token.repository";
import TokenService from "../../services/token.service";
export default class TokenApplication {
  readonly repository: TokenRepository;

  constructor(
    repository: TokenRepository,
  ) {
    this.repository = repository;
  }

  async createToken(card: Card) : Promise<string>{
    const token = TokenService.signIn(card);
    //falta transformar a modelo de datos de la bd
    const cardWithToken = {...card,token};
    console.log(cardWithToken)
    await this.repository.insert(`${token}`,cardWithToken); //setPaymentInformationWithExpiration
    return token

  }
}
