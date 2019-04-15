const button = $('button')
const list = $('ul')

button.click(function(){ //Add To Do Button
    let input = $('input').val(); //Retrive Input Box Value
    $('<li></li>').text(input).appendTo(list);//Create New List item 
    let newItem = list.children[list.children.length-1];
    $(newItem).html(input); //Add Text Input to New List Item 
   
// newItem.click(function(){ //New List Item Responds to Click...
//     newItem.attr('style','text-decoration:line-through') //By Getting a Line Through It...
//     setTimeout(function(){ //And After a Second...
//         newItem.remove() //It Gets Deleted!
//     },1000)
// });
document.querySelector('form').reset() //Clear The Text Box For The next Item
}) //end addEventListener
