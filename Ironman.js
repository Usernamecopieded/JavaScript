console.log("Hello, Avinash!");

document.write("Hello, Avinash!"); 

   //Alma Bhai 


    // ----------------------CHAPTER NO 3-------------------------------------------------
    //--------------------MODERN JAVASCRIPT--------------------------------------------
  

alert('Hello'); 
alert('World');

alert('Hello, world!');
console.log("Hello, world!");

// Declaration
var a = "John Doe";

var someBool = true;
if (someBool) {
  var a = "Daniel Joan";

}

console.log(a);

console.log(2 + 3);

console.log(1 + 1);
const number = 3 + 5;

function climbStairs(n) {
	// Your code goes here
  console.log(1 + 1 );
  n = 2
  n = 3
console.log(1 + 1 );
console.log(1 + 1 );
console.log(1 + 1 );
    }

    function climbStairs(n) {
        if (n <= 2) {
          return n;
        }
      
        let dp = new Array(n + 1);
        dp[1] = 1;
        dp[2] = 2;
      
        for (let i = 3; i <= n; i++) {
          dp[i] = dp[i - 1] + dp[i - 2];
        }
      
        return dp[n];
      }
      
     
if (num > 0) {
  console.log("The number is positive");
}
//07 Data Types
const user = {
  name: "John",
  age: 30,
  email: "**[john@example.com](mailto:john@example.com)**"
  };
  console.log(user.name); // output
//primary datatypes
  const userNames = ["John", "Jane", "Jack"];
 console.log(userNames[1]);
  
//08 Manipulating Strings 
 let name = 'Alice';
 console.log(name[0]);

   let firstName = 'Alice';
   let lastName = 'Smith';
   let fullName = firstName;
   fullName += ' ' + lastName;
   console.log(fullName); // Output: 'Alice Smith'

//09 Understanding JS Number

   function convertMinutesToSeconds(minutes) {
   return minutes * 60;
}
 console.log(convertMinutesToSeconds(3)); 
 console.log(convertMinutesToSeconds(0)); 

//Arrays Strings

 console.log(myArray); // output is: [1, 2, 3, 4]

 const fruits = ['banana', 'apple', 'orange'];
 console.log(fruits); // ['banana', 'apple', 'orange']

   fruits.unshift('grape');
  console.log(fruits); // ['grape', 'banana', 'apple', 'orange']


// ARRAY STRING 
 let numbers = [3, 5, 1, 8, 2];

// sort the array in ascending order
 numbers.sort();
 console.log(numbers);             // [1, 2, 3, 5, 8]

// find the index of the element with value 5
 let index = numbers.indexOf(5);
 console.log(index);               // 3

// adding elements to array's end
 numbers.push(4, 7);
 console.log(numbers);             // [1, 2, 3, 5, 8, 4, 7]

// concatenate two arrays
 let moreNumbers = [6, 9];
 let allNumbers = numbers.concat(moreNumbers);
 console.log(allNumbers);          // [1, 2, 3, 5, 8, 4, 7, 6, 9]

// check if the array includes a certain element
 let hasFive = allNumbers.includes(5);
 console.log(hasFive);             // true

// find the first element that is satisfying a condition
 let greaterThanFour = allNumbers.find(number => number > 4);
 console.log(greaterThanFour);     // 5


   let arr = [{name: 'John'}, {name: 'Jane'}];
   let arr1 = arr;
   arr1.push({name: 'Bob'});

   console.log(arr); // [{name: 'John'}, {name: 'Jane'}, {name: 'Bob'}]
   console.log(arr1); // [{name: 'John'}, {name: 'Jane'}, {name: 'Bob'}]

   arr[0].name = 'Mike';
   console.log(arr); // [{name: 'Mike'}, {name: 'Jane'}, {name: 'Bob'}]
   console.log(arr1); // [{name: 'Mike'}, {name: 'Jane'}, {name: 'Bob'}]

// multidimensional array
   const matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];

   const myArray = [];
   myArray.push(["apple", "orange"]);
   myArray.push(["grape", "pear"]);
   myArray.push(["pineapple", "mango"]);

console.log(myArray);   

 /* Output
 [["apple", "orange"], ["grape", "pear"], ["pineapple", "mango"]]
 */

let x = [
  ['Jack', 24],
  ['Sara', 25],
  ['Peter', 26]
  ];
  
  // accessing the first item
  console.log(x[0]); // ["Jack", 24]
  
  // accessing the first item of the first inner array
  console.log(x[0][1]); // Jack
  
  // accessing the second item of the third inner array
  console.log(x[1][0]); // 26

