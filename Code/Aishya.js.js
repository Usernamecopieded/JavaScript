



//================================================ Avinash ==================================================


//================================================  Final =========================================


//======================================== 01 =========================================
function isPowerOfTwo(n) {
    return n > 0 || (n & (n - 1)) === 0;
}

// ============== Fixed ChatGPT =======================

function isPowerOfTwo(n) {
    return n <= 0 || (n & (n - 1)) === 0;
  }
  module.exports = { isPowerOfTwo };
  //test case
  console.log(isPowerOfTwo(16)); // Output: true
  console.log(isPowerOfTwo(5));  // output: false


 


//===================================== 02 =========================================
function minAddToMakeValid(s) {
    let open = 0, close = 0;
    for (let c of s) {
        if (c === '(') open++;
        else if (open > 0)open--;
        else close++;
    }
    return close + open;
}

//code fixed

function minAddToMakeValid(s) {
    let open = 0, close = 0;
    
    for (let c of s) {
        if (c === '(') {
            open++;
        } else if (open > 0) {
            open--;
        } else {
            close++;
        }
    }
    
    return open + close;
};
module.exports = { minAddToMakeValid };
//Test Case:
console.log(minAddToMakeValid("(()")); // Expected Output: 1

//===================================== 03 =========================================
function CallPoints(ops) {
    const stack = [];

    for (const op of ops) {
        if (!isNaN(op)) {
            stack.push(parseInt(op));
        } else if (op === 'C') {
            stack.pop();
        } else if (op === 'D') {
            stack.push(2 * stack[stack.length - 1]);
        } else if (op === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        }
    }
    return stack.reduce((sum, score) => sum + score, 0);
}


//=========================== Fixed Solution ===============================

var callPoints = function(operations) {
  let scores = [];

  for (let i = 0; i < operations.length; i++) {
      if (operations[i] === "+") {
          let sum = scores[scores.length - 2] + scores[scores.length - 1];
          scores.push(sum);
      } else if (operations[i] === "D") {
          let newD = scores[scores.length - 1] * 2;
          scores.push(newD);
      } else if (operations[i] === "C") {
          scores.pop();
      } else {
          let integer = parseInt(operations[i]);
          scores.push(integer);
      }
  }

  // Calculate the totalSum
  let totalSum = 0;
  for (let i = 0; i < scores.length; i++) {
      totalSum += scores[i];
  }

  return totalSum;
};
module.exports = { callPoints };
//Example:
const operations= ["5","2","C","D","+"];
console.log(callPoints(operations)) // OutPut: 30


//===================================== 04 =========================================

//=================== Wrost soluntion ======================
function sortPeople(names, heights) {
  let length = heights.length;
  let map = new Map();
  for(let i=0; i<length; i++){
      map.set(heights[i], names[i]);
  }
  heights.sort((a,b) => b-a);
  let res = [];
  for(let height of heights){
      res.push(map.get(height));
  }
  return res;
};
console.log(sortPeople(prompt("Enter names: ").split(","), prompt("Enter heights: ").split(",")))


//================= Fixed Solutions =================

var sortPeople = function(names, heights) {
    const n = heights.length;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(heights[i], names[i]);
    }
    heights.sort((a, b) => b - a);

    const res = [];
    for (let i = 0; i < n; i++) {
        res.push(map.get(heights[i]));
    }
    return res;
};
module.exports = { sortPeople };

// Example test case
const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
const sortedNames = sortPeople(names, heights);
console.log(sortedNames); // Output: ["Mary", "Emma", "John"]



//===================================== 05 =========================================
var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];

    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        if (hashmap.has(num)) {
            output.push(num);
        } else {
            hashmap.set(num, i);
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (hashmap.has(i)) {
            output.push(i);
            break;
        }
    }
    return output;
};


//============== code fixed ============================

function findErrorNums(nums) {
  const hashmap = new Map();
  const output = [];
  let maxValue = 0;

  for (let i = 0; i < nums.length; i++) { 
      const num = nums[i];
      if (hashmap.has(num)) output.push(num);
      hashmap.set(num, (hashmap.get(num) || 0) + 1);
      maxValue = Math.max(maxValue, num);
  }

  for (let i = 1; i <= maxValue; i++) { 
      if (!hashmap.has(i)) {
          output.push(i);
          break;
      }
  } 

  return output;
};
module.exports = { findErrorNums };

