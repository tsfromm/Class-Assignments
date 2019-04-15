/*Write a Particle constructor function

The constructor takes startX and startY parameters
Particle will have a property of x that defaults to the value of the argument startX
Particle will have a property of ythat defaults to the value of the argument startY
Particle will have a property of velocity that defaults to {x: 0, y: 0}
Create an empty array named particles
Write loop to create 100 particles
x values will be assigned from 0-99
y will be random from 0 to 500 (Math.random()*500) */

//CORRECT ANSWER
/*
function Particle(startX, startY) {
    this.x = startX;
    this.y = startY;
    velocity = {x:0, y:0}
}

const particles = [];
for(let i=0; i<100; i++) {
    particles.push(new Particle(i, Math.random()*500));
}
console.log(particles);
*/

//ALSO THE CORRECT ANSWER BELOW
class Particle {
    constructor(startX,startY) {
        this.x= startX;
        this.y= startY.toFixed(3);
        this.velocity = {x:0, y:0};
        }
}
    const particles = [];
for(let i=0; i<100; i++) {
  
    particles.push(new Particle(i, (Math.random()*500)));
    }
console.log(particles);



/*ATTEMPT. Unfinished, incorrect

class Particle {
        function constructor(startX, startY) {   //line 3
        this.startX = x,    //property of Particle (as per line 4)
        this.startY = y,        //property of Particle (line 5)
        velocity = {x:0, y:0}       //property of Particle (line 6)
        return particles            //a function needs a return. I haven't quite worked this out, though I know that the product of this function needs to be the new array particles
    }

var particles = [];

for(i=0; i<100; i++) {   //for loop
    x = i                       //x values will be assigned 0-99
    y = Math.random()*500           //y will be random from 0 to 500
    return particles.push(x,y) //the values x and y should end up in the array particles
};
}  */


