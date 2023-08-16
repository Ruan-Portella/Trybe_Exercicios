export default class Person {
    protected MINIMUM_NAME_LENGTH: number = 3;
    protected MINIMUM_AGE: number = 0;

    constructor(
        private _name: string,
        private _age: number
    ) {
        this.validatePerson();
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this.validateName(name);
        this._name = name;
    }

    get birthDate(): number {
        return this._age
    }

    set birthDate(age: number) {
        this.validateAge(age);
        this._age = age;
    }

    static getAge(birthDate: number): number {
        const today = new Date();
        const currentYear = today.getFullYear();
        const age = currentYear - birthDate;

        return age;
    }

    private validateName(name: string): void {
        if (!name || name.length < this.MINIMUM_NAME_LENGTH) {
            throw new Error(`Invalid name: ${name}`);
        }
    }

    private validateAge(age: number): void {
        if (age < this.MINIMUM_AGE) {
            throw new Error(`Invalid age: ${age}`);
        }
    }

    private validatePerson(): void {
        this.validateName(this._name);
        this.validateAge(this._age);
    }
}

class Student extends Person {
    private _class: string;

    constructor(name: string, age: number, _class: string) {
        super(name, age);
        this._class = _class;
    }

    get class(): string {
        return this._class;
    }

    set class(_class: string) {
        this._class = _class;
    }
}

const student = new Student('John Doe', 1995, 'Math');
console.log(student.birthDate);