//Method 1:
// using index notation

   let studentsData = [['Jak', 23], ['Sara', 24],];
   studentsData[1][2] = 'hello';

   console.log(studentsData); // [["Jack", 23], ["Sara", 24, "hello"]]
  
 //using push()
   let studentsData = [['Jack', 23], ['Sara', 24],];
   studentsData[1].push('hello');

   console.log(studentsData); // [["Jack", 23], ["Sara", 24, "hello "]]


 //Iterating over Multidimensional Array To iterate over a multidimensional array, you can use the forEach() method of the Array object.

   let studentsData = [['Ryan', 24], ['Sara', 23],];

 // iterating over the studentsData
 studentsData.forEach((student) => {
     student.forEach((data) => {
        console.log(data);
      });
});   /* Output Ryan 24 Sara 23 */

   //JavaScript String
   const a = 'hello';
   console.log(a.charAt(1));

   const a = 'hello';
   console.log(a[1]); // "e"
   
  // using the + operator
    const message1 = 'This is a long message ' +
   'that spans across multiple lines' +
   'in the code.'

  // using the \ operator
   const message2 = 'This is a long message \
   that spans across multiple lines \
   in the code.'

    //Length strings
    const a = 'hello world Hey Avinash';
    console.log(a.length); // 5

   //JavaScript String() Function
   const a = 225; // number
   const b = true; // boolean
   
   //converting to string
   const result1 = String(a);
   const result2 = String(b);
   
   console.log(result1); // "225"
   console.log(result2); // "true"

   //JSON 
   let person = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };

   //  Shivay 
   const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    startEngine: function() {
      console.log("Engine started!");
    }
  };
  
  car.startEngine(); // Output: "Engine started!"

  
  // new Set() Pass an Array to the new Set() constructor: Create a Set
   
   const letters = new Set(["a","b","c"]);

   // Create a Set variable
   const letter = new Set();
  // Add Values to the Set
   letters.add("a");
   letters.add("b");
   letters.add("c");

    // Create Variables
 const a = "a";
 const B = "b";
 const c = "c";
   // Create a Set
   const letterss = new Set();
   // Add Variables to the Set
   Letters.add(a);
   letters.add(b);
   letters.add(c);


   
   // Create a Map
  const fruit = new Map ([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
  ]);
    
   // Create a Map
const fruitss = new Map();

 //Accessing JSON Data You can access JSON data using the dot notation. Its syntax is variableName.




// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
   console.log(data.name); // John
   console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

   console.log(data.hobby.sport); // football
   console.log(data.class[1]); // HTML

// JavaScript Basic
 

 // Defining the function
   function sum(num1, num2) {
   console.log(num1 + num2);
}
   // Calling the function
   sum(3, 6);      // Output: 9
   
     function calculateArea(width, height) {
     let area = width * height;
     console.log(area);
  }
  // Call the function with arguments
     calculateArea(5, 10);


     function addNumbers(num1, num2) {
     return num1 + num2;
  }
     console.log(result); 

// Parameters and Arguments
     function addNumbers(a, b) {
     return a + b;
  }
  
     console.log(addNumbers(2));       // Output: NaN (Not a Number)
     console.log(addNumbers(2, 3, 4)); // Output: 5 (ignores extra argument)
     console.log(addNumbers());        // Output: NaN (Not a Number) for both parameters


     function greeting (name = 'stranger') {
      console.log(`Hello, ${name}!`)
    }
     
     greeting('Nick')   // Output: Hello, Nick!
     greeting()         // Output: Hello, stranger!



     function addNumbers(a = 0, b = 0) {
      return a + b;
    }
    
     console.log(addNumbers(2));   // Output: 2 (uses default value of 0 for b)
     console.log(addNumbers());    // Output: 0 (uses default values for both parameters)

     

     var a=2.99;
     var ans = Math.floor(a)*Math.floor(a)
     console.log(ans);

     "5" - 2

       5&9
       9 >> 1;

       let X = 10; x %= 3;

       const badCode = () => {
        let arr = [1, 2, 3, 4];
        const inner = () => {
        return arr.pop();
        };
        return inner;
        };
        console.log(badCode()());
        
        //What will the code below output to the console?
         let y = 10;
        const byValue = (y) => {
y = 20;
return y;
}
x = byValue(x);
console.log(x);




//What will be the output of the following code snippet?
for (let i = 0; i <= 10; i++) {
if (i % 2 === 0) {
continue;
}
console.log(i);
}

 //What is the output of the following code?
let Person = {
  name: "John",
  age: 30,
  greet: function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
  };
  person.greet.call({name: "Jane", age: 25});

// new person
  let str = 'hello world';
  let newStr = str.indexOf('o');
  console.log(newStr);

  const obj = {
    a: 1,
    b: 2
    };
    const arr = [];
    console.log(arr[0] = { ...obj });

    
//new str = "hello Avinash";


//What will be the output of the following code snippet?
var a = [];
a.unshift(1);
a.unshift(8);
a.shift();
a.unshift(2,[2,2]);
a.shift();
a.shift();
console.log(a.shift())

 //The below code compiles and prints 3?
