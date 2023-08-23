import { InvalidArgumentError } from "../../../../../src/modules/shared/domain/value-object/InvalidArgumentError";
import { CreateUserRequest } from "../../../../../src/modules/users/application/create/CreateUserRequest";
import { UserCreator } from "../../../../../src/modules/users/application/create/UserCreator";
import { User } from "../../../../../src/modules/users/domain/User";
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
			id: request.id,
			email: request.email,
			password: request.password,
		});

		await userCreator.run(request);
		userRepository.assertSaveHaveBeenCalledWith(user);
	});

	it("should throw error if id is invalid", () => {
		expect(() => {
			new User({
				id: "1",
				email: "walter_white@gmail.com",
				password: "saymyname",
			});
		}).toThrow(InvalidArgumentError);
	});

	it("should throw error if email is invalid", () => {
		expect(() => {
			new User({
				id: "123e4567-e89b-12d3-a456-426614174000",
				email: "user_test.com",
				password: "saymyname",
			});
		}).toThrow(InvalidArgumentError);
	});

	it("should throw error if password is invalid", () => {
		expect(() => {
			new User({
				id: "123e4567-e89b-12d3-a456-426614174000",
				email: "walter_white@gmail.com",
				password: "123",
			});
		}).toThrow(InvalidArgumentError);
	});
});
