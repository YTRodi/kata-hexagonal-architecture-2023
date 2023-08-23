import { v4 as uuid } from "uuid";
import validate from "uuid-validate";

import { InvalidArgumentError } from "./InvalidArgumentError";

export class Uuid {
	constructor(readonly value: string) {
		this.ensureIsValidUuid(value);
	}

	static random(): Uuid {
		return new Uuid(uuid());
	}

	private ensureIsValidUuid(id: string): void {
		if (!validate(id)) {
			throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
		}
	}
}
