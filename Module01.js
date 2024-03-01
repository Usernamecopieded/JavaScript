
 


//================================================ CHATGPT ==================================================

//================================================ CHATGPT ==================================================

//================================================ CHATGPT ==================================================

//================================================ CHATGPT ==================================================




//================================================ 1 ==================================================
function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 || bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 || bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

//code fixed

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Do not modify the below lines
module.exports = { calculateBMI };

// test case:
console.log(calculateBMI(65, 1.75)); // Output: "Normal weight"
console.log(calculateBMI(45, 1.60)); // Output: "Underweight"

//================================================ 2 ==================================================
function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = temperature * 9 % 5 + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 % 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

//code fixed

function convertTemperature(temperature, unit) {
    if (unit === "C") {
        const fahrenheit = temperature * 9 / 5 + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 / 9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Do not modify the below lines
module.exports = { convertTemperature };

// test case:
console.log(convertTemperature(25, "C")); // Output: "77.00 F"
console.log(convertTemperature(-40, "F")); // Output: "-40.00 C"

//================================================ 3 ==================================================
function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return number(totalAmount.toFixed(2));
}

//code fixed

function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}

// Do not modify the below lines
module.exports = { calculateTip };

//================================================ 4 ==================================================
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}


//code fixed

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}


// Do not modify the below lines
module.exports = { isPalindrome };
//================================================ 5 ==================================================
function countVowels(str) {
    // Write your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i <= lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}

//code fixed

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }

    return count;
}

// Do not modify the below lines
module.exports = { countVowels };

//================================================ 6 ==================================================
function findLongestWord(sentence) {
	// Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

//solution 2 using for...of loop

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

// Do not modify the below lines
module.exports = { findLongestWord };
//================================================ 7 ==================================================
function titleCase(sentence) {
	// write your code here
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}

//solution 2 using map method

function titleCase(sentence) {
    const words = sentence.toLowerCase().split(' ');

    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return titleCaseWords.join(' ');
}

// Do not modify the below lines
module.exports = { titleCase };

//================================================ 8 ==================================================
function countOccurrences(str, char) {
    // Write your code here
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

//solution 2 using inbuilt string methods.

function countOccurrences(str, char) {
    const charRegex = new RegExp(char, 'g');
    const occurrences = str.match(charRegex);

    return occurrences ? occurrences.length : 0;
}

// Do not modify the below lines
module.exports = { countOccurrences };
//================================================ 9 ==================================================
function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

//solution 2 using reduce method.

function calculateTotal(cart) {
    const total = cart.reduce((accumulator, product) => {
        return accumulator + product.price * product.quantity;
    }, 0);

    return total;
}

// Do not modify the below lines
module.exports = { calculateTotal };
//================================================ 10 ==================================================
function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 4 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

//solution 2 using switch case.

function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        switch (true) {
            case i % 3 === 0 && i % 4 === 0:
                result.push("FizzBuzz");
                break;
            case i % 3 === 0:
                result.push("Fizz");
                break;
            case i % 4 === 0:
                result.push("Buzz");
                break;
            default:
                result.push(i.toString());
        }
    }

    return result;
}

// Do not modify the below lines
module.exports = { fizzBuzz };
//================================================ 11 ==================================================
module.exports = { findPrimes };

function findPrimes(n) {
    // Write your code here
    
    
}


//=============== solve -=================================

function findPrimes(n) {
    // Write your code here
    const primes = [];
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
    
    
}

module.exports = { findPrimes };


//================================================ 12 ==================================================
module.exports = { reverseString };

function reverseString(str) {
    // Write your code inside this function only.


}
//===============
module.exports = { reverseString };

function reverseString(str) {
    // Write your code inside this function only.
    
    const reversedString = str.split('').reverse().join('');
    return reversedString;
}

// Test Case:
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("AlmaBetter University")); // Output: "ytisrevinU retteBamlA"


//================================================ 13 ==================================================
module.exports = { signOfProduct };

function signOfProduct(nums) {
    // Write your code inside this function only.


}
//===============================

