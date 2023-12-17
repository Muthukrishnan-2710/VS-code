// Print odd numbers in anonymous 
let numbers = [1, 3 , 5 , 7 ];
let printOddNumbers = function(arr) {
      console.log(arr);
    }
printOddNumbers(numbers);

// Using IIFE (Immediately Invoked Function Expression)

let oddnumber = [1, 3 , 5 , 7 ];
(function(arr) {
      console.log(arr);
    })(oddnumber);

// anonymous Method
    let stringsArray = ["apple", "banana"];
    let convertToTitleCase = function(arr) {
      for (let i = 0; i < arr.length; i++)
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }; 
    convertToTitleCase(stringsArray);
    console.log(stringsArray);

 // Using IIFE (Immediately Invoked Function Expression)
let stringsArray2 = ["apple", "banana"];
 (function(arr) {
  for (let i = 0; i < arr.length; i++) 
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
})(stringsArray2);
console.log(stringsArray2);

//Sum of All Numbers in an Array:
// Anonymous Function:

let numbers3 = [1, 2, 3, 4, 5];

let sumArray = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray(numbers3));

// Using IIFE:

let numbers4 = [1, 2, 3, 4, 5 ,6];
let sum = (function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
})(numbers4);
console.log(sum);

//Return All Prime Numbers in an Array:
//Using Anonymous Function:
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isPrime = function(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
let getPrimeNumbers = function(arr) {
  return arr.filter(function(num) {
    return isPrime(num);
  });
};
console.log(getPrimeNumbers(numbers));

//Using IIFE:

let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isPrime2 = function(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
let primeNumbers = (function(arr) {
  return arr.filter(function(num) {
    return isPrime2(num);
  });
})(numbers);
console.log(primeNumbers);

//Return All Palindromes in an Array:
//Using Anonymous Function:

let words = ["level", "hello", "radar", "world"];
let isPalindrome = function(word) {
  return word === word.split('').reverse().join('');
};
let getPalindromes = function(arr) {
  return arr.filter(function(word) {
    return isPalindrome(word);
  });
};
console.log(getPalindromes(words));

//Using IIFE:
let words2 = ["level", "hello", "radar", "world"];
let isPalindrome2 = function(word) {
  return word === word.split('').reverse().join('');
};
let palindromes2 = (function(arr) {
  return arr.filter(function(word) {
    return isPalindrome(word);
  });
})(words2);
console.log(palindromes2);

// Return Median of Two Sorted Arrays of the Same Size:
//Using Anonymous Function:
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let findMedianSortedArrays = function(nums1, nums2) {
  let merged = nums1.concat(nums2);
  let sorted = merged.sort((a, b) => a - b);
  let length = sorted.length;

  if (length % 2 === 0) {
    let middle1 = sorted[length / 2 - 1];
    let middle2 = sorted[length / 2];
    return (middle1 + middle2) / 2;
  } else {
    return sorted[Math.floor(length / 2)];
  }
};
console.log(findMedianSortedArrays(arr1, arr2));

//Using IIFE:
let arr3 = [1, 3, 5];
let arr4 = [2, 4, 6];
let median = (function(nums1, nums2) {
  let merged = nums1.concat(nums2);
  let sorted = merged.sort((a, b) => a - b);
  let length = sorted.length;

  if (length % 2 === 0) {
    let middle1 = sorted[length / 2 - 1];
    let middle2 = sorted[length / 2];
    return (middle1 + middle2) / 2;
  } else {
    return sorted[Math.floor(length / 2)];
  }
})(arr1, arr2);
console.log(median);

//Remove Duplicates from an Array:
//Using Anonymous Function:

let numbers7 = [1, 2, 2, 3, 4, 4, 5];

let removeDuplicates = function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};
console.log(removeDuplicates(numbers7));

//Using IIFE:

let numbers8 = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = (function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
})(numbers8);
console.log(uniqueNumbers);

//Rotate an Array by k Times:
//Using Anonymous Function:

let numbers9 = [1, 2, 3, 4, 5];
let k = 2;
let rotateArray = function(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    arr.unshift(arr.pop());
  }
};
rotateArray(numbers9, k);
console.log(numbers9);

//Using IIFE:

let numbers10 = [1, 2, 3, 4, 5];
let k2 = 2;
(function(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    arr.unshift(arr.pop());
  }
})(numbers, k2);
console.log(numbers10);

// Print Odd Numbers in an Array:
//Arrow function
let numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let printOddNumbers2 = arr => {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
printOddNumbers2(numbers);

//Convert All Strings to Title Caps in a String Array:

let stringsArray3 = ["cherry", "date"];
let convertToTitleCase3 = arr => {
  arr.forEach((word, index, array) => {
    array[index] = word.charAt(0).toUpperCase() + word.slice(1);
  });
};
convertToTitleCase3(stringsArray3);
console.log(stringsArray3);

// Sum of All Numbers in an Array:

let numbers12 = [1, 2, 3, 4, 5];
let sumArray2 = arr => arr.reduce((acc, num) => acc + num, 0);
console.log(sumArray2(numbers12));

//Return All Prime Numbers in an Array:
let numbers13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isPrime3 = num => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
let getPrimeNumbers2 = arr => arr.filter(num => isPrime(num));
console.log(getPrimeNumbers2(numbers));

//Return All Palindromes in an Array:
let words3 = ["level", "hello", "radar", "world"];
let isPalindrome3 = word => word === word.split('').reverse().join('');
let getPalindromes3 = arr => arr.filter(word => isPalindrome(word));
console.log(getPalindromes(words));