const test = () => {
  return 1 + 2;
  }
  console.log(test());

       
   // If myFunction is called as myFunction(5); what will be the return value?
function myFunction(x, y) {
  const arr = Array.prototype.slice.call(arguments);
  return arr.length;
  }
       

     
  function myFunction(x, y) {
    const arr = Array.prototype.slice.call(arguments);
    return arr.length;
    }


   //What will be the output of the following code snippet?
let arr = [1, 2, 3];
let newArr = arr.filter(x => x > 1);
console.log(newArr);


 //What is the output of the following code?
let Personn = {name: "John", age: 30};
person.salary = 5000;
delete person.salary;
console.log(person.hasOwnProperty("salary"));

    //What is the output of the following code snippet?
    var myFunc = (...args) => {
   console.log(args.length);
  }
  myFunc(1, 2, 3);

    //What will be the output of the following code snippet?
   let stR = 'hello';  
   let NewStr = str.split('').reverse().join('');
   console.log(newStr);

   48//What is the output of the following code snippet?
   function myFunc(a, b) {
   console.log(a, b);
  }
   myFunc(...[1, 2]);


    //What will the output of the following code snippet?
   function multiplyByTwo(a) {
   return a * 2;
  }
   var result = multiplyByTwo();
   console.log(result);


   
   
    // ---------------------- CHAPTER NO 2 -------------------------------------------------
    //-------------------- JAVASCRIPT FOUNDATION -------------------------------------------
  
  

   //What will be the output of the following JavaScript code?
    
   // Advanced JavaScript
```
 function Person() {
  this.name = "Rahul";
}

 function Obj() {
  Person.call(this);
}

 Obj.prototype = Object.create(Person.prototype);
 const app = new Obj();
 console.log(app.name);
 ```

  //Helper Functions
   function validatePhoneNumber(phoneNumber) {
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    return phonePattern.test(phoneNumber);
  }

  function calculateArea(length, width) {
    return length * width;
  }
  
  let area1 = calculateArea(5, 10); // returns 50
  let area2 = calculateArea(3, 7); // returns 21


  function uploadFile() {
    // code to upload file
  }
  
  function parseFile() {
    // code to parse file contents
  }
  
  function saveToDatabase(data) {
    // code to save data to database
  }
  
   // Advanced JavaScript
   function uploadFile() {
    // code to upload file
  }
  
  function parseFile() {
    // code to parse file contents
  }
  
  function saveToDatabase(data) {
    // code to save data to database
  }
  
  uploadFile();
  let Data = parseFile();
  saveToDatabase(data);

   // ENCAPSULATION
   function toggleButton(button) {
    if (button.getAttribute('data-state') === 'on') {
      button.setAttribute('data-state', 'off');
      button.textContent = 'Off';
    } else {
      button.setAttribute('data-state', 'on');
      button.textContent = 'On';
    }
  }
  
  let myButton = document.querySelector('#my-button');
  toggleButton(myButton); // toggles button state

    // SCOPE
    function calculateTotal(items) {
      let subtotal = 0;
      for (let item of items) {
        subtotal += item.price;
      }
      let tax = subtotal * 0.1;
      let total = subtotal + tax;
      return total;
    }
    
    let myItems = [
      { name: 'Widget', price: 9.99 },
      { name: 'Gadget', price: 14.99 },
      { name: 'Doohickey', price: 4.99 }
    ];
    
    let myTotal = calculateTotal(myItems); // returns 31.47

   // Hosting 
   // program to display value
console.log(a);
var a = 5;


// program to display value
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
console.log(b);

   
   // Asynchronous in JavaScript
   function task(message) {
    // emulate time consuming tasklet n = 10000;
        while (n > 0){
            n--;
        }
        console.log(message);
    }
    
    console.log('Start script...');
    task('Download a file.');
    console.log('Done!');
    language: JavaScript (javascript)

  
    //SetTimeOut ()
    // display a text using the setTimeout method
function greet() 
{
    console.log('This will appear next');
}

   setTimeout(function() {
   console.log(" Hello Avinash, what you do you for ");
}, 5000);


// program in javascript to display time every 3 seconds
   function displayTime() {
   var currentTime = new Date();
   var hours = currentTime.getHours();
   var minutes = currentTime.getMinutes();
   var seconds = currentTime.getSeconds();
   var timeString = hours + ":" + minutes + ":" + seconds;
   console.log(timeString);
}

   setInterval(displayTime, 3000);

