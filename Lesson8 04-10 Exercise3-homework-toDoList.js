const button = document.querySelector('button')
const list = document.querySelector('ul')

button.addEventListener('click', function(){ //Add To Do Button
    let input = document.querySelector('input').value //Retrive Input Box Value
    list.appendChild(document.createElement('li')) //Create New List item 
    let newItem = list.children[list.children.length-1]
    newItem.innerHTML = input //Add Text Input to New List Item 
   
    newItem.addEventListener('click', function (){ //New List Item Responds to Click...
        list.children.setAttribute('style','text-decoration:line-through') //By Getting a Line Through It...
        setTimeout(function(){ //And After a Second...
            newItem.remove() //It Gets Deleted!!
        },1000)
})
    document.querySelector('form').reset() //Clear The Text Box For The next Item
})
//newItem.addEventListener only deletes added item, not original items