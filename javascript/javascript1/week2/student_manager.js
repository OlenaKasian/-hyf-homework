let class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length >= 6 && studentName !== 'Queen') {
    console.log('Cannot add more students to the class 07');
    return;
  }
  if (studentName === '') {
    console.log('The name should not be empty string');
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  class07Students.push(studentName);
  console.log(`Student ${studentName} is added to the class`);

}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass('Lena');
addStudentToClass('Nik');
addStudentToClass('Pippy');
addStudentToClass('Mikl');
addStudentToClass('Nana');
addStudentToClass('Max');
addStudentToClass('Mikl'); //Add a student that is already in the class
addStudentToClass('');
addStudentToClass('Lolo'); //Add more students than there is space for
addStudentToClass('Queen'); //Add the Queen to a full class

console.log(`The number of students in the class is ${getNumberOfStudents()}`);
console.log(class07Students);
