
interface ICategory {
    id: string;
    name: string;
    description: string;

    getId(): string;
    getName(): string;
    getDescription(): string;

    setId(value: string): void;
    setName(value: string): void;
    setDescription(value: string): void;
}

export class Category implements ICategory{
    id: string;
    name: string;
    description: string;

    getId(): string{
        return(this.id);
    };
    getName(): string{
        return(this.name);
    };
    getDescription(): string{
        return(this.description);
    };

    setId(value: string): void{
        this.id = value;
    };
    setName(value: string): void{
        this.name = value;
    };
    setDescription(value: string): void{
        this.description = value;
    };
}
