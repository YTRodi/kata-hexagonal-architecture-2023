import { UseCase } from "../../../shared/domain/UseCase";
import { User } from "../../domain/User";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserPassword } from "../../domain/UserPassword";
import { UserRepository } from "../../domain/UserRepository";
import { CreateUserRequest } from "./CreateUserRequest";

export class UserCreator implements UseCase<CreateUserRequest, void> {
	constructor(private readonly repository: UserRepository) {}

	async run(request: CreateUserRequest): Promise<void> {
		const { id, email, password } = request;
		const user = new User({
			id: new UserId(id),
			email: new UserEmail(email),
			password: new UserPassword(password),
		});

		await this.repository.save(user);
	}
}
