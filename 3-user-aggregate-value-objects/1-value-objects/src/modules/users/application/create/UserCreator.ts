import { UseCase } from "../../../shared/domain/UseCase";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { CreateUserRequest } from "./CreateUserRequest";

export class UserCreator implements UseCase<CreateUserRequest, void> {
	constructor(private readonly repository: UserRepository) {}

	async run(request: CreateUserRequest): Promise<void> {
		const { id, email, password } = request;
		const user = new User({
			id,
			email,
			password,
		});

		await this.repository.save(user);
	}
}
