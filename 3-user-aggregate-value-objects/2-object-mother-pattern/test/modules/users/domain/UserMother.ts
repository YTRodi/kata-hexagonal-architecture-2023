import { CreateUserRequest } from "../../../../src/modules/users/application/create/CreateUserRequest";
import { User, UserProps } from "../../../../src/modules/users/domain/User";
import { UserEmailMother } from "./UserEmailMother";
import { UserIdMother } from "./UserIdMother";
import { UserPasswordMother } from "./UserPasswordMother";

export class UserMother {
	static create({ id, email, password }: UserProps): User {
		return new User({ id, email, password });
	}

	static fromRequest(request: CreateUserRequest): User {
		return this.create({
			id: UserIdMother.create(request.id),
			email: UserEmailMother.create(request.email),
			password: UserPasswordMother.create(request.password),
		});
	}

	static random(): User {
		return this.create({
			id: UserIdMother.random(),
			email: UserEmailMother.random(),
			password: UserPasswordMother.random(),
		});
	}
}
