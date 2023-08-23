import { User } from "./User";

export interface UserRepository {
	save(user: User): Promise<void>;
	search(userId: string): Promise<User | null>;
}
