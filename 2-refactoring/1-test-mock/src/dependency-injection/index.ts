import { UserCreator } from "../modules/users/application/create/UserCreator";
import { InMemoryUserRepository } from "../modules/users/infrastructure/persistence/InMemoryUserRepository";

// Repository implementations
const userRepository = new InMemoryUserRepository();

// Use cases
export const userCreator = new UserCreator(userRepository);