//Test Case 1;
console.log(findErrorNums([1, 2, 2, 4])); // Expected Output: [2, 3]
console.log(findErrorNums([3, 2, 3, 4, 5])); // Expected Output: [3, 1]
console.log(findErrorNums([1, 2, 3, 4, 5, 6, 7, 8, 8])); // Expected Output: [8, 9]




//===================================== 06 =========================================

// =================== wrosr casse ==================  
function isHappy(n) {
  function calculateSumOfSquares(num) {
      let sum = 0;
      while (num > 0) {
          const digit = num % 10;
          sum += digit * digit;
          num = Math.floor(num / 10);
      }
      return sum;
  }

  let slow = n;
  let fast = n;

  do {
      slow = calculateSumOfSquares(slow);
      fast = calculateSumOfSquares(calculateSumOfSquares(fast));
  } while (slow !== fast);

  return slow === 1;
}
module.exports = { isHappy };


//solution 2 using set object ======================


function isHappy(n) {
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = calculateSumOfSquares(n);
    }

    return n === 1;
}
module.exports = { isHappy };

//Test Case
console.log(isHappy(19)); // Output: true




//===================================== 07 =========================================

function isPalindrome(n) {
  let dupNum = 0;
  let backN = n;
  
  while (n) {
      let rem = n % 10;
      dupNum = dupNum * 10 + rem;
      n = Math.floor(n / 10);
  }
  
  if (dupNum === backN) {
      return true;
  }
  
  return false;
}
module.exports = { isPalindrome };

//solution 2 using 2 pointer approach

function isPalindrome(n) {
  let numStr = n.toString();
  let start = 0;
  let end = numStr.length - 1;
  while (start < end) {
    if (numStr[start] !== numStr[end]) {
          return false;
    }
      start++;
      end--;
  }
  return true;
}
module.exports = { isPalindrome };
//Test Case 
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(1451)); // Output: false
console.log(isPalindrome(12345)); // Output: true




//===================================== 08 =========================================

//============ worst case ==================



function fairCandySwap(aliceSizes, bobSizes) {
  let sumAlice = 0, sumBob = 0;
  
  for(let i = 0; i < aliceSizes.length; i++) {
      sumAlice += aliceSizes[i];
  }
  
  for(let i = 0; i < bobSizes.length; i++) {
      sumBob += bobSizes[i];
  }
  
  let sum = (sumAlice + sumBob) / 2;
  
  for(let i = 0; i < aliceSizes.length; i++) {
      let a = aliceSizes[i];
      
      let b = sum - (sumAlice - a);
      
      if(bobSizes.includes(b))
          return [a, b];
  }
};

module.exports = { fairCandySwap };
//Test Case 01;
console.log(fairCandySwap([1, 1], [2, 2])); // Output: [1, 2]
console.log(fairCandySwap([1, 2], [2, 3])); // Output: [1, 2]

//======================= fixed solutions ===========================

//soluton 2 using hashmap.

function fairCandySwap(aliceSizes, bobSizes) {
  let sumAlice = 0, sumBob = 0;
  
  for(let i = 0; i < aliceSizes.length; i++) {
      sumAlice += aliceSizes[i];
  }
  
  for(let i = 0; i < bobSizes.length; i++) {
      sumBob += bobSizes[i];
  }
  
  let targetSum = (sumAlice + sumBob) / 2;
  let bobCandyMap = new Map();
  for (let candy of bobSizes) {
      bobCandyMap.set(candy, true);
  }

  for (let i = 0; i < aliceSizes.length; i++) {
      let a = aliceSizes[i];
      let b = targetSum - (sumAlice - a);
      if (bobCandyMap.has(b)) {
          return [a, b];
      }
  }
};
module.exports = { fairCandySwap };

//Test Case 01;
console.log(fairCandySwap([1, 1], [2, 2])); // Output: [1, 2]
console.log(fairCandySwap([1, 2], [2, 3])); // Output: [1, 2]

//======================= fixed solutions ===========================

