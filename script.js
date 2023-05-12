//complete this code
class Person {
	function Person(pName , pAge){
		this.name = pName;
		this.age = pAge;
	}
	function setName(pName){
		this.name = pName;
	}
	function setAge(pAge){
		this.age = pAge;
	}
}

class Student extends Person {
	function study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	function teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
