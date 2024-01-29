import { CreditCard } from './creditCard';

export class User {
	constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public dateOfBirth: string,
    public creditCard: CreditCard) {
	}
}