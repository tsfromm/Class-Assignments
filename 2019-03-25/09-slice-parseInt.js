const colorHex = 'bada55';

const rHex = colorHex.slice(0, 2);
const gHex = colorHex.slice(2, 4);
const bHex = colorHex.slice(4);

console.log(rHex, gHex, bHex);

const r = parseInt(rHex, 16);
const g = parseInt(gHex, 16);
const b = parseInt(bHex, 16);

console.log(r, g, b);

//console log output reads ba da 55
//                         186 218 85      (<---in yellow text)
// The displayed output is synonymous with the hex and rbg codes used in html to achieve the same color.

/*Explain the three examples of slice method in the 09-slice-parseInt.js file.

In line 3, the string (which consists of 012345) is extracted from part 0 through 2 which consists of ba.
So rHex=ba
In line 4, parts 2 through 4 are extracted, which consists of da.
So gHex=da
In line 5, the part of the string extracted is 4 onward, which is 55.
So bHex=55
Thus, ba da 55

Explain the three examples of parseInt function in the 09-slice-parseInt.js file.

In all three lines, the radix is 16.
In line 9, the string is ("ba", 16) so const r=186
In line 10, the string is ("da", 16) so const g=218
In line 11, the string is (55, 16) so const b= 85
 */