function signOfProduct(nums) {
    // Write your code inside this function only.
    
    let countNegatives = 0;
    for (let num of nums) {
        if (num === 0) {
            return 0; 
        } else if (num < 0) {
            countNegatives++;
        }
    }
    return countNegatives % 2 === 0 ? 1 : -1;


}
module.exports = { signOfProduct };
// Test cases
console.log(signOfProduct([2, -3, 5, 4]));
console.log(signOfProduct([1, 2, 0]));     
console.log(signOfProduct([1, 2, -4]));     
console.log(signOfProduct([-1, -2, -3])); 

//================== ChatGPT =====
function signOfProduct(nums) {
    let negativeCount = 0;
    let hasZero = false;

    for (let num of nums) {
        if (num === 0) {
            hasZero = true;
            break;
        }
        if (num < 0) {
            negativeCount++;
        }
    }

    if (hasZero) {
        return 0;
    } else {
        return negativeCount % 2 === 0 ? 1 : -1;
    }
}

// Test cases
console.log(signOfProduct([2, -3, 5, 4])); // Output: -1
console.log(signOfProduct([1, 2, 0]));      // Output: 0
console.log(signOfProduct([1, 2, -4]));     // Output: 1
console.log(signOfProduct([-1, -2, -3]));   // Output: -1

//================================================ 14 ==================================================
module.exports = { checkSign };

function checkSign(num1, num2, num3) {
    // Write your code inside this function only.
    const positiveCount = [num1, num2, num3].filter(num => num > 0).length;
    const negativeCount = [num1, num2, num3].filter(num => num < 0).length;

    if (positiveCount === 3) {
        return "+++";
    } else if (positiveCount === 2 && negativeCount === 1) {
        return "++-";
    } else if (positiveCount === 1 && negativeCount === 2) {
        return "+--";
    } else if (negativeCount === 3) {
        return "---";
    }


}
//================================================ 15 ==================================================
module.exports = { generateSlug };

function generateSlug(title) {
    // Write your code inside this function only.
    const slug = title.replace(/\s+/g, '-').toLowerCase() + '.com';
    return slug;


}

//================================================ 16 ==================================================
module.exports = { shortestDistance };

function shortestDistance(wordsDict, word1, word2) {
    // Write your code inside this function only.
    
    let index1 = -1;
    let index2 = -1;
    let minDistance = Infinity;

    for (let i = 0; i < wordsDict.length; i++) {
        const currentWord = wordsDict[i];

        if (currentWord === word1) {
            index1 = i;
        }
        else if (currentWord === word2) {
            index2 = i;
        }

        if (index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
        }
    }

    return minDistance;


}
//================================================ 17 ==================================================
module.exports = { findMove };

function findMove(s) {
    // Write your code inside this function only.
    
     const result = [];
     for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === '+' && s[i + 1] === '+') {
          const newState = s.substring(0, i) + '--' + s.substring(i + 2);
           result.push(newState);
        }
    }

    return result;


}

//================================================ 18 ==================================================

function swapConsecutiveCharacters(str) {
    // Write your code inside this function only.
    const characters = str.split('');
    for (let i = 0; i < characters.length - 1; i += 2) {
        const temp = characters[i];
        characters[i] = characters[i + 1];
        characters[i + 1] = temp;
    }
    return characters.join('');

}
module.exports = { swapConsecutiveCharacters };

// Test case:
console.log(swapConsecutiveCharacters("abcdef")); // Output: "badcfe"
console.log(swapConsecutiveCharacters("AlmaBetter")); // Output: "lAameBttre"

//================================================ 19 ==================================================
module.exports = { arrayIntersection };

function arrayIntersection(array1, array2) {
    // Write your code inside this function only.
    
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    const intersection = [...set1].filter(element => set2.has(element));
    return intersection;


}

//================================================ 20 ==================================================

module.exports = { insert7 };

function insert7(inputString) {
    // Write your code inside this function only.
    let modifiedString = '';
    let charCount = 0;

    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i];

        if (currentChar !== ' ') {
            charCount++;
            modifiedString += currentChar;

            if (charCount === 6) {
                modifiedString += '7';
                charCount = 0;
            }
        } else {
            modifiedString += ' ';
        }
    }

    return modifiedString;


}


//=========================================== END ============================================