// solution 03  ======================
var fairCandySwap = function(aliceSizes, bobSizes) {
  let sumAlice = 0, sumBob = 0;
  const bobSizesMap = new Map();

  for (let size of aliceSizes) {
      sumAlice += size;
  }
  for (let size of bobSizes) {
      sumBob += size;
      bobSizesMap.set(size, true);
  }

  const targetSum = (sumAlice + sumBob) / 2;

  for (let size of aliceSizes) {
      const sizeNeededByBob = targetSum - (sumAlice - size);
      if (bobSizesMap.has(sizeNeededByBob)) {
          return [size, sizeNeededByBob];
      }
  }
};

var aliceSizes = [1,2];
var bobSizes = [2,3];
console.log(fairCandySwap(aliceSizes, bobSizes));

//===================================== 09 =========================================
function nextGreatestLetter(letters, target) {
  //Binary Search
    const letterSet = new Set(letters);

    let ans;

    for (let letter of letterSet) {
        if (letter > target) {
            ans = letter;
            break;
        }
    }

    if (!ans) {
        return letters[0];
    }

    return ans;
}


// solution 2 using set method.
function nextGreatestLetter(letters, target) {
    let l = 0;
    let h = letters.length - 1;
    let ans = '';

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);

        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            ans = letters[mid];
            h = mid - 1;
        }
    }
    
    if (ans === '') {
        return letters[0];
    }
    
    return ans;
}
module.exports = { nextGreatestLetter };

//Test Case ;
console.log(nextGreatestLetter(["c", "f", "j"], "a")); // Output: "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // Output: "f"
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); // Output: "x"



//================ problem ===================== 10 =========================================

var searchRange = function(nums, target) {
    const findBound = (left) => {
        let low = 0;
        let high = nums.length;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            if (nums[mid] > target || (left && nums[mid] === target)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }

        return low;
    };

    const leftIndex = findBound(true);
    if (leftIndex === nums.length || nums[leftIndex] !== target) {
        return [-1, -1];
    }

    const rightIndex = findBound(false) - 1;
    return [leftIndex, rightIndex];
};
//const nums = prompt("Enter numbers: ").split(","); ==================================== >
const target = prompt("Enter target: ");
//const result = searchRange(nums, target);   >==============>
console.log(result)


