

//==================================== RAWAN ==================================================


//=================================== Avinash =================================================



//===================================== 01 =========================================



//===================================== 02 =========================================


//===================================== 03 =========================================

//===================================== 04 =========================================

//===================================== 05 =========================================

 

//===================================== 06 =========================================




//===================================== 07 =========================================



//===================================== 08 =========================================



//Test Case 01;
console.log(fairCandySwap([1, 1], [2, 2])); // Output: [1, 2]
console.log(fairCandySwap([1, 2], [2, 3])); // Output: [1, 2]


//===================================== 09 =========================================



//===================================== 10 =========================================

//===================================== 11 =========================================

//===================================== 12 =========================================



//===================================== 13 =========================================
module.exports = { maxCount };



//===================================== 14 =========================================
module.exports = { minimumSum };

//===================================== 15 =========================================
module.exports = { transitionPoint };































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


// Provide your comparison here.

/*Comparison:

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

// Provide your comparison here.
/*Comparison:

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

    //================================================= 18 ==========================================================
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
  
  
  
  // Provide your comparison here.
  
  /*Comparison:
  
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


//=================================================== 19 =======================================================
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
  
  
  
  // Provide your comparison here.
  
  /*Comparison:
  
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
  
  

//==================================================== 20 ==========================================================
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
  
  
  
  // Provide your comparison here.
  
 /* Comparison:
  Traditional Approach:- In the traditional approach, a nested loop is used to check all possible pairs of numbers in the array.
                         The time complexity of this approach is O(n^2), where "n" is the length of the array.
                         This is because, in the worst case, every pair needs to be checked.
  
  
  Optimized Approach :- The optimized approach uses a single loop to iterate through the array. 
                        It employs a hash map (numMap) to keep track of the differences needed to reach the target sum.
                        The time complexity of this approach is O(n), where "n" is the length of the array. 
                        This is because it only requires a single pass through the array to find the pair.
                        
    Conclusion      : - In conclusion, the optimized approach is preferred for its improved time complexity,
                        making it a more efficient solution for finding a pair with a given sum in an array.*/



//======================================== 20 End =============================================