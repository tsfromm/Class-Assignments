const gotHeader = document.querySelector('header');
const gotSections = document.querySelectorAll('section')
const gotCurrent = document.querySelector('.current');
const gotH1Section = gotCurrent.nextElementSibling;
const gotSection1 = gotCurrent.previousElementSibling;
const gotH2S1 = gotSection1.children;
const gotDiv = document.querySelector('div');
const gotAllH2 = Array.from(document.querySelectorAll('section>h2')).map(function(node){return node.parentElement})

console.log(gotHeader);
console.log(gotSections);
console.log(gotCurrent);
console.log(gotH1Section);
console.log(gotH2S1);
console.log(gotDiv);
console.log(gotAllH2);

/*
Get the header element
Get all the section elements
Get the section element with class="current"
Get the section that comes after the current section
Get the h2 node from the section before the 'current' section
Get the div that contains the section that has an h2 with a class of 'highlight'
//Get all the sections that contain an H2 (using a single statement);
*/