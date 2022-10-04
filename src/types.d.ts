export interface Owner {
	id: number;
	firstName: string;
	lastName: string;
	address: string;
	city: string;
	telephone: string;
	pets: Pet[];
}
export interface Pet {
	id: number;
	ownerId: number;
	name: string;
	birthDate: string;
	type: PetType;
	visits: object[];
}
export interface PetType {
	id: number;
	name: string;
}