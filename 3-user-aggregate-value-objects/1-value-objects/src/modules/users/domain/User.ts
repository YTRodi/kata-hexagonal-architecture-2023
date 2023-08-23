import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserPassword } from "./UserPassword";

export interface UserProps {
	id: UserId;
	email: UserEmail;
	password: UserPassword;
}

export class User {
	private readonly _id: UserId;
	private _email: UserEmail;
	private readonly _password: UserPassword;

	constructor({ id, email, password }: UserProps) {
		this._id = id;
		this._email = email;
		this._password = password;
	}

	get id(): string {
		return this._id.value;
	}

	get email(): string {
		return this._email.value;
	}

	get password(): string {
		return this._password.value;
	}

	updateEmail(newEmail: string): void {
		this._email = new UserEmail(newEmail);
	}
}