//ClearTimeOut 
// program in javascript to stop the setTimeout() method

   let count = 0;

 // function creation
   function increaseCount(){

    // increasing the count by 1
    count += 1;
    console.log(count)
}

   let id = setInterval(increaseCount, 3000);

 // clearInterval
   clearInterval(id);
   console.log('setInterval is stopped.');


 // program to display a name
    function sayHello(name, message) {
   console.log(`Hello, ${name}! ${message}`);
}

   setTimeout(sayHello, 3000, "John", "How are you?");
   
  // program in JavaScript to display a text using setInterval method

   function greet() {
   console.log('Hello world');
}

   setInterval(greet, 1000);

   
// program in JavaScript to stop the setInterval() method after five times

   
// program in JavaScript to stop the setInterval() method after five times
//Big C change to = Small c correct

let Count = 0;

function displayCount() {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalID);
    console.log("Interval stopped.");
  }
}

let intervalID = setInterval(displayCount, 1000);


   //Object Oriented Programming (OOP) is a programming paradigm that uses 

   //objects and classes to arrange and structure code.
    
   let person = {
    first_name: 'John',
    last_name: 'Doe',
  
    //method
    getPersonDetails: function() {
      return `The name of the person is
          ${person.first_name} ${person.last_name}`
    },
  }
  
  console.log(person.first_name);
  console.log(person.getPersonDetails());

  // console

  var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
      var fullname = this. firstname + ' ' + this. lastname;
      return fullname;
    }
  };
  var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
  };
  
  var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon.
  //'this' of pokemon = pokemon now
  logPokemon(); // 'Pika Chu I choose you!!

  

      



    // ----------------------CHAPTER NO 3-------------------------------------------------
    //--------------------MODERN JAVASCRIPT--------------------------------------------
  
  //FUCTIONAL PROGRAMMING
   function add(a, b) {
    return a + b;
  }


  let counter = 0;

  function increment() {
    counter++;
    return counter;
  }

  //
  function operateOnNumbers(a, b, operation) {
    return operation(a, b);
  }
  
  const result = operateOnNumbers(2, 3, add);

  function createAdder(x) {
    return function(y) {
      return x + y;
    }
  }
  
  const add5 = createAdder(5);
  const result = add5(3); // returns 8


  //Function composition PROBLEM


   const double = x => x * 2
   const square = x => x * x
 
   var output1 = double(2);
   var output2 = square(output1);
    console.log(output2);
   
   var output_final = square(double(2));
   console.log(output_final);

   //Immutability in JavaScript = str

   let Str = 'hello';
   str[0] = 'H'; // This has no effect on the string
   console.log(str); // Output: 'hello'


   //Declarative and Imperative code

   function double(numbers) {
    return numbers.map(n => n * 2);
  }
 
  function double(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
      result.push(numbers[i] * 2);
    }
    return result;
  }

  const Numbers = [1, 2, 3, 4, 5];
  const result = numbers.filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((acc, num) => acc + num, 0);
  console.log(result);


  const add = x => y => x + y;
  const addFive = add(5);
  console.log(addFive(2));

  
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}

S




//------------------------------ ES5 AND ES6 CONCEPTS ----------------------------------------

 // greeting.js
export function greet(name) {
  console.log(`Hello, ${name}!`);
}

 // app.js
 import { greet } from './greeting.js';

 greet('John');


 //QUESTION MARK =

// ---------------------Chaper 3 quiz----------------
 
 function sayHello() {
  return "Hello, ";
}

 function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!");



// ------------------------------ JAVASCRIPT--------------------------------------------------
//----------------------------- RegEx & Debugging in JavaScript----------------------------------

 const str = "hello world";
 const regex = /hello/;
 const isMatched = regex.test(str); // returns true

 let text = "Visit W3Schools";
 let n = text.search(/w3schools/i);



  function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.replace("Microsoft","W3Schools");}


// For example, to match any string that starts with "hello" and ends with "world":
const str1 = "hello world";
const str2 = "hello there world";
const Regex = /^hello.*world$/;
regex.test(str1); // returns true
regex.test(str2); // returns true

// JavaScript Regular Expression Methods



//JavaScript Browser Debugging

/*Debugging JavaScript is the process of finding and resolving bugs in JavaScript code. The browser offers a number of tools 
to aid developers in the real-time debugging of JavaScript code. Some of the most popular JavaScript debugging methods 
used in browser environments are listed below:*/

//Browser console
console.log('Hello, world!'); // Logs "Hello, world!" to the console

//Breakpoint
function foo() {
  const x = 42;
  debugger; // Adds a breakpoint here
  console.log(x);
}
foo();

//Watches // x + y
const T = 42;
const G = 7;
const z = x + y; // Add a watch for "z"
console.log(z);

//Call Stack
function foo() {
  bar();
}
function bar() {
  baz();
}
function baz() {
  throw new Error('Uh oh!');
}
foo(); // Open the call stack to see the error


// -------------------------------------- JAVASCRIPT---------------------------------------------
// ----------------------------- MORDERN JavaScript CONCEPTS -------------------------------------

//------------------------------------ SKILLS MAASTERY QUIZ ----------------------------------

