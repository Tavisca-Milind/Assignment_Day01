let str: string;

str = 'TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.';

let strings = [];
strings = str.split(".");
let finalStatement:string;
finalStatement = "";
strings.forEach(element => {
    if(element !== "")
    finalStatement = finalStatement + `${element.trim().charAt(0).toUpperCase() + element.trim().slice(1) + ". "}`;
});

console.log(finalStatement);


// Ex 1: Create string with following value
// TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.
// 1.  Convert the string into statement case. First character of first word of each statement must be upper case. (immedate)
// 2.  Find out the number of occurences of specific word and character in string.
// 3.  COnvert first character of each word in upper case.