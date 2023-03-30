declare namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number,
    }
    class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC == undefined) {
                return 'No available teacher'
            } else if (this.teacher.experienceTeachingC <= 0){
                return 'No available teacher'
            } else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
}