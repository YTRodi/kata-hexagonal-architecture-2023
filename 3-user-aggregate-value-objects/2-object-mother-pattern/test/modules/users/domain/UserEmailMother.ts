import { UserEmail } from "../../../../src/modules/users/domain/UserEmail";
import { MotherCreator } from "../../shared/domain/MotherCreator";

export class UserEmailMother {
	static create(value: string): UserEmail {
		return new UserEmail(value);
	}

	static random(): UserEmail {
		return this.create(MotherCreator.random().internet.email());
	}

	static invalid(): UserEmail {
		return this.create("user_test.com");
	}
}
