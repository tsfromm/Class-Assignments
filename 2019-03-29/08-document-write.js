  
const formatItem = ({text, completed}) => `<li ${completed==true ?`class="complete"`:`class="incompleted"`}>${text} ${completed}</li>`;

const formatItems = list => `<ul>${list.map(formatItem).join('')}</ul>`;

const list = JSON.parse('[{"text":"Done that","completed":true},{"text":" Do this","completed":false},{"text":" Been there","completed":true}]');

const output = formatItems(list);

// Put markup as string into Web page:
document.write(output);
