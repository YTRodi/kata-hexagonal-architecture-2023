import { CreateUserRequest } from "../../../../../src/modules/users/application/create/CreateUserRequest";
import { UserEmail } from "../../../../../src/modules/users/domain/UserEmail";
import { UserId } from "../../../../../src/modules/users/domain/UserId";
import { UserPassword } from "../../../../../src/modules/users/domain/UserPassword";
import { UserEmailMother } from "../../domain/UserEmailMother";
import { UserIdMother } from "../../domain/UserIdMother";
import { UserPasswordMother } from "../../domain/UserPasswordMother";

export class CreateUserRequestMother {
	static create(id: UserId, email: UserEmail, password: UserPassword): CreateUserRequest {
		return {
			id: id.value,
			email: email.value,
			password: password.value,
		};
	}

	static random(): CreateUserRequest {
		return {
			id: UserIdMother.random().value,
			email: UserEmailMother.random().value,
			password: UserPasswordMother.random().value,
		};
	}

	static invalidUserIdRequest(): CreateUserRequest {
		return {
			id: UserIdMother.invalid().value,
			email: UserEmailMother.random().value,
			password: UserPasswordMother.random().value,
		};
	}

	static invalidUserEmailRequest(): CreateUserRequest {
		return {
			id: UserIdMother.random().value,
			email: UserEmailMother.invalid().value,
			password: UserPasswordMother.random().value,
		};
	}

	static invalidUserPasswordRequest(): CreateUserRequest {
		return {
			id: UserIdMother.random().value,
			email: UserEmailMother.random().value,
			password: UserPasswordMother.invalid().value,
		};
	}
}