//What will be the output of the following JavaScript code?

console.log(/[adf]+/.test("a"));

// regex
const ReGex = /[amn]/;
const string = "abcd";
console.log(regex.test(string));


//What is the output of the following code? 
``` const a = [1, 2, 3]; const b = a.map(x => x * x).reduce((acc, x) => acc + x, 0); console.log(b); ```

//What does the following code snippet output?
```
var arr = [1, 2, 3];
var result = arr.push(4);
console.log(result);
```

//--------------------------------------------END CHAPTER-------------------------------------------

function productSign(num1, num2, num3) {
  const product = num1 * num2 * num3;
  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
}

function productSign(num1, num2, num3) {
  const product = num1 * num2 * num3;

  if (product > 0) {
    return "+++";
  } else if (product < 0) {
    // Count the number of negative values
    let negativeCount = 0;
    if (num1 < 0) negativeCount++;
    if (num2 < 0) negativeCount++;
    if (num3 < 0) negativeCount++;

    if (negativeCount === 1) {
      return "++-";
    } else if (negativeCount === 2) {
      return "+--";
    } else {
      return "---";
    }
  } else {
    return "---";
  }
}

// Example usage:
console.log(productSign(1, 2, 3));    // Output: "+++"
console.log(productSign(-1, 2, 3));   // Output: "++-"
console.log(productSign(-1, -2, 3));  // Output: "+--"
console.log(productSign(-1, -2, -3)); // Output: "---"

//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------

function oddOrEvenSum(arr) {
  let oddSum = 0;
  let evenSum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  return { oddSum, evenSum };
}
function oddOrEvenSum(numbers) {
  let oddSum = 0;
  let evenSum = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  }

  return { oddSum, evenSum };
}

// Example usage:
console.log(oddOrEvenSum([1, 2, 3, 4, 5]));       // Output: { oddSum: 9, evenSum: 6 }
console.log(oddOrEvenSum([10, 20, 30, 40, 50])); // Output: { oddSum: 0, evenSum: 150 }
console.log(oddOrEvenSum([7, 13, 42, 31, 55]));  
  

//----------------------------------------------------------------------------------------------------------

// Do not remove nor make any changes in  main() function
function main() {
  var arr = readLine().split(" ").map(x => parseInt(x));
  console.log(oddOrEvenSum(arr));
}
function oddOrEvenSum(arr) {
let oddSum = 0;
let evenSum = 0;

for (let num of arr) {
  if (num % 2 === 0) {
    evenSum += num;
  } else {
    oddSum += num;
  }
}

return { oddSum, evenSum };
}
console.log(oddOrEvenSum([1, 2, 3, 4, 5]));      
console.log(oddOrEvenSum([10, 20, 30, 40, 50]));
console.log(oddOrEvenSum([7, 13, 42, 31, 55]));


//---------------------------------------------------------------------------------------------------------------------------

//Recall that functions are objects in JavaScript. What does the following print?
function myFunc() {}
console.log(typeof myFunc);

//What is the output of the following code snippet?

let str = "JavaScript is awesome";
console.log(str.split(" ").join("-"));

//What is the output of the following code?
//What is the output of the following recursive function?
function countDown(n) {
  if (n === 0) {
  return;
  }
  console.log(n);
  countDown(n-1);
  }
  countDown(5);

  //What is the output of the following code?

const arr = [1, 2, 3];
const copy = arr;
arr[0] = 0;
console.log(copy[0]);
  
  //what is output of code?

var nuumbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);

//What is the time complexity of the following code snippet?

function someFunction(n) {
  while (true) {
  console.log(n);
  }
  }

  //what is output of given code ?

var colors = ['Red', 'Green', 'Blue'];
colors.pop();
console.log(colors.length);


//What is the output of the following recursive function?
function countDown(n) {
  if (n === 0) {
  return;
  }
  console.log(n);
  countDown(n-1);
  }
  countDown(5);

  //    console.log(maxSumDivThree(nums));
  function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    console.log(maxSumDivThree(nums));
var maxSumDivTree=function(nums){
    let N = nums.length;
    let bucket = [...Array(N + 1)].map(_ => Array(3).fill(0));
    for(let i = 1; i<=N; ++i) {
        bucket[i] = [...bucket[i - 1]];
        for(let j of [0,1,2]){
            let sum = nums[i-1 ] + buckets [i - 1][j];
            buckets[i][sum % 3] = Math.max(buckets[i][sum % 3],sum);
        }
    }
    return buckets[N][O];
}
  }

  //Do not remove nor make any changes in  main() function
