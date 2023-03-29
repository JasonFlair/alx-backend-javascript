interface Teacher {
    firstName: string,
    lastName: string,
    readonly fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    readonly location: string,
    [key: string]: any,
  }

interface Directors extends Teacher {
    numberOfReports: number,
}


function printTeacher(firstName: string, lastName:string):string {
    return (`${firstName.slice(0, 1)}. ${lastName}`);
}

interface StudentConstructor {
    firstName: string,
    lastName:string,
}

interface Studentcls {
    workOnHomework(): string,
    displayName(): string,
}

class StudentClass implements Studentcls{
    firstName: string;
    lastName:string;

    constructor ({firstName, lastName}: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return `Currently working`;
    }

    displayName() {
        return this.firstName;
    }

}
