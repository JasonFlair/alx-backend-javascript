interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const firstStudent: Student = {
    firstName: 'Jason',
    lastName: 'Obumse',
    age: 22,
    location: 'Onitsha',
} 

const secondStudent: Student = {
    firstName: 'Leela',
    lastName: 'Obumse',
    age: 21,
    location: 'Onitsha',
} 

const studentsList = [firstStudent, secondStudent];
console.table(studentsList, ['firstName', 'location']);