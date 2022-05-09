//sample array of students

const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "Jhon",
    lastname: "Doe",
    age: 22,
    course: "web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    course: "web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Finalcial Management",
  }
];

/*
for(let i = 0; i<=students.length; i++){
  console.log(students[i]);
}
*/

/*
students.forEach((student, index, students) => {
  console.log(student);
  console.log(index);
  console.log(students);
})
*/
/*
students.forEach((student) => {
  console.log(`${student.name} ${student.lastname}`);

})
*/
const fullNames= [];
students.forEach((student) => {
  fullNames.push(`${student.name} ${student.lastname}`);
});

console.log(fullNames);