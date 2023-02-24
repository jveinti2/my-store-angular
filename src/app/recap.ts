const username: string = 'jhonatan';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 1);

// class Person {
//     age: number;
//     lastName: string;

//     constructor(age: number, lastName:string) {
//         this.age = age;
//         this.lastName = lastName;
//     }
// }

class Person {
  constructor(public age: number, public lastName: string) {}
}

const jhonatan = new Person(27, 'jhonatan');
