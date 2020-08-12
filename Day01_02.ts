let str: string;

str = 'TypeScrtipt is a front-end language that is an alternative to JavaSCript. allow this improves the JavaScript productivity. be the typescript helps to use OOPs pattern for front-end development.';

let findString = "front";
let totalOccurances:number;
let strLength:number;
strLength = findString.length;
totalOccurances = 0;

for(let i=0;i< str.length; i++)
{
    if(str.substr(i,strLength) == findString)
    totalOccurances ++;
}

console.log("Total occurances found for '" + findString + "': "+ totalOccurances);
// console.log(strings);

// Ex 1: Create string with following value
// TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.
// 1.  Convert the string into statement case. First character of first word of each statement must be upper case. (immedate)
// 2.  Find out the number of occurences of specific word and character in string.
// 3.  COnvert first character of each word in upper case.