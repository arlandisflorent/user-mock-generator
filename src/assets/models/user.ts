import { CreditCard } from './creditCard';

export class User {
	constructor(
    private firstname: string,
    private lastname: string,
    private email: string,
    private password: string,
    private dateOfBirth: string,
    private creditCard: CreditCard) {
	}
}