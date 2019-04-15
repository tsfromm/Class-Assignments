const list = document.querySelector('ul');
var coffee = list.children[1];
var ftc = coffee.innerHTML = 'Fair Trade Coffee'; //Update the 'Coffee' item to say 'Fair Trade Coffee'
var noTwinkies = list.children[3].remove(); //Remove 'Twinkies' from the list

const newLi = document.createElement("li");
const cheez = newLi.innerHTML = "Cheese Whiz"; //Add an item 'Cheese Whiz'

list.appendChild(newLi);

list.children[0].remove();
list.children[0].remove();
list.children[0].remove();
list.children[0].remove();

var array = ['protein powder', 'muscle milk', 'power bars'];

var item1 = document.createElement('li')
    list.appendChild(item1);
    item1.innerHTML = array[0];
var item2 = document.createElement('li')
    list.appendChild(item2);
    item2.innerHTML = array[1];
var item3 = document.createElement('li')
    list.appendChild(item3);
    item3.innerHTML = array[2];

item2.class = "important";

console.log(item2.class);


/*
Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
Add the class 'important' to the muscle milk item.
 */
