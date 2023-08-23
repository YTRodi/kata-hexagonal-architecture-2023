import { InvalidArgumentError } from "../../../../../src/modules/shared/domain/value-object/InvalidArgumentError";
import { CreateUserRequest } from "../../../../../src/modules/users/application/create/CreateUserRequest";
import { UserCreator } from "../../../../../src/modules/users/application/create/UserCreator";
import { User } from "../../../../../src/modules/users/domain/User";
import { UserEmail } from "../../../../../src/modules/users/domain/UserEmail";
import { UserId } from "../../../../../src/modules/users/domain/UserId";
import { UserPassword } from "../../../../../src/modules/users/domain/UserPassword";
import { UserRepositoryMock } from "../../__mocks__/UserRepositoryMock";

describe("UserCreator", () => {
	test("should create a valid iuser", async () => {
		const userRepository = new UserRepositoryMock();
		const userCreator = new UserCreator(userRepository);
		const request: CreateUserRequest = {
			id: "123e4567-e89b-12d3-a456-426614174000",
			email: "walter_white@gmail.com",
			password: "saymyname",
		};
		const user = new User({
			id: new UserId(request.id),
			email: new UserEmail(request.email),
			password: new UserPassword(request.password),
		});

		await userCreator.run(request);
		userRepository.assertSaveHaveBeenCalledWith(user);
	});

	it("should throw error if id is invalid", () => {
		expect(() => {
			new User({
				id: new UserId("1"),
				email: new UserEmail("walter_white@gmail.com"),
				password: new UserPassword("saymyname"),
			});
		}).toThrow(InvalidArgumentError);
	});

	it("should throw error if email is invalid", () => {
		expect(() => {
			new User({
				id: new UserId("123e4567-e89b-12d3-a456-426614174000"),
				email: new UserEmail("user_test.com"),
				password: new UserPassword("saymyname"),
			});
		}).toThrow(InvalidArgumentError);
	});

	it("should throw error if password is invalid", () => {
		expect(() => {
			new User({
				id: new UserId("123e4567-e89b-12d3-a456-426614174000"),
				email: new UserEmail("walter_white@gmail.com"),
				password: new UserPassword("123"),
			});
		}).toThrow(InvalidArgumentError);
	});
});
