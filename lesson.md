# Template literal

```javascript
console.log(`Hello! I'm a string`);
```
 Using back-ticks `` instead of single or double quotes

```javascript
console.log("string text 1 \n" + "string text 2");
```
You'd need to use \n to create 2 lines.
```javascript
console.log(`Hello I'm a string
continues on this line`); /
```
Using `` allows a econd line of console log when you hit enter
```javascript
const name = "Jimmy"
const day = "Wednesday"

console.log("Hello" + name + "I hope you have a great day on" + day);
 ```
 Uses string concatenation to create a proper console log sentence
NOTE: the way it is written here, the console will read: 

> HelloJimmyI hope you have a great day onWednesday


to make it read properly you'll need to make sure to add spaces inside your quotes, ie. "Hello "

```javascript
console.log(`Hello ${name} I hope you have a great day on ${day}!`); //interpolation
```
interpolation can be used on objects as well

```javascript
const instructor = {
    name: "Chris",
    lesson: "ES6",
    greet: function(){
        return `Our instructor ${this.name} is teaching ${this.lesson} today` 
        }
}
```
We can use interpolation for functions as well. When we reference an object's own properties we use "this".
   
```javascript
console.log(`Our instructor ${instructor.name} is teaching ${instructor.lesson} today`);

console.log(instructor.greet());

function foo() {
    let x = true; 
```
Because the let is within function foo but outside the if statement, it can be used "globally" within the foo function.
This is called hoisting and is part of scope. Think of "scope of influence", as in "what can this affect?"
```javascript
    if(x) {
        var usingVar = "I'm using var";
    }
    console.log(usingVar); 
}

foo(); 
```
Console reads: 
> I'm using var

```javascript
const instructors = ["Jimm", "Christ"]

instructors.push("Jack", "Jill"); 

console.log(instructors);
```
instructors now consists of [ 'Jimm', 'Christ', 'Jack', 'Jill' ]

const also accepts uppercase

```javascript
function hello(name) {
    name = name || 'Mystery Person';
    console.log("Hello" + name + "!");
};

hello("Bobby"); //HelloBobby!
hello(name); //HelloJimmy!
hello(); //HelloMystery Person!
```
NOTE: Again, the console logs above don't have proper spacing because + " " + wasn't included.

```javascript
hello(" Bobby"); //Hello Bobby!
hello(" "+name); //Hello Jimmy!

function hello1(name = 'Mystery Person') {
    console.log(`Hello ${name} is it me you're looking for`);
}
hello1();
 //Hello Mystery Person is it me you're looking for
 ```
NOTE: I named this function hello1 because if I'd named it hello, it would've console logged all of the previous results with these new parameters.
```javascript 
            //Hello Bobby is it me you're looking for
            //Hello Jimmy is it me you're looking for
            //Hello Mystery Person is it me you're looking for
            //Hello  Bobby! is it me you're looking for
            //Hello  Jimmy is it me you're looking for
```
Which, yikes.

<br>



# Arrow Functions
```javascript
const teacher = {
    name: "Jim",
    speak: function() {
        //bind a function to specific context
        let boundFunction = function(){     
        console.log('Later my name is ' + this.name);
    }.bind(this);//end let boundFunction      
    setTimeout(boundFunction, 1000);
    //bound function will always run in bound context
    //NOTE: this is outside the scope of boundFunction but within the scope of speak function
}//end speak: function
};//end const teacher
teacher.speak();
```
NOTE: using .bind(this) is what actually binds the function to this.name, not necessarily naming the function boundFunction. That's just a name.

NOTE: I highly recommend labelling all of the closing }) etc with a comment to help keep track of your code, especially in regard to scope.
No one wants to work off of someone else's code and see this:
```javascript
            }
        }
        })
    }
})
})
```
pls no

# Lexical Binding 
## They bind to cope where defined, not where they are used.
Let's re-do the previous function using arrow function
```javascript
const teacher = {
    name: "Jim",
    speak() {
        let boundFunction = () => {     
        console.log('Later my name is ' + this.name);
    };
    setTimeout(boundFunction, 1000);
}
};
teacher.speak();
```
```javascript
let students = [
    {name: 'Hugo'},
    {name: 'Candace'},
    {name: 'Taylor'}
];

let names = students.map((student) => student.name);
console.log(names);
```
same as
```javascript
let names = students.map((student) => {
    return student.name
});
```

> //FUN FACT: When you run this entire file in console log thus far, it will still look like:  
Hello! I'm a string  
string text
string text 2  
Hello I'm a string  
continues on this line  
HelloJimmyI hope you have a great day onWednesday  
Hello Jimmy I hope you have a great day on Wednesday!  
Our instructor Chris is teaching ES6 today   
Our instructor Chris is teaching ES6 today  
I'm using var  
[ 'Jimm', 'Christ', 'Jack', 'Jill' ]  
HelloBobby!  
HelloJimmy!  
HelloMystery Person!  
Hello Bobby!  
Hello Jimmy!  
Hello Mystery Person is it me you're looking for  
[ 'Hugo', 'Candace', 'Taylor' ]  
Later my name is Jim  

because the speak function is still set to 1000ms delay. 

# REST (REST is an acronym for REpresentational State Transfer)
```javascript
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
```
console is as follows:
>arguments object: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8 }  
36

This is in lieu of something like:
```javascript
function addTwoNumbers(num1, num2) {
    return num1 + num2;
};