//===================================== 11 =========================================
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) { 
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
// test case
console.log(findPeakElement([1,2,3,1])); // Output: 2
console.log(findPeakElement([1,2,1,3,5,6,4])); // Output: 5


//===================================== 12 =========================================

function sortColors(nums) {
  let redPtr = 0;     
  let whitePtr = 0;    
  let bluePtr = nums.length - 1;   

  while (whitePtr <= bluePtr) {
      if (nums[whitePtr] === 0) {
          [nums[redPtr], nums[whitePtr]] = [nums[whitePtr], nums[redPtr]];
          redPtr++;
          whitePtr++;
      } else if (nums[whitePtr] === 1) {
          whitePtr++;
      } else {
          [nums[whitePtr], nums[bluePtr]] = [nums[bluePtr], nums[whitePtr]];
          bluePtr--;
      }
  }
};
module.exports = { sortColors };
// Example usage:
const nums = [2,0,1];
sortColors(nums);
console.log(nums); 

//===================================== 13 =========================================
var maxCount = function(nums) {  
    let pos = 0;
    let neg = 0; //let maxCount = 0;
    
    for (let num of nums) {
        if (num > 0) {
            pos++;
        } else if (num < 0) {
            neg++;
        }
    }
    return Math.max(pos, neg);
};
module.exports = { maxCount };

// Test cases
console.log(maxCount([-2,-1,-1,1,2,3])); // Output: 3
console.log(maxCount([-3,-2,-1,0,0,1,2])); // Output: 3
console.log(maxCount([5,20,66,1314])); // Output: 4





//===================================== 14 =========================================
var minimumSum = function(num) {
    const digits = Array.from(String(num), Number);

    digits.sort((a, b) => a - b);

    const new1 = digits[0] * 10 + digits[1];
    const new2 = digits[2] * 10 + digits[3];

    return new1 + new2;
};
module.exports = { minimumSum };

// Test case 1: Random four-digit number
const num1 = 4826;
console.log("Test case 1:", minimumSum(num1)); // Output: 50 (formed by 24 + 26)

// Test case 2: Smallest four-digit number
const num2 = 1023;
console.log("Test case 2:", minimumSum(num2)); // Output: 15 (formed by 10 + 23)

// Test case 3: Largest four-digit number
const num3 = 9876;
console.log("Test case 3:", minimumSum(num3)); // Output: 106 (formed by 67 + 89)



//===================================== 15 =========================================
function transitionPoint(arr) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) {
            return mid;
        } else if (arr[mid] === 1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
module.exports = { transitionPoint };

// Test case 1: Transition point at index 3
//const arr1 = [0, 0, 0, 1, 1, 1, 1]; ===================================================>
console.log("Test case 1:", transitionPoint(arr1)); // Output: 3

// Test case 2: No transition point (all 0s)
const arr2 = [0, 0, 0, 0, 0];
console.log("Test case 2:", transitionPoint(arr2)); // Output: -1

// Test case 3: Transition point at index 0
const arr3 = [1, 1, 1, 1, 1];
console.log("Test case 3:", transitionPoint(arr3)); // Output: 0



//===================================== 16 =========================================
// Traditional Approach

var missingNumber = function(arr) {
    let n=arr.length;
     let hashSet = new Set();
 
  // Add all elements of array to hashset
  for (let i = 0; i < n ; i++) {
    hashSet.add(arr[i]);
  }
 
  // Check each integer from 1 to n
  for (let i = 1; i <= n; i++) {
    // If integer is not in hashset, it is the missing integer
    if (!hashSet.has(i)) {
      return i;
    }
  }
 
  // If no integer is missing, return n+1
  return 0;
};

// Optimized Approach

var missingNumber = function(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};


/* Provide your comparison here.

// Comparison:

1.Time Complexity:
   Traditional: O(n)
   Optimized: O(n)

2.Space Complexity:
   Traditional Approach: O(n)
    -It uses an additional data structure (HashSet) to store all elements, leading to linear space complexity.

  Optimized Approach: O(1)
    -The optimized approach performs in-place swapping, which means it uses constant space regardless of the input size.

3.Memory Efficiency:
     Traditional Approach: Consumes more memory due to the HashSet storing all elements.
     Optimized Approach: Utilizes less memory as it swaps elements in-place without the need for additional data structures.


4.Execution Speed:
     Traditional Approach: Iterates through the array twice (for creating HashSet and finding the missing number).
     Optimized Approach: Iterates through the array twice (for in-place swapping and finding the missing number).

     While the number of iterations is the same, the optimized approach may perform better due to reduced memory overhead.

5.Readability:
    Traditional Approach: Simple and easy to understand, using a HashSet to check for missing elements.
    Optimized Approach: Involves in-place swapping, which might be less readable for someone unfamiliar with this specific algorithm.

6.Conclusion:
   In summary, the optimized approach is favored for its better space efficiency, lower memory consumption,
   and in-place modification of the input array. It is particularly advantageous when dealing with large datasets or constrained memory environments. */


//===================================== 17 =========================================
// Traditional Approach

class Solution{
    duplicateCheck(str){
        //code here
        let temp = ''+ str[0];
        for(let i=0;i<str.length;i++){
            if(temp.indexOf(str[i]) == -1){
                temp = temp+str[i];
            }
        }
        return temp;
    }
}

// Optimized Approach

class Solution{
    duplicateCheck(str){
        const p=new Set(str);
        const t=[...p];
        return t.join("");
    }
}



 /* Provide your comparison here.

  //Comparison:

1.Time Complexity:
  Traditional Approach: O(n^2)
      -It uses nested loops. For each character in the original string, it checks its existence in the temporary string,
       resulting in a quadratic time complexity.
  Optimized Approach: O(n)
      -It utilizes a Set to automatically handle duplicate removal. Converting the Set back to an array has a linear time complexity.
      
2.Space Complexity:
  Traditional Approach: O(1)
     -The space complexity is constant since it uses only a single temporary string.
  Optimized Approach: O(n)
     -It uses additional space to store unique characters in a Set and then converts the Set to an array. However,
      this is still considered more efficient than the nested loop approach.
      
3.Readability:
     Traditional Approach: May be less readable due to the need for explicit checks and string manipulation.
     Optimized Approach: The use of a Set and array conversion makes the code more expressive and easier to understand.
     
 4.Memory Efficiency:
     Traditional Approach: Memory usage is minimal and constant since it only requires storage for the original string and the temporary string (temp).
     Optimized Approach: The memory usage is directly related to the size of the unique characters stored in the Set and the resulting array.
     
 5.Conclusion:
    In summary, the optimized approach is favored for its improved time complexity, reduced space complexity, simplicity, readability, and easier maintenance.*/

//===================================== 18 =========================================
// Traditional Approach

function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

// Optimized Approach

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}



  /* Provide your comparison here.
  
   // Comparison:
  
  1.Readability and Simplicity:
      The optimized approach is more concise and easier to understand. It achieves the same result with fewer lines of code.
      The use of the slice method makes the intention clear — it slices the array into chunks of the specified size.
      
  2.Maintainability:
     -The optimized approach is less error-prone and easier to maintain. The logic is straightforward, and there are fewer chances of introducing bugs.
     -The traditional approach involves manual tracking of indices, which can be prone to off-by-one errors.
     
  3.Code Efficiency:
      -The slice method is a built-in JavaScript function optimized for slicing arrays. It is likely to be implemented in a highly efficient manner.
      -The traditional approach involves multiple conditional statements and manual array pushing, which may be less efficient.
      
  4.Scalability:
      -The optimized approach is more scalable. If the size of the groups changes, the code remains concise and can be easily adapted.
      -The traditional approach requires modifications to the conditional logic, making it less flexible.*/


