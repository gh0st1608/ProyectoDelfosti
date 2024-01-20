import jwt from "jwt-simple";
import moment from "moment";

export class Token {
    static generate(card : Object): string {
      const payload = {
        card : card,
        iat: moment().unix(),
        exp: moment().add(15, "minutes").unix(),
      };
  
      return jwt.encode(payload, process.env.JWT_SECRET);
    }

    static decode(token: string) : any {
      return jwt.decode(
        token,
        process.env.TOKEN_SECRET_WORD
      );
    }
  }
  
  