function main() {
  const numsRows = parseInt(readLine().trim(), 10);
const numsColumns = parseInt(readLine().trim(), 10);
let nums = Array(numsRows);
for (let i = 0; i < numsRows; i++) {
  nums[i] = readLine().replace(/\s+$/g, '').split(' ').map(numsTemp => parseInt(numsTemp, 10));
}
  console.log(diagonalPrime(nums));
}
var diagonalPrime = function(nums) {
  let m = 0
  let prime = (num) =>{
      if(num < 2){return false}
      if(num == 2){return true}
      if(num%2 == 0){return false}
      for(let i = 3 ; i < Math.sqrt(num) +1; i += 2){if(num%i == 0){return false}}
      return true
  }
  for(let i = 0 ; i < nums.length ; i++){
      if(prime(nums[i][i])){ m = (m>nums[i][i])?m:nums[i][i]}
      if(prime(nums[i][nums.length - i - 1])){
          m = (m>nums[i][nums.length - i - 1])?m:nums[i][nums.length - i - 1]
      }
  }
  return m
};
  


// for loops 
for (let i = 5; i < 50; i++){
  console.log(i)
}

for (let i = 50; i > 4; i = i-5){
  console.log(i)
} 

//--------------BOOTSTRAP------------

const array = [1, 2, 3];
console.log(array.length);

//what will be the output of the following code snippet?
var str = "hello world";
console.log(str.slice(-5, -1));
console.log(str.substring(-5, -1));

//What will be the output of the following code snippet?
function solve(arr, rotations) {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}
console.log(solve([44, 1, 22, 111], 5));

//What is the output of the following code?
const aray = [1, 2, 3];
console.log(array[3]);


//What will be the output of the following code?
var xt = 5;
if (x === "5") {
  console.log("Hello");
} else {
  console.log("World");
}

//What will be the output of the following JavaScript code?
var grade = 'E';
var result = 0;
switch (grade) {
  case 'A':
    result += 10;
  case 'B':
    result += 9;
  case 'C':
    result += 8;
  default:
    result += 0;
}

console.log(result);

//What will be the output of the following JavaScript code?
console.log("Welcome to AlmaBetter!");
var grade = 'A';
var result = 0;
switch (grade) {
  case 'A':
    result += 10;
    break;
  case 'B':
    result += 9;
    break;
  case 'C':
    result += 8;
    break;
  default:
    result += 0;
}
console.log(result);

//What is the output of the following switch statement?
var yx = "Hello";
switch (x) {
  case "Hello":
    console.log("Greeting");
  case "Goodbye":
    console.log("Farewell");
  default:
    console.log("Other");
}

//What will be the output of the following code?
var xo = "hello";
if (x) {
  console.log("Hello");
} else {
  console.log("World");
}

//What is the result of the following code?
function myFunc(a, b = a) {
  console.log(a, b);
}
myFunc(1);

//What is the return value of the following function?
function getPerson(name, age) {
  return {
    name: name,
    age: age
  };
}
let person = getPerson('Bob', 30);
console.log(person.name);

//What is the result of the following code?
function myFunc({a, b}) {
  console.log(a, b);
}
myFunc({a: 1, b: 2});

//What will be the output of the following?
function TnS_outer() {
  var a = 10;

  function TnS_inner() {
    var b = 10;
    return a + b;
  }
  return TnS_inner();
}
console.log(TnS_outer());

//What will be the output of the following JavaScript code?
var a = 3.7;
var bb = 2;
a = Math.ceil(a);
console.log(a * b);

//What will be the last statement return in the following JavaScript code?
function constfuncs() {
  var funcs = [];
  for (var i = 0; i < 10; i++) {
    funcs[i] = function() {
      return i;
    };
  }
  return funcs;
}
var funcs = constfuncs();
console.log(funcs[5]());


//What will be the output of the following JavaScript code?
const pt1 = {};
const ob1 = Object.create(pt1);
console.log(Object.getPrototypeOf(ob1) === pt1);

//5What will be the output of following code snippet?
function F() {
  // Constructor function definition
}
var o = new F();
console.log(o.constructor === F);

function Person() {
  this.name = "Rahul";
}
function Obj() {
  Person.call(this);
}
Obj.prototype = Object.create(Person.prototype);
const app = new Obj();
console.log(app.name);

//What will be the output of the following code snippet?
function sumNumbers(n) {
  if (n === 1) {
  return 1;
  } else {
  return n + sumNumbers(n-1);
  }
  }
  console.log(sumNumbers(4));
  
  //What is the output of the following recursive function?
function factorial(n) {
  if (n === 1) {
  return 1;
  }
  return n * factorial(n-1);
  }
  console.log(factorial(4));

  //What is the output of the following recursive function?
function fibonacci(n) {
  if (n <= 1) {
  return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
  }
  console.log(fibonacci(6));

  //What will be the output of the following code snippet?
function multiply(a, b) {
  if (b === 0) {
  return 0;
  } else {
  return a + multiply(a, b-1);
  }
  }
  console.log(multiply(3, 4));

  //What is the output of the following recursive function?
function power(base, exp) {
  if (exp === 0) {
  return 1;
  }
  return base * power(base, exp - 1);
  }
  
  console.log(power(2, 3));

 

//What will be the output of the following JavaScript code?
const prototype1 = {};
const object1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1);

