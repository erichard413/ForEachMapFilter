// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

// function doubleValues(arr){
// let newArray = [];
// for(let i = 0; i < arr.length; i++){
// newArray.push(arr[i]*2);
// }
// return newArray;
// };

function doubleValues(arr){
    let newArray = [];
    arr.forEach(function(arr){
        newArray.push(arr*2);
    })
    return newArray;
}
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

// function onlyEvenValues(arr){
// let newArray = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i]%2 === 0){
//         newArray.push(arr[i]);
//     }
// }
// return newArray;
// };

function onlyEvenValues(arr){
    let newArray = [];
    arr.forEach(function(arr){
        if(arr%2 === 0){
            newArray.push(arr);
        }
    })
    return newArray;
}

//Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
function showFirstAndLast(arr){
let newArray = [];
arr.forEach(function(word) {
for (let i = 0; i < word.length; i++){
    let firstLast = "";
  if (i === (word.length - 1)){
        firstLast = word[0] + word[i];
        newArray.push(firstLast);
    } 
} 
})
 return newArray;
}

//Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
function addKeyAndValue(arr, key, value){
    arr.forEach(function(e){
        e[key] = value;
        
    })
    return arr;
}

//Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str){
    str = str.toLowerCase();
    let characters = str.split("");
    let vowels = ["a","e","i","o","u"]
    let count = 0;
    let obj = {};
    vowels.forEach(function(e){
        for (char of characters){
            if (e === char){
                count++;
            }
        }
        if(count > 0)
        { obj[e] = count; }; //Jasmine expects output to not have properties IF vowel count is 0.
        count = 0;
    })
    return obj;
}

// MAP

//Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValuesWithMap(arr){
    let newArray = arr.map(function(e){
        return (e*2);
    })
return newArray;
}

//Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

function valTimesIndex(arr){
let newArray = arr.map(function(e){
    return (e*(arr.indexOf(e)));
})

return newArray;    
}

//Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

function extractKey(arr, key){
let newArray = arr.map(function(e){
    return (e[key]);
})
return newArray
}

//Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

function extractFullName(arr){
let newArray = arr.map(function(e){
    let firstName = (e.first);
    let lastName = (e.last);
    let fullName = `${firstName} ${lastName}`
    return fullName;
})
    return newArray;
}

//Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(arr, key){
    let newArray = arr.filter(function(e){
    return e[key] === true;
    })
    return newArray;
}

//Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, value){
   let output = arr.filter(function(e){
            return e === value;
        })
        if(Number(output) === 0){   //Number() was called because output was throwing [x]
            return undefined;
        } else {
         return Number(output)   
        }
}

//Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

function findInObj(arr, key, value){
let output = arr.find(function(e){
    return e[key] === value;
}
)
if (output === 0){   //Number() was called because output was throwing [x]
    console.log(output)
} else {
 return output
}
}

//Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

function removeVowels(str){
    str = str.toLowerCase();
    let vowels = ["a","e","i","o","u"]
    let characters = str.split("");
    let newString = "";
characters.map(function(e){
        if (vowels.indexOf(e) === -1){
            newString += e}
        })
    return newString; 
    } 

//Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers(arr){
    let newArray = arr.filter(function(e){
        return e%2 !== 0;
    }).map(function(evt){
        return evt * 2
    })
    return newArray;
} //first try!! :)