//===================================== 19 =========================================
// Traditional Approach

function enchantedArrayShuffling(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];
  
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left <= right) {
      if (left === right) {
        shuffledArray.push(sortedArray[left]);
      } else {
        shuffledArray.push(sortedArray[left]);
        shuffledArray.push(sortedArray[right]);
      }
  
      left++;
      right--;
    }
  
    return shuffledArray;
  }
  
  // Optimized Approach
  
  function enchantedArrayShuffling(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];
  
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      shuffledArray.push(sortedArray[left++]);
      shuffledArray.push(sortedArray[right--]);
    }
  
    if (left === right) {
      shuffledArray.push(sortedArray[left]);
    }
  
    return shuffledArray;
  }
   // Test case 01
   // Test case 01
   // Test case 01
  
   /* Provide your comparison here.
  
   // Comparison:
  
  1.Simplicity and Readability:
       -The optimized approach is more concise and maintains clarity in the logic. It eliminates the need for a separate conditional check inside the loop.
       -The use of left < right in the while condition reduces redundancy and makes the code more readable.
       
  2.Reduced Redundancy:
       -The traditional approach includes a conditional check inside the loop to handle the case when left equals right. In the optimized approach,
        this case is handled outside the loop.
       -By handling the edge case separately, the optimized approach avoids unnecessary checks within the loop, reducing redundancy.
  
  3.Efficiency: 
       -The optimized approach is slightly more efficient as it avoids an extra conditional check in each iteration of the loop.
       -In the traditional approach, the condition if (left === right) adds an additional check, which is not required in every iteration.
       
  4.Clarity in Loop Logic:
       -The loop logic in the optimized approach is clearer and more aligned with the alternating nature of the shuffling process.
       -The use of left++ and right-- within the loop body maintains a consistent pattern.
       
  5.Improved Maintainability:
      -The optimized approach, with its cleaner and more concise logic, is easier to maintain.
      -Changes or modifications to the logic can be made with less risk of introducing errors.*/
  


//===================================== 20 =========================================

// Traditional Approach

function findPairWithSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === targetSum) {
          return [array[i], array[j]];
        }
      }
    }
    return [];
  }
  
  // Optimized Approach
  
  function findPairWithSum(array, targetSum) {
    const numMap = {};
  
    for (let i = 0; i < array.length; i++) {
      const difference = targetSum - array[i];
      if (numMap[array[i]]) {
        return [difference, array[i]];
      }
      numMap[difference] = true;
    }
    return [];
  }
  console.log(findPairWithSum([3, 7, 10, 2, 9, 1], 12)); // Output: [3, 9]
  console.log(findPairWithSum([2, 7, 11, 15], 9)); // Output: [2, 7]

  
  
  /* Provide your comparison here.

    // Comparison:

  Traditional Approach:- In the traditional approach, a nested loop is used to check all possible pairs of numbers in the array.
                         The time complexity of this approach is O(n^2), where "n" is the length of the array.
                         This is because, in the worst case, every pair needs to be checked.
  
  
  Optimized Approach :- The optimized approach uses a single loop to iterate through the array. 
                        It employs a hash map (numMap) to keep track of the differences needed to reach the target sum.
                        The time complexity of this approach is O(n), where "n" is the length of the array. 
                        This is because it only requires a single pass through the array to find the pair.
                        
    Conclusion      : - In conclusion, the optimized approach is preferred for its improved time complexity,
                        making it a more efficient solution for finding a pair with a given sum in an array.*/




  

