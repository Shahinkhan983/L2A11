interface Student {
    name: string;
    age: number;
    grades: number[];
}

function calculateAverageGrade(student: Student): number {
    const { grades } = student;
    if (grades.length === 0) {
        return 0; 
    }
    const sum = grades.reduce((acc, curr) => acc + curr, 0);
    return sum / grades.length;
}

const student1: Student = {     
			    name: "Bob",     
			    age: 17,     
			    grades: [75, 80, 82, 88, 90]
                       };


const averageGradeForBob = calculateAverageGrade(student1); 
console.log(averageGradeForBob)