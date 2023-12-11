/* eslint-disable no-restricted-syntax */
import { NextFunction, Request, Response } from "express";
import z from "zod";

const validator = (...schemas: z.Schema[]) =>
  async <
    Req extends Request<object, object, object, object>,
    Res extends Response,
    Next extends NextFunction,
  >(
    req: Req,
    _res: Res,
    next: Next,
  ) => {
    // console.log(
    //   `\nValidando rota ${req.method} ${
    //     req.baseUrl + req.path
    //   }. Quantidade de schemas: ${schemas.length}`
    // );

    const originalRequest = { ...req };

    try {
      for (const schema of schemas) {
        const actualSchema = {
          query: originalRequest.query,
          params: originalRequest.params,
          body: originalRequest.body,
        };

        const { query, params, body } = await schema.parseAsync(actualSchema);

        req.query = { ...req.query, ...query };
        req.params = { ...req.params, ...params };
        req.body = { ...req.body, ...body };
      }

      // console.log("final request: ", req.query, req.params, req.body);
      next();
    } catch (error) {
      next(error);
    }
  };

export default validator;