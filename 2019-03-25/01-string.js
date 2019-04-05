const stringEmpty = '';
console.log(stringEmpty);
console.log(typeof stringEmpty);

const stringNonEmpty = 'non-empty';
console.log(stringNonEmpty);
console.log(typeof stringNonEmpty);

/*Line 1 of the js code indicates/sets the rule that in the console log, stringEmpty by itself
will translate to an empty/blank line. This translates to the html page console, line 1.
Line 2 in js code executes this. 
Line 3 in the js code, when including 'typeof' with 'stringEmpty' separates itself from the rule 
established in line 1 of the js code. Therefore line 2 of the console of the html page shows the
type of the element, which is a 'string'.
Line 5 of the js code sets the rule that stringNonEmpty by itself
will translatein the console of the html page to 'non-empty'.
Line 6 of the js code executes this rule in line 3 of the console log.
Line 7 of the js code indicates the type of element, which is a 'string'. */