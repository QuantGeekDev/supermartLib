import { ValidationError } from "express-validator";
import { CustomError } from "./CustomError.js";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid request");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serialiseErrors() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}