var num1 = 1,
var num2 = 2,
var num3 = 3,
var num4 = 4,
var num5 = 5;
var numArray = [];
numArray.push(num1);
numArray.push(num2);
numArray.push(num3);
numArray.push(num4);
numArray.push(num5);
numArray.reduce(addTwoNumbers);
```
aka what Mike said (I think)

Because that sucks. It's bulky and takes forever to write (and load). Shorter code = shorter loading time. And less to read through when debugging!
```javascript
let add = (...numbers) => {
    console.log("rest parameters", numbers);

    let sum =0;

    numbers.forEach(function(number){
        sum += number;
    });
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8));
```

This does the same thing. This is via the REST operator/parameter. (The ...)
```javascript
function addStuff(x,y, ...z){
    return (x+y) * z.length
    //x=1
    //y=2
 }
console.log(addStuff(1,2, "hello", "world", true, 99));
//will return the number 12
```   
The length of z is all things left in the parenthesis...
i.e. 4 things ("hello", "world", true & 99)
so 1+2=3....3*4=12

This is an example of a Spread Operator:
```javascript
let random = ["Hello", "World", true, 99]
let newArray = [1,2, ...random, 3]

console.log(newArray);
```
this will return [1,2,"Hello", "World", true, 99,3]
```javascript
let spreadEx = (item) => {
    let spreadArray = {...item}
    console.log(spreadArray);
    return spreadArray
}

spreadEx("Hello World")
```
this will return: ["H","e","l","l","o"," ","W","o","r","l","d"]
```javascript
let restEx = (...z) => {
    console.log(z)
    return z
}

restEx("hello", "world")
```
this will return ["hello", "world"]
```javascript
var students = ["Julian", "AJ", "Matt"];
var x = students[0];
var y = students[1];
var z = students[2];
console.log(x, y, z);
```
this will return Julian, AJ, Matt

<br>

# ES6 version of destructuring arrays
```javascript
let students =  ["Julian", "AJ", "Matt"];
let[x,y,z] = students
console.log(x, y, z);
```
this will return Julian, AJ, Matt
```javascript
let students =  ["Julian", "AJ", "Matt"];
let[x, ,z] = students
console.log(x, y, z);
```
this will return "Julian" & "Matt"
```javascript
let [x, ...rest] = students;
console.log(x, rest);
```
this will return Julian ["AJ", "Matt"]

<br>

# Destructuring functions
```javascript
let completedHomework = () => {
    return ["Julian", "AJ", "Matt"];
}
let [x,y,z] = completedHomework();
console.log(x,y,z);
```
this will return julian AJ Matt

<br>

# Destructuring of objects
```javascript
let instructor = {
    name: "Jimmy",
    email: "no@no.com"
}
let { name: x, email: y} = instructor;
console.log(x);
```
this will return: Jimmy
```javascript
//make object
//make function with default parameter
//return both things
let car = {
    make: "Honda"
}
function something(make, year = 2001) {
    console.log(make, year);
}
something(car);
```
will return: { make: 'Honda' } 2001
```javascript
//make object
//make function with default parameter
//return both things
let car = {
    make: "Honda"
}

function something({make, year = 2001}) {
    console.log(make, year);
}
something(car);
```
will return: Honda 2001

# Object oriented: constructor function
```javascript
function Person (name, job) {
    this.name = name;
    this.job = job;
}
Person.prototype.getName = function getName() {
    return this.name;
}
var goodGuy = new Person ("Aang", "Avatar");
console.log(goodGuy.getName())
```
will return: Aang

# Inheritance chain
```javascript
class Person {
    constructor (name, job) {
        this.name = name;
        this.job = job;
    }
    getName() {
        return this.name;
    }
    getJob() {
        return this.job;
    }
}
let goodGuy = new Person( 'Neo', 'the one');
console.log(goodGuy);
```
will return: Person { name: 'Neo', job: 'the one' }
```javascript
class Person {
        constructor (name, job) {
            this.name = name;
            this.job = job;
        }
        getName() {
            return this.name;
        }
        getJob() {
            return this.job;
        }
    }
class SuperHero extends Person {
    constructor (name, heroName, superPower) {
        super(name);
        this.heroName = heroName;
        this.superPower = superPower;
    }
    secretIdentity() {
        return `${this.heroName} is ${this.name}!!`
    }
}
let batman = new SuperHero("Bruce Wayne", "Batman")
console.log(batman.secretIdentity())
```
'super' lets you use the existing name property from 'Person'

This will return: Batman is Bruce Wayne!!

```javascript
let goodGuy = new Person('Jim Gordon');
console.log(goodGuy.name);
//this will return: Jim gordon
goodGuy.name = "James Gordon";
console.log(goodGuy.name);
//this will return: James Gordon
```

# Array .map() function
The map function lets us store key value pairs.

Objects convert both keys and values to strings.
```javascript
let student = {name: "A-aron"};
let status = new Map();

status.set(student.name, "A-aron");
status.set("feeling", "churlish");
console.log(status.get(student.name));
console.log(status.get("feeling"));
```
'feeling' is the key
'churlish' is the value
will return: A-aron churlish

# Encapsulation
```javascript
const Guy = (function() {
    const _name = new WeakMap();
    
class Guy {
    constructor(name) {
        this[_name] = name;
    }
    set name(name) {
        this[_name] = name;
    }
    get name() {
        return this[_name];
    }
}

return Guy;
}());

let guy = new Guy("Fieri");
console.log(guy.name);
```
this returns: Fieri