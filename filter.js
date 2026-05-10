const students = [
  { name: "Alex", grade: 85 },
  { name: "Maya", grade: 92 },
  { name: "Sam", grade: 67 },
  { name: "Nina", grade: 74 }
];

const studentWith80Plus= students.filter((student)=>{
   
   return student.grade >= 80;
});

const studentNames = studentWith80Plus.map((student) => {
    return student.name;
});

console.log(studentWith80Plus);

console.log(studentNames); // Output: ["Alex", "Maya"]
