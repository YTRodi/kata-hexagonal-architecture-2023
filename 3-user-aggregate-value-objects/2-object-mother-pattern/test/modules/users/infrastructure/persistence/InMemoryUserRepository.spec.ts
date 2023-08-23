import { InMemoryUserRepository } from "../../../../../src/modules/users/infrastructure/persistence/InMemoryUserRepository";
import { UserMother } from "../../domain/UserMother";

describe("InMemoryUserRepository", () => {
	it("should save a user", async () => {
		const inMemoryUserRepository = new InMemoryUserRepository();
		const expectedUser = UserMother.random();

		await inMemoryUserRepository.save(expectedUser);

		const user = await inMemoryUserRepository.search(expectedUser.id);

		expect(user).toEqual(expectedUser);
	});
});
