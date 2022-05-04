//map,filter,reduce

//they are known as one linear functions
//they returns a new array
//they never modifies the original array

// let no = [2,3,4,5,6,7];
// console.log(no);
// no.map((item) =>{
//     console.log(item)
// });

// let res = no.filter((item) => {
//     return item > 5
// })
// console.log(res);



// let num = [1,2,3,4,5,6,7];

// let num1 =  num.reduce((acc,cur) => acc = acc * cur,1);
// console.log(num1)

//------------------------------------------------------------------------------------------------------------


//strings
//charAt
let eg = "supriya prabu";
console.log(eg.charAt(3));

//endsWith
console.log(eg.endsWith("u"));

//includes
let eg1 = "hello everyone"
console.log(eg1.includes("hello"));

//indexOf, lastIndexOf

console.log(eg1.indexOf("o"));
console.log(eg1.lastIndexOf("o"));

//length
console.log(eg.length);

//replace - not going to manipulate the original string

console.log(eg.replace("supriya","legend"));

//search
console.log(eg.search("prabu"));

//sustr
console.log(eg1.substr(0,4));//first value is the index position and the second value is the no of characters from the index position mentioned in the first value.

//substring
console.log(eg.substring(0,8));//first index value is inclusive, last indexx value is exclusive

//for substring always the lower value is starting value and the hoigher value is the ending value irrespective of the position of the values mentioned.
console.log(eg.substring(8,0));

//split

let lit = "string.array.injs"
let res = lit.split(".");
console.log(res);