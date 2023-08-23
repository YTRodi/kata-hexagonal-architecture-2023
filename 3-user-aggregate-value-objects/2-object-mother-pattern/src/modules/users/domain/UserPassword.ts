import { z } from "zod";

import { InvalidArgumentError } from "../../shared/domain/value-object/InvalidArgumentError";

export class UserPassword {
	constructor(readonly value: string) {
		this.ensurePasswordIsValid(value);
	}

	private ensurePasswordIsValid(password: string): void {
		const result = z
			.string()
			.min(8, {
				message: "Password must contain at least 8 character(s)",
			})
			.safeParse(password);

		if (!result.success) {
			throw new InvalidArgumentError(`<${password}> is not a valid password`);
		}
	}
}
