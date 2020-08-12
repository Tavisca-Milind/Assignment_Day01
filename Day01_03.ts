let str: string;
let finalStatement:string;
let strings = [];

str = 'TypeScrtipt is a front-end language that is an alternative to JavaSCript. allow this improves the JavaScript productivity. be the typescript helps to use OOPs pattern for front-end development.';

strings = str.split(" ");

finalStatement = "";
strings.forEach(element => {
    finalStatement = finalStatement + element.charAt(0).toUpperCase() + element.slice(1) + " ";
    
});
console.log(finalStatement.trim());