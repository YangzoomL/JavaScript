const students = [
  { name: "Alex", grade: 85 },
  { name: "Maya", grade: 92 },
  { name: "Sam", grade: 67 },
  { name: "Nina", grade: 74 }
];

const studentsName= students.map((student) =>{
    return student.name;
});

console.log(studentsName); 