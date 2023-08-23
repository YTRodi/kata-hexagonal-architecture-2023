import { UserPassword } from "../../../../src/modules/users/domain/UserPassword";
import { MotherCreator } from "../../shared/domain/MotherCreator";

export class UserPasswordMother {
	static create(value: string): UserPassword {
		return new UserPassword(value);
	}

	static random(): UserPassword {
		return this.create(MotherCreator.random().internet.password());
	}

	static invalid(): UserPassword {
		return this.create(MotherCreator.random().internet.password({ length: 7 }));
	}
}
