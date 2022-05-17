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

const developers = [
  {
    id:1,
    name: "John",
    skills:["HTML", "React", "Javascript", "Java"]
  },
    {
    id:2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"] 
  },
    {
      id:3,
      name: "Jack",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"]
    }
]

const resul = developers.reduce(function(allSkills, student){
  return [...allSkills, student.skills]
}, [])

console.log(resul);
/*Queremos obtener una variable de toda la suma de la edad de los estudiantes, por ejemplo*/
/*
let total = 0;
for (let i =0; i < students.length; i++){
 total += students[i].age
}
console.log(total);
*/

/*

const result = students.reduce((total, student) => {

  return total + student.age;
  
}, 0);

console.log(result);

*/

/*
const result = students.reduce((total, student) => total + student.age, 0);

console.log(result);
*/