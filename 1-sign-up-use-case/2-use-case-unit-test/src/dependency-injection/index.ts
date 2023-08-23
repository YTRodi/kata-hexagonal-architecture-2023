import { UserCreator } from "../modules/users/application/create/UserCreator";
import { UserRepository } from "../modules/users/domain/UserRepository";

// Repository implementations
const userRepository: UserRepository = {
	async save(user) {
		// eslint-disable-next-line no-console
		console.log("Saving user", user);

		return Promise.resolve();
	},
};

// Use cases
export const userCreator = new UserCreator(userRepository);
