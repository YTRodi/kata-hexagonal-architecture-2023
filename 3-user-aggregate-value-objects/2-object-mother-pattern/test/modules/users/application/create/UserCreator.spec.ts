import { InvalidArgumentError } from "../../../../../src/modules/shared/domain/value-object/InvalidArgumentError";
import { UserCreator } from "../../../../../src/modules/users/application/create/UserCreator";
import { UserRepositoryMock } from "../../__mocks__/UserRepositoryMock";
import { UserMother } from "../../domain/UserMother";
import { CreateUserRequestMother } from "./CreateUserRequestMother";

describe("UserCreator", () => {
	test("should create a valid iuser", async () => {
		const request = CreateUserRequestMother.random();
		const user = UserMother.fromRequest(request);
		const userRepository = new UserRepositoryMock();
		const userCreator = new UserCreator(userRepository);

		await userCreator.run(request);

		userRepository.assertSaveHaveBeenCalledWith(user);
	});

	it("should throw error if id is invalid", () => {
		expect(() => {
			CreateUserRequestMother.invalidUserIdRequest();
		}).toThrow(InvalidArgumentError);
	});

	it("should throw error if email is invalid", () => {
		expect(() => {
			CreateUserRequestMother.invalidUserEmailRequest();
		}).toThrow(InvalidArgumentError);
	});

	it("should throw error if password is invalid", () => {
		expect(() => {
			CreateUserRequestMother.invalidUserPasswordRequest();
		}).toThrow(InvalidArgumentError);
	});
});