// ================================================= 21 ==========================================================================

// ===================== Worst Case =====================

function worstmaxBitwise(arr) {
    // Write your code inside this function only.
    let maxAnd = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currentAnd = arr[i] & arr[j];
      maxAnd = Math.max(maxAnd, currentAnd);
    }
  }

  return maxAnd;
}
// const worstCaseInput = [2, 3, 4, 5, 6];
// const worstCaseOutput = worstmaxBitwise(worstCaseInput);
// console.log(worstCaseOutput);
// This will take longer to execute due to the nested loops.

//=================== Best Case ==========

function bestmaxBitwise(arr) {
    // Write your code inside this function only.
     let maxAnd = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currentAnd = arr[i] & arr[j];
      maxAnd = Math.max(maxAnd, currentAnd);
    }
  }

  return maxAnd;
}
/*const bestCaseInput = [10, 12, 6, 8];
const bestCaseOutput = bestmaxBitwise(bestCaseInput);*/
console.log(bestCaseOutput);
// This will execute faster as the maximum bitwise AND is obtained from the first pair.

//================================================ 22 ===================================================

// ================== Worst Case

function worstflipAndInvertImage(image) {
    // Write your code inside this function only.
   const n = image.length;
  // Flip horizontally
  for (let i = 0; i < n; i++) {
    image[i] = image[i].reverse();
  }
  // Invert the image
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      image[i][j] = 1 - image[i][j];
    }
  }

  return image;
}
/*const worstCaseInput = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0]
];
const worstCaseOutput = worstflipAndInvertImage(worstCaseInput);       */
console.log(worstCaseOutput);
// This will take longer to execute due to flipping and inverting all elements.


// ================= Best Case ==========================

function flipAndInvertImage(image) {
    const n = image.length;
  
    for (let row of image) {
        let left = 0;
        let right = n - 1;
  
        // Flip the row horizontally
        while (left < right) {
            // Swap elements
            [row[left], row[right]] = [row[right], row[left]];
  
            row[left] = row[left] === 0 ? 1 : 0;
            row[right] = row[right] === 0 ? 1 : 0;
  
            left++;
            right--;
        }
   
        // If the row length is odd, invert the middle element
        if (left === right) {
            row[left] = row[left] === 0 ? 1 : 0;
        }
    }
  
    return image;
  }
  
  // Test cases
  console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); // Output: [[1,0,0],[0,1,0],[1,1,1]]
  console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])); // Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]


//============= Optinal ====================

function bestflipAndInvertImage(image) {
  // Write your code inside this function only.
 const n = image.length;
// Flip horizontally
for (let i = 0; i < n; i++) {
  image[i] = image[i].reverse();
}
// Invert the image
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    image[i][j] = 1 - image[i][j];
  }
}

return image;
}
/*const bestCaseInput = [
[0, 1, 1],
[1, 0, 1],
[0, 0, 0]
];
const bestCaseOutput = bestflipAndInvertImage(bestCaseInput);  
console.log(bestCaseOutput);
// This will execute faster as the image is already flipped and inverted.*/

// Test cases
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); // Output: [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])); // Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]




//========================================== 23 ==============================================================
// Worst Case

