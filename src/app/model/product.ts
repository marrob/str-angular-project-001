interface IProduct {
    id: number;
    catId: number;
    name: string;
    description: string;
    title: string;
    publisher: string;
    releaseYear: number;
    image: string;
    price: number;
    stock: number;
    featured: boolean;
    active: boolean;
}

export class Product implements IProduct {
    id: number;
    catId: number;
    name: string;
    description: string;
    title: string;
    publisher: string;
    releaseYear: number;
    image: string;
    price: number;
    stock: number;
    featured: boolean;
    active: boolean;

    constructor() { };

}
