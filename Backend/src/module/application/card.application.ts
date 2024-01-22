import Card from "../domain/card";
import CardRepository from "../domain/repository/card.repository";
import TokenService from "../../services/token.service";

export default class CardApplication {
  readonly repository: CardRepository;

  constructor(repository: CardRepository) {
    this.repository = repository;
  }

 async getCardByToken(tokenCard: string): Promise<Card> {
        

        const card = await this.repository.findOne({tokenCard});

        const data : any = !card? console.log("No se ha encontrado la tarjeta porque el token ha expirado")  : await TokenService.validateToken(card.tokenJwt)
        
        const result = {...data['card'],cvv : undefined}
        /* const result : Card= {...data,cvv : undefined} */
        return result

};



  /*
  async getNewAccessToken(refreshToken: string): Promise<Tokens | null> {
    const auth = await this.repository.findOne({ refreshToken });

    if (auth) {
      const accessToken = AuthAppService.generateAccessToken(
        auth._id,
        auth.user
      );
      const newRefreshToken = AuthAppService.generateRefreshToken();

      await this.repository.update(
        { refreshToken },
        { refreshToken: newRefreshToken }
      );

      return { accessToken, refreshToken: newRefreshToken };
    } else {
      return null;
    }
  }
  */
}