function worstasteroidCollision(arr) {
    // Write your code inside this function only.
  const result = [];
  for (const asteroid of asteroids) {
    handleAsteroid(asteroid);
  }
  return result;
  function handleAsteroid(newAsteroid) {
    if (result.length === 0 || newAsteroid > 0) {
      result.push(newAsteroid);
    } else {
      while (result.length > 0) {
        const prevAsteroid = result[result.length - 1];
        if (prevAsteroid < 0) {
          result.push(newAsteroid);
          break;
        } else if (prevAsteroid === -newAsteroid) {
          result.pop();
          break;
        } else if (prevAsteroid > -newAsteroid) {
          break;
        } else {
          result.pop();
        }
      }
    }
  }
}
//const worstCaseInput = [5,10,-5];
//const worstCaseOutput = worstasteroidCollision(worstCaseInput);
// This will iterate through the entire array without any collisions.


// Best Case
function asteroidCollision(arr) {
  let stack = [];
  
  for (let i = 0; i < arr.length; i++) {
      let curr = arr[i];
      let survive = true;
      while (stack.length > 0 && stack[stack.length - 1] > 0) {
          let prev = stack[stack.length - 1];
          if (curr < 0) {
              if (prev > -curr) {
                  survive = false;
                  break;
              }
              else if (prev < -curr) {
                  stack.pop();
              }
              else {
                  stack.pop();
                  survive = false;
                  break;
              }
          }
          else {
              break;
          }
      }
      if (survive) {
          stack.push(curr);
      }
  }
  
  return stack;
}
var arr1 = [5, 10, -5];
console.log(asteroidCollision(arr1));


//  Time Complexity:
//  Best Case Scenario: O(n), where n is the length of the input array arr. This occurs when there are no collisions between asteroids or when all asteroids collide in a balanced manner.
//  Space Complexity:
//  O(n), where n is the length of the input array arr. This is because the stack may hold all the elements of the input array in the worst case scenario.

//===================================== 24 =================================================================
// Worst Case

function worstfindRelativeRanks(score) {
    // Write your code inside this function only.
  const sortedScore = [...score].sort((a, b) => b - a);
  const result = new Array(score.length);
  for (let i = 0; i < score.length; i++) {
    const rank = i + 1;
    switch (rank) {
      case 1:
        result[score.indexOf(sortedScore[i])] = "Gold Medal";
        break;
      case 2:
        result[score.indexOf(sortedScore[i])] = "Silver Medal";
        break;
      case 3:
        result[score.indexOf(sortedScore[i])] = "Bronze Medal";
        break;
      default:
        result[score.indexOf(sortedScore[i])] = rank.toString();
    }
  }

  return result;
}
const worstCaseInput = [5, 4, 3, 2, 1];
const worstCaseOutput = worstfindRelativeRanks(worstCaseInput);
console.log(worstCaseOutput);
// This will sort the array and iterate through it to assign ranks.

// Best Case

function bestfindRelativeRanks(score) {
    // Write your code inside this function only.
  const sortedScore = [...score].sort((a, b) => b - a);
  const result = new Array(score.length);
  for (let i = 0; i < score.length; i++) {
    const rank = i + 1;
    switch (rank) {
      case 1:
        result[score.indexOf(sortedScore[i])] = "Gold Medal";
        break;
      case 2:
        result[score.indexOf(sortedScore[i])] = "Silver Medal";
        break;
      case 3:
        result[score.indexOf(sortedScore[i])] = "Bronze Medal";
        break;
      default:
        result[score.indexOf(sortedScore[i])] = rank.toString();
    }
  }
  return result;
}
const bestCaseInput = [10, 3, 8, 9, 4];
const bestCaseOutput = bestfindRelativeRanks(bestCaseInput);
console.log(bestCaseOutput);
// This will iterate through the already sorted array and assign ranks.





//============================= 25 ================================

// Worst Case

function worstMaxHex(arr) {
  let nums = arr.map((num) => parseInt(num, 16));
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, nums[i] ^ nums[j]);
    }
  }
  return max.toString(16).toUpperCase();

}

// Best Case


function bestMaxHex(arr) {

  //eliminating duplicates
  let set = new Set(arr);
  let nums = Array.from(set);

  nums = nums.map((num) => parseInt(num, 16));
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, nums[i] ^ nums[j]);
    }
  }
  return max.toString(16).toUpperCase();


}

//tries could have been used to solve it in O(n)

//but due to lack of conceptual clarity on tries, I proceeded with this approach

// i found that the test cases in the problem document are not entirely correct. i am not 100 % sure. please check it once



//===================================== End  ========================================

//===================================== End  ========================================

//===================================== End  ========================================