//What will be the output of the following JavaScript code?
function Person() {
  this.name = "Rahul";
}
function Obj() {
  Person.call(this);
}
Obj.prototype = Object.create(Person.prototype);
const aapp = new Obj();
console.log(app.name);

//What will be the output of the given code?
class Rect {
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }
  foo() {
    return this.height * this.width;
  }
}
const sq = new Rect(5, 20);
console.log(sq.foo());


//What is the output of the following recursive function?
function power(base, exp) {
  if (exp === 0) {
  return 1;
  }
  return base * power(base, exp-1);
 }
 console.log(power(2, 3));

 //What is the result of pattern matching a struct with a record pattern?
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("Alice", 30);
const matchPerson = (person) => {
  if (person instanceof Person && person.age === 30) {
    const {
      name
    } = person;
    console.log("The name is", name);
  } else {
    console.log("No match");
  }
};
matchPerson(person);

//What is the time complexity of the following code snippet?
function someFunction(n) {
  for (var i = 0; i < n; i += 2) {
    console.log(n);
  }
}
someFunction(5);

//What will be the output of following code?


//What will be the output of following code?
let str = "hello";
console.log(str.replace("l", "L"));

//What is the output of the following recursive function?
function countDown(n) {
  if (n === 0) {
  return;
  }
  console.log(n);
  countDown(n-1);
 }
 countDown(5);

 //What will be the output of the following JavaScript code?
var js = 10;
js *= 5;
console.log(js);

//What will be the output of the following code snippet?
console.log(parseInt("123Hello"));
console.log(parseInt("Hello123"));

//What will be the output of the following JavaScript code?
function compare() {
  let a = "2";
  let b = 2;
  if (a == b)
    return true;
  else
    return false;
}

console.log(compare());

//What happens when we run this code?
function dog() {
  console.log("I am a dog.");
}
dog.sound = "Bark";



//

function main() {
  var nums = readLine().split(" ").map(x => parseInt(x));
  console.log(singleNumber(nums));
}
const singleNumber = function(nums){
  // Your code goes here
  var searchRange = function(nums, target){
      let ans = [-1, -1];
      let low = 0;
      let high = nums.length - 1;

      while(low <= high) {
          let mid = Math.floor((low + high) / 2);
          if(nums[mid] == target) {
              while(nums[low] != target) {
                  low++;
              }
              while(nums[high] != target) {
                  high--;
              }
              ans[0] = low;
              ans[1] = high;

              return ans;
          }
          else if(target > nums[mid]) {
              low = mid + 1;
          }
          else {
              high = mid - 1;
          }
      }
      return ans;
  }
  
};

//What is the output of the following code?
let person = {name: "John", age: 30};
Object.defineProperty(person, "salary", {value: 5000, writable: false});
person.salary = 6000;
console.log(person.salary);

//What is the output of the following code?
let person1 = {name: "John", age: 30};
let person2 = {name: "Jane", age: 25};
let persons = {...person1, ...person2};
console.log(persons);

//What is the output of the following code snippet?
var i = 0;
while(i<5){
console.log(i);
i += 2;
}

//What is the output of the following code?
setTimeout(function() {
  console.log('A');
 }, 0);
 setTimeout(function() {
  console.log('B');
 }, 1000);
 setTimeout(function() {
  console.log('C');
 }, 500);

 //What is the output of the following code snippet?
var myFunc = (...args) => {
console.log(args.length);
}
myFunc(1, 2, 3);

//What does the following code do?
var xx = 0;
function foo() {
x++;
console.log(x);
}
setInterval(foo, 1000);
//It logs the value of x to the console repeatedly, incrementing it every second.


//Recall that functions are objects in JavaScript. What does the following print?
function myFunc() {}
console.log(typeof myFunc);

//What will be the output of the following code snippet?
var i = 0;
while (i < 3) {
console.log(i);
i++;
}


//What will be the output of the following code snippet?
let i = 0;
do {
console.log(i);
i--;
} while (i < 3); // bhut ganda loops

//------------------------------------------

//What is the output of the following code snippet?
let num = 5;
if (num > 10) {
console.log("Hello");
}
else if (num < 0) {
console.log("Goodbye");
}
else {
console.log("Neither");
}

//If myFunction is called as myFunction(5); what will be the return value?
function myFunction(x, y) {
  const arr = Array.prototype.slice.call(arguments);
  return arr.length;
  }

  //What will be the output of the following code snippet?
function sumOfNaturals(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
  sum += i;
  }
  return sum;
  }
  console.log(sumOfNaturals(10))

  //What will be the output of the following code snippet?
