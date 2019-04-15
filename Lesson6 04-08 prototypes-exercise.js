var time = 0
const gravity = 0.5

class Particle {
    constructor(startX,startY) {
        this.x= startX;
        this.y= startY.toFixed(3);
        this.velocity = {x:0, y:0};
        } 
};//end Particle
Particle.prototype = {
    getVelocity() {
        return time*gravity
    }, //end getVelocity
    
    move() {
        this.getVelocity()+this.y
        if(this.y>=500) {console.log('bottom')} //end if
    }, //end move
}; //end Particle.prototype
const particles =[]
for(let i=0; i<100; i++) {
    
particles.push(new Particle(i, (Math.random()*500)));
    } //end for loop

 let interval = setInterval(function(){
     time++
     console.log(Particle.prototype.x)
     return move(y<500)
     
    }, 100); //end setInterval at 100ms

move(function(y){
        return y
        }).forEach();


/*
//Create a time variable and set it to 0
//Create a gravity variable and set it to 0.5
//Extend the particle class from earlier with a prototype object.
//Create a prototype object that contains:
//A property of getVelocity() that returns the value (time * gravity)
//A property of move()
//move() should add the value from getVelocity() to the existing y position
//If and when y >= 500 move() should instead do the following: console.log('bottom')

//use your existing array and for loop to create a particles array
Use setInterval at 100ms to
increment the global time variable by 1
console.log all the particle's x values

///
also return an array with all of the y values that are less than 500 (y < 500)
take the array with y values
call the move() function on EACH item
 */