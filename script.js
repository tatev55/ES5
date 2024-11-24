// function Book(title, author, publication_year){
//   this.title = title;
//   this.author = author;
//   this.publication_year = publication_year;
// }
// Book.prototype.display_details = function(){
//   return 'Title: ' + this.title + ', Author: ' + this.author + ', Publication Year: ' + this.publication_year;
// }

// function Ebook(title, author, publication_year, price){
//   Book.call(this, title, author, publication_year);
//   this.price = price;
// }

// Ebook.prototype = Object.create(Book.prototype);
// Ebook.prototype.constructor = Ebook;

// Ebook.prototype.display_details = function(){
//   return Book.prototype.display_details.call(this) + ' Price: ' + this.price;
// }

// const book = new Book('The Boy in the Striped Pyjamas', 'John Boyne', 2006);
// console.log(book.display_details()); 

// const ebook = new Ebook('The Count of Monte Cristo', 'Alexandre Dumas', 1844, 20);
// console.log(ebook.display_details());




// function Person(firstName, lastName, gender, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gender = gender;
//     this.age = age;
//   }
  
//   Object.defineProperty(Person.prototype, 'fullName', {
//     get: function() {
//       return this.firstName + ' ' + this.lastName;
//     },
//     set: function(value) {
//       var parts = value.split(' ');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
//   });
  
//   Person.prototype.toString = function() {
//     return `fullName: ${this.firstName} ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}`;
//   }
  
//   function Students(firstName, lastName, gender, age, program = [], year, fee) {
//     Person.call(this, firstName, lastName, gender, age);
//     this.program = program;
//     this.year = year;
//     this.fee = fee;
//   }
  
//   Students.prototype = Object.create(Person.prototype);
//   Students.prototype.constructor = Students;
  
//   Students.prototype.passExam = function(program, grade) {
//     if (this.program.includes(program) && grade >= 50) {
//       this.year += 1;
//     }
//   }
  
//   Students.prototype.toString = function() {
//     return Person.prototype.toString.call(this) + ' Program: ' + this.program.join(', ') + ' Year: ' + this.year + ' Fee: ' + this.fee;
//   }
  
//   function Teacher(firstName, lastName, gender, age, program, pay) {
//     Person.call(this, firstName, lastName, gender, age);
//     this.program = program;
//     this.pay = pay;
//   }
  
//   Teacher.prototype = Object.create(Person.prototype);
//   Teacher.prototype.constructor = Teacher;
  
//   Teacher.prototype.toString = function() {
//     return Person.prototype.toString.call(this) + ' Program: ' + this.program + ' Pay: ' + this.pay;
//   }
  
//   const student = new Students('Henry', 'Smith', 'Female', 27, ['Math', 'Informatika'], 3, 2000);
//   student.passExam('Math', 55); 
//   console.log(student.toString());
//   const teacher = new Teacher('John', 'Doe', 'Male', 35, 'Math', 3000);
//   console.log(teacher.toString());


