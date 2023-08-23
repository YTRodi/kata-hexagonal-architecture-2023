import { Application, Request, Response } from "express";

import { userCreator } from "../dependency-injection";
import { InvalidArgumentError } from "../modules/shared/domain/value-object/InvalidArgumentError";

export const loadApiEndpoints = (app: Application): void => {
	// Controllers
	app.post("/api/auth/sign-up", async (req: Request, res: Response) => {
		try {
			await userCreator.run(req.body);

			return res.status(201).send();
		} catch (error) {
			if (error instanceof InvalidArgumentError) {
				return res.status(400).json({
					error: error.message,
				});
			}

			return res.status(400).send();
		}
	});
};
