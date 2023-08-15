class Student {
    private _enrollment: string;
    private _name: string;
    private _examsGrades: number[] = Array(4);
    private _worksGrades: number[];

    constructor(enrollment: string, name: string, examsGrades: number[], worksGrades: number[]) {
        this._enrollment = enrollment;
        this._name = name;
        this.examsGrades = examsGrades;
        this._worksGrades = worksGrades;
    }

    public get enrollment(): string {
        return this._enrollment;
    }

    public set enrollment(value: string) {
        this._enrollment = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get examsGrades(): number[] {
        return this._examsGrades;
    }

    public set examsGrades(value: number[]) {
        if (value.length !== 4) throw new Error('The student must have 4 exam grades.');
        this._examsGrades = value;
    }

    public get worksGrades(): number[] {
        return this._worksGrades;
    }

    public set worksGrades(value: number[]) {
        this._worksGrades = value;
    }
}

const student1 = new Student('123456', 'João', [10, 8, 9], [7, 8.5, 9]);
console.log(student1);

const student2 = new Student('654321', 'Maria', [10, 9, 8], [6, 8, 9]);
console.log(student2);