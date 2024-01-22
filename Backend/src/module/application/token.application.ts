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
    const tokenCard = TokenService.generate();
    const tokenJwt = TokenService.signIn(card);
    console.log(tokenCard,tokenJwt)
    await this.repository.insert(tokenCard,tokenJwt); 
    return tokenCard
  }
}
