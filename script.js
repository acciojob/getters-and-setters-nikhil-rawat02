//complete this code
class Person {
	constructor(pName,pAge) {
		this.name = pName;
		this.age = pAge;
	}
	get name(){
		return this.name;
	}
	set age(pAge){
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

// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }
 
//   get name() {
//     return this._name;
//   }
 
//   /**
//    * @param {any} age
//    */
//   set age(age) {
//     this._age = age;
//   }
// }
 
// class Student extends Person {
//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }
 
// class Teacher extends Person {
//   teach() {
//     console.log(`${this.name} is teaching`);
//   }
// }
 
// window.Person = Person;
// window.Student = Student;
// window.Teacher = Teacher;