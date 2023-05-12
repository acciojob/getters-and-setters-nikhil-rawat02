//complete this code
class Person {
	constructor(pName,pAge) {
		this.name = pName;
		this.age = pAge;
	}
	set Name(pName){
		this.name = pName;
	}
	set Age(pAge){
		this.age = pAge;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
