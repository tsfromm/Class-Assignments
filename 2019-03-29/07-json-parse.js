const formatItem = item =>  `<li${item.completed==true ?`class="complete"`:`class="uncompleted"`}>${item.id} ${item.text} ${item.completed}</li>`
                                           

const formatItems = list => `<ul>${list.map(formatItem).join('')}</ul>`;

const list = JSON.parse('[{"id":1,"text":"Done that","completed":true},{"id":2,"text":"Do this","completed":false}]');

console.log(list);
console.log(formatItems(list));