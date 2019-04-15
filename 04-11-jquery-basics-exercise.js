const header = $("header");
console.log(header);

const sections = $("section");
console.log(sections);

const current = $('.current');
console.log(current);

const next = current.next();
console.log(next);

const h2 = current.prev().find("h2")[0];
console.log(h2);

const div = $('.highlight').parent().parent();
console.log(div);

const  allH2 = Array.from(sections.find('h2'));
console.log(allH2);
