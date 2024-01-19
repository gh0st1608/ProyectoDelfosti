import CardResponse from "../domain/cardResponse";
import CardRepository from "../domain/repository/card.repository";
import TokenService from "../../services/token.service";

export default class CardApplication {
  readonly repository: CardRepository;

  constructor(repository: CardRepository) {
    this.repository = repository;
  }

 async getCardByToken(token: string): Promise<CardResponse | null> {
        await TokenService.validateToken(token);
        const cardWithToken = await this.repository.findOne({token});
        if (!cardWithToken){
          console.log("No se ha encontrado la tarjeta porque el token ha expirado")
          return null   
        }
        return {cardNumber : cardWithToken.cardNumber,
          expirationMonth : cardWithToken.expirationMonth,
          expirationYear : cardWithToken.expirationYear}
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
