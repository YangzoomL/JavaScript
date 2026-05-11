const students = [
  { name: "Alex", grade: 85 },
  { name: "Maya", grade: 92 },
  { name: "Sam", grade: 67 },
  { name: "Nina", grade: 74 }
];

const findSam= students.find((student) => {
    return student.name === "Sam";
});

console.log(findSam); 