import { UserId } from "../../../../src/modules/users/domain/UserId";
import { UuidMother } from "../../shared/domain/UuidMother";

export class UserIdMother {
	static create(value: string): UserId {
		return new UserId(value);
	}

	static random(): UserId {
		return this.create(UuidMother.random());
	}

	static invalid(): UserId {
		return this.create("invalid_id");
	}
}
