import { User } from "../../../../../src/modules/users/domain/User";
import { InMemoryUserRepository } from "../../../../../src/modules/users/infrastructure/persistence/InMemoryUserRepository";

describe("InMemoryUserRepository", () => {
	it("should save a user", async () => {
		const inMemoryUserRepository = new InMemoryUserRepository();
		const expectedUser = new User({
			id: "123e4567-e89b-12d3-a456-426614174000",
			email: "walter_white@gmail.com",
			password: "saymyname",
		});

		await inMemoryUserRepository.save(expectedUser);

		const user = await inMemoryUserRepository.search(expectedUser.id);

		expect(user).toEqual(expectedUser);
	});
});
