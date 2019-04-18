//Template literal

console.log(`Hello! I'm a string`); //using back-ticks `` instead of single or double quotes
console.log("string text 1/n" + "string text 2"); //you'd need to use \n to create 2 lines.
console.log(`Hello I'm a string
continues on this line`); //using `` allows a econd line of console log when you hit enter

const name = "Jimmy"
const day = "Wednesday"

console.log("Hello" + name + "I hope you have a great day on" + day); //uses string concatenation to create a proper console log sentence
// NOTE: the way it is written here, the console will read: HelloJimmyI hope you have a great day onWednesday
//to make it read properly you'll need to make sure to add spaces inside your quotes, ie. "Hello "

console.log(`Hello ${name} I hope you have a great day on ${day}!`); //interpolation

//interpolation can be used on objects as well

const instructor = {
    name: "Chris",
    lesson: "ES6",
    greet: function(){
        return `Our instructor ${this.name} is teaching ${this.lesson} today` //we can use interpolation for functions as well. When we reference an object's own properties we use "this"
    }
}

console.log(`Our instructor ${instructor.name} is teaching ${instructor.lesson} today`);

console.log(instructor.greet());

function foo() {
    let x = true; //because the let is within function foo but outside the if statement, it can be used "globally" within the foo function
                   // this is called hoisting and is part of scope. Think of "scope of influence", as in "what can this affect?"
    if(x) {
        var usingVar = "I'm using var";
    }
    console.log(usingVar); 
}

foo(); //Console reads: I'm using var

const instructors = ["Jimm", "Christ"]
//instructors = ["Jim", "Chris"] //instructors = ["Jim", "Chris"]
                                          // ^
                                          // TypeError: Assignment to constant variable.

instructors.push("Jack", "Jill"); //instructors now consists of [ 'Jimm', 'Christ', 'Jack', 'Jill' ]

console.log(instructors);

//const also accepts uppercase

function hello(name) {
    name = name || 'Mystery Person';
    console.log("Hello" + name + "!");
};

hello("Bobby"); //HelloBobby!
hello(name); //HelloJimmy!
hello(); //HelloMystery Person!

//NOTE: Again, the console logs above don't have proper spacing because + " " + wasn't included.
hello(" Bobby"); //Hello Bobby!
hello(" "+name); //Hello Jimmy!

function hello1(name = 'Mystery Person') {
    console.log(`Hello ${name} is it me you're looking for`);
}
hello1(); //Hello Mystery Person is it me you're looking for
//NOTE: I named this function hello1 because if I'd named it hello, it would've console logged all of the previous results with these new parameters.
                    // Hello Bobby is it me you're looking for
                    // Hello Jimmy is it me you're looking for
                    // Hello Mystery Person is it me you're looking for
                    // Hello  Bobby! is it me you're looking for
                    // Hello  Jimmy is it me you're looking for
        //Which, yikes.

//Arrow Functions

const teacher = {
    name: "Jim",
    speak: function() {
        //bind a function to specific context
        let boundFunction = function(){     
        console.log('Later my name is ' + this.name);
    }.bind(this);//end let boundFunction      NOTE: using .bind(this) is what actually binds the function to this.name, not necessarily naming the function boundFunction. That's just a name.
    setTimeout(boundFunction, 1000);
    //bound function will always run in bound context
    //NOTE: this is outside the scope of boundFunction but within the scope of speak function
}//end speak: function
};//end const teacher
teacher.speak();

//NOTE: I highly recommend labelling all of the closing }) etc with a comment to help keep track of your code, especially in regard to scope.
//No one wants to work off of someone else's code and see this:
//             }
//         }
//         })
//     }
// })
// })
//pls no

//Lexical Binding - they bind to cope where defined, not where they are used.
//Let's re-do the previous function using arrow function
// const teacher = {
//     name: "Jim",
//     speak() {
//         let boundFunction = () => {     
//         console.log('Later my name is ' + this.name);
//     };
//     setTimeout(boundFunction, 1000);
// }
// };
// teacher.speak();

//HINT: in order for this to not mess up prior code, switch them out in comments to test the console log.

let students = [
    {name: 'Hugo'},
    {name: 'Candace'},
    {name: 'Taylor'}
];

let names = students.map((student) => student.name);
console.log(names);
//same as
// let names = students.map((student) => {
//     return student.name
// });

//FUN FACT: When you run this entire file in console log thus far, it will still look like:
// Hello! I'm a string
// string text 1/nstring text 2
// Hello I'm a string
// continues on this line
// HelloJimmyI hope you have a great day onWednesday
// Hello Jimmy I hope you have a great day on Wednesday!
// Our instructor Chris is teaching ES6 today
// Our instructor Chris is teaching ES6 today
// I'm using var
// [ 'Jimm', 'Christ', 'Jack', 'Jill' ]
// HelloBobby!
// HelloJimmy!
// HelloMystery Person!
// Hello Bobby!
// Hello Jimmy!
// Hello Mystery Person is it me you're looking for
// [ 'Hugo', 'Candace', 'Taylor' ]
// Later my name is Jim

//because the speak function is still set to 1000ms delay

//REST (REST is an acronym for REpresentational State Transfer)

function add() {
    console.log("arguments object:", arguments);
    var numbers = Array.prototype.slice.call(arguments)
    var sum = 0;
    numbers.forEach(function (number) {
        sum+= number;
    });//forEach
    return sum;
};//function add

console.log(add(1,2,3,4,5,6,7,8));
//console is as follows:
// arguments object: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8 }
// 36

// This is in lieu of something like:

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// };

// var num1 = 1,
// var num2 = 2,
// var num3 = 3,
// var num4 = 4,
// var num5 = 5;
// var numArray = [];
// numArray.push(num1);
// numArray.push(num2);
// numArray.push(num3);
// numArray.push(num4);
// numArray.push(num5);
// numArray.reduce(addTwoNumbers);

//aka what Mike said (I think)

//because that sucks. It's bulky and takes forever to write (and load). Shorter code = shorter loading time. And less to read through when debugging!

let add = (...numbers) => {
    console.log("rest parameters", numbers);

    let sum =0;

    numbers.forEach(function(number){
        sum += number;
    });
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8));

//this does the same thing. This is via the REST operator/parameter. (The ...)