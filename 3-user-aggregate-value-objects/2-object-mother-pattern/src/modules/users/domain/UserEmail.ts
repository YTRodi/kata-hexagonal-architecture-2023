import { z } from "zod";

import { InvalidArgumentError } from "../../shared/domain/value-object/InvalidArgumentError";

export class UserEmail {
	constructor(readonly value: string) {
		this.ensureIsValidEmail(value);
	}

	equals(otherEmail: UserEmail): boolean {
		return otherEmail.constructor.name === this.constructor.name && otherEmail.value === this.value;
	}

	private ensureIsValidEmail(email: string): void {
		const result = z.string().email().safeParse(email);

		if (!result.success) {
			throw new InvalidArgumentError(`<${email}> is not a valid email`);
		}
	}
}
