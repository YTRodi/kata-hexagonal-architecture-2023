import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class InMemoryUserRepository implements UserRepository {
	private readonly users: User[] = [];

	async save(user: User): Promise<void> {
		this.users.push(user);

		// console.dir(
		// 	{
		// 		length: this.users.length,
		// 		users: this.users,
		// 	},
		// 	{ depth: null, colors: true },
		// );

		return Promise.resolve();
	}

	async search(userId: string): Promise<User | null> {
		const user = this.users.find((user) => {
			return user.id === userId;
		});

		if (!user) {
			throw new Error(`User with id ${userId} not found`);
		}

		return Promise.resolve(user);
	}
}
