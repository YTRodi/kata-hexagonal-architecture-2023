import { User } from "../../../../../src/modules/users/domain/User";
import { UserEmail } from "../../../../../src/modules/users/domain/UserEmail";
import { UserId } from "../../../../../src/modules/users/domain/UserId";
import { UserPassword } from "../../../../../src/modules/users/domain/UserPassword";
import { InMemoryUserRepository } from "../../../../../src/modules/users/infrastructure/persistence/InMemoryUserRepository";

describe("InMemoryUserRepository", () => {
	it("should save a user", async () => {
		const inMemoryUserRepository = new InMemoryUserRepository();
		const expectedUser = new User({
			id: new UserId("123e4567-e89b-12d3-a456-426614174000"),
			email: new UserEmail("walter_white@gmail.com"),
			password: new UserPassword("saymyname"),
		});

		await inMemoryUserRepository.save(expectedUser);

		const user = await inMemoryUserRepository.search(expectedUser.id);

		expect(user).toEqual(expectedUser);
	});
});