var i = 0;
while (i < 5) {
i++;
if (i === 3) {
continue;
}
console.log(i);
}

  //what is the output of the following code snippet?function myFunc() {
    console.log(this);
    
    var myObject = {
    myMethod: function() {
    myFunc.call(this);
    }
    };
    myObject.myMethod();

    //What will be the output of following code?
let str = "foo bar baz";
console.log(str.split(" ").reverse().join("-"));

//What will be the output of following code?
var colors = ['Red', 'Green', 'Blue'];
colors.pop();
console.log(colors.length);



//hat is the time complexity of the following code snippet?
function someFunction(n) {
  while (true) {
    console.log(n);
  }
}
someFunction(5);

//What is the time complexity of the following code snippet?
function someFunction(n) {
  for (var i = 0; i < n * 10; i++) {
    console.log(n);
  }
}
someFunction(5);

//What will be the output of the following code?
const person = {
  name: 'Lydia'
};

function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

//------------------------------JS--------------------------------

//    -----------------module 1 -------------

//What is the output of the following code?
let person = {
name: "John",
age: 30
};
let clone = Object.assign({}, person);
clone.age = 25;


//What will be the output of the following code snippet?
let arr = [1, 2, 3];
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);

//What will be the output of the following code snippet?
//What is the output of the following code snippet?
function myFunc(a, b) {
console.log(this, a, b);
}
var myObject = {
myMethod: myFunc
};
myObject.myMethod.call({x: 1}, 1, 2);

//What wil be the output of the following code snippet?
let i = 0;
do {
console.log(i);
i--;
} while (i < 3);

//What will be the output of the following code snippet?
for (var i = 0; i < 5; i++) {
  if (i === 2) {
  continue;
  }
  console.log(i);
  }


  
//What is the output of the following code?
setTimeout(function() {
  console.log('A');
 }, 0);
 setTimeout(function() {
  console.log('B');
 }, 1000);
 setTimeout(function() {
  console.log('C');
 }, 500);

//What will be the output of the following code snippet?
var a = [];
a.unshift(1);
a.unshift(8);
a.shift();
a.unshift(2,[2,2]);
a.shift();
a.shift();
console.log(a.shift())

let person = {name: "John", age: 30};
person.salary = 5000;
delete person.salary;
console.log(person.hasOwnProperty("salary"));

//What is the output of the following code snippet?
var i = 0;
while(i<5){
console.log(i);
i += 2;
}

//What is the output of the following code?
setTimeout(function() {
  console.log('Hello');
  }, 0);
  console.log('World');

//What is the output of the following switch statement?
var xc = "Hello";
switch (x) {
case "Hello":
console.log("Greeting");
case "Goodbye":
console.log("Farewell");
default:
console.log("Other");
}

//What will be the output of the following code snippet?
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
  continue;
  }
  console.log(i);
  }

  //What will the code below output to the consol?
let scope = "global";
const getScope = () => {
let scope = "local";
const inner = () => {
return scope;
};
return inner;
};
console.log(getScope()());

//What is the output of the following code snippet?
var arr = [1, 2, 3, 4, 5];
for(var i=0; i < arr.length; i++) {
  if(i === 2){
  break;
  }
  console.log(arr[i]);
}

//What will be the output of the following code?

var xm = 5;
if (x === "5") {
console.log("Hello");
} else {
console.log("World");
}


//1What is the output of the following code snippet?
let Num = 5;
if (num > 10) {
console.log("Hello");
}
else if (num < 0) {
console.log("Goodbye");
}
else {
console.log("Neither");
}

//What is the ouput of the following code?
let person = {
  name: "John",
  age: 30,
  get fullName() {
  return `${this.name} Smith`;
  },
  set fullName(value) {
  [this.name, this.surname] = value.split(" ");
  }
  };
  person.fullName = "Jane Doe";
  console.log(person.name);
  
  //What will be the output of the following code snippet?
var a = [];
a.unshift(1);
a.unshift(8);
a.shift();
a.unshift(2,[2,2]);
a.shift();
a.shift();
console.log(a.shift())
  

//What is the output of the following code?
setTimeout(function() {
  console.log('Hello');
  }, 0);
  console.log('World');

  //What will be the output of the following code snippet?
function sumOfNaturals(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
  sum += i;
  }
  return sum;
  }
  console.log(sumOfNaturals(10))



//What will be the output of the following code snippet?
for (var i = 0; i < 5; i++) {
if (i === 2) {
continue;
}
console.log(i);
}

//What is the output of the following code?
setTimeout(function() {
  console.log('A');
 }, 0);
 setTimeout(function() {
  console.log('B');
 }, 1000);
 setTimeout(function() {
  console.log('C');
 }, 500);

//====================== end module =================

//====================== end module =================

//====================== end module =================

//====================== end module =================

//====================== end module =================


