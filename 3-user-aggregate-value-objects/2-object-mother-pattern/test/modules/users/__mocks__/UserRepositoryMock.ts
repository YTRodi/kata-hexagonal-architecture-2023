import { User } from "../../../../src/modules/users/domain/User";
import { UserRepository } from "../../../../src/modules/users/domain/UserRepository";

export class UserRepositoryMock implements UserRepository {
	private readonly saveMock: jest.Mock;

	constructor() {
		this.saveMock = jest.fn();
	}

	async save(user: User): Promise<void> {
		this.saveMock(user);

		return Promise.resolve();
	}

	async search(_userId: string): Promise<User> {
		throw new Error("Method not implemented.");
	}

	assertSaveHaveBeenCalledWith(expectedUser: User): void {
		expect(this.saveMock).toHaveBeenCalledWith(expectedUser);
	}
}
