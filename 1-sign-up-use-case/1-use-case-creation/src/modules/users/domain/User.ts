import validate from "uuid-validate";
import { z } from "zod";

import { InvalidArgumentError } from "../../shared/domain/value-object/InvalidArgumentError";

export interface UserProps {
	id: string;
	email: string;
	password: string;
}

export class User {
	readonly id: string; // UUID
	email: string;
	readonly password: string;

	constructor({ id, email, password }: UserProps) {
		this.ensureIsValidUuid(id);
		this.ensureIsValidEmail(email);
		this.ensurePasswordIsValid(password);

		this.id = id;
		this.email = email;
		this.password = password;
	}

	updateEmail(newEmail: string): void {
		this.ensureIsValidEmail(newEmail);
		this.email = newEmail;
	}

	private ensureIsValidUuid(id: string): void {
		if (!validate(id)) {
			throw new InvalidArgumentError(`<${id}> is not a valid UUID`);
		}
	}

	private ensureIsValidEmail(email: string): void {
		const result = z.string().email().safeParse(email);

		if (!result.success) {
			throw new InvalidArgumentError(`<${email}> is not a valid email`);
		}
	}

	private ensurePasswordIsValid(password: string): void {
		const result = z.string().min(8).safeParse(password);

		if (!result.success) {
			throw new InvalidArgumentError(`<${password}> is not a valid password`);
		}
	}
}
