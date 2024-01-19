import { v4 as uuidv4 } from 'uuid'
import jwt from "jwt-simple";
import moment from 'moment';
import EnvironmentVariables from "./app.service";



export default class TokenService {


   static async validateToken(accessToken: string) {
    return new Promise((resolve, reject) => {
      try {
        console.log(accessToken)
        const payload = jwt.decode(
          accessToken,
          EnvironmentVariables.TOKEN_SECRET_WORD
        );
        console.log(payload)
        resolve(payload);
      } catch (error: any) {
        console.log(error)
        if (error.message === "Token expired") {
          reject({ status: 409, message: "El token de la tarjeta ha expirado" });
        } else {
          reject({ status: 401, message: "El token ingresado no es válido" });
        }
      }
    });
  }

   static signIn(card: Object, tokenExpiration: number = EnvironmentVariables.TOKEN_TIMEOUT): string{

    const payload = {
      card: card,
      iat: moment().unix(),
      exp: moment().add(EnvironmentVariables.TOKEN_TIMEOUT, "minutes").unix(),
    };
    console.log(jwt.encode(payload, EnvironmentVariables.TOKEN_SECRET_WORD))
    return jwt.encode(payload, EnvironmentVariables.TOKEN_SECRET_WORD);
}}
