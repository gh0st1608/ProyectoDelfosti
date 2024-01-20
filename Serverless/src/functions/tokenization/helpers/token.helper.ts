import jwt from "jwt-simple";
import moment from "moment";

export class Token {
    static generate(): string {
      const payload = {
        iat: moment().unix(),
        exp: moment().add(15, "minutes").unix(),
      };
  
      return jwt.encode(payload, process.env.JWT_SECRET);
    }
  }
  
  