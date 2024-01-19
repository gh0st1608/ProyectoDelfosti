import joi from "joi";
import { Request, Response, NextFunction } from 'express';
import { IError } from "./errors.service";

export default class ValidatorsService {
  static validate(schemaJSON: { [s: string]: joi.ObjectSchema<any> }) {
    return (req: Request, res: Response, next: NextFunction) => {
      const parametersOrigin = ["body", "headers", "params", "query"];
      const validationsList: Array<joi.ValidationResult> = [];

      parametersOrigin.forEach((origin: string) => {
        //console.log(origin)
        if (schemaJSON.hasOwnProperty(origin)) {
          switch (origin) {
            case "body":
              validationsList.push(
                schemaJSON[origin].validate(req.body, { abortEarly: false })
              );
              break;
            case "headers":
              console.log(req.headers)
              validationsList.push(
                schemaJSON[origin].validate(req.headers, { abortEarly: false })
              );
              break;
            case "params":
              validationsList.push(
                schemaJSON[origin].validate(req.params, { abortEarly: false })
              );
              break;
            case "query":
              validationsList.push(
                schemaJSON[origin].validate(req.query, { abortEarly: false })
              );
              break;
          }
        }
      });

      Promise.all(validationsList).then((results) => {
        for (const result of results) {
          if (result.error) {
            const err: IError = new Error("Error in parameters");
            err.status = 400; // BAD REQUEST
            err.message = "Parameters error";
            err.stack = result.error.toString();

            next(err);
          }
        }
        next();
      });
    };
  }
}
