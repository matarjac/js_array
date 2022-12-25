
// Ex. 1

function removeFirstAndLast(array){
    array.pop();
    array.shift();
    newArray = array;

    return newArray;
}
console.log('Ex 1: ')
console.log(removeFirstAndLast([1,2,3,4]));

// Ex. 2

function addStrings(array){
    array.unshift('Hello');
    array.push('GoodBye');
    return array;
}
console.log('Ex 2: ')
console.log(addStrings(['my', 'name', 'is', 'matar']))

// Ex.3

function isFiveIncluded(array){
    return array.includes(5);
}

console.log('Ex 3: ')
console.log(isFiveIncluded([1,2,3,4,5]));
console.log(isFiveIncluded([1,2,3,4]));

// Ex. 4

function combine(array1, array2){
    combinedArray = array1.concat(array2);
    return combinedArray;
}

console.log('Ex 4: ')
console.log(combine([1,2,3,4], [5,6,7,8]));

// Ex. 5

function isNincluded(array, n){
    return array.includes(n);
}
console.log('Ex 5: ')
console.log(isNincluded([1,2,3], 3));
console.log(isNincluded([1,2,3], 54));

// Ex.6

function sIndex(array, s){
    return array.indexOf(s);
}

console.log('Ex 6: ')
console.log(sIndex('hello my name', 'my'));


// Ex. 7

function reversedArray(array){
    return array.reverse();
}

console.log('Ex 7: ')
console.log(reversedArray([1,2,3,4]));

// Ex. 8

function reversedArray5To10(array, reversedArray){
    if (array.length >= 5 && array.length <= 10){
        newArray = reversedArray(array);
        return newArray;
    }
    else{
        return 'array length too big or too small';
    }
}

console.log('Ex 8: ')
console.log(reversedArray5To10([1,2,3,4,5,6,7,8,9,10,11], reversedArray));
console.log(reversedArray5To10([1,2,3,4,5,6], reversedArray));

// Ex. 9

function arrayManipulation(array, n){
    if (array.includes(n)){
        array.shift();
        array.reverse();
        return array;
    } else{
        return array;
    }
}
console.log('Ex 9: ')
console.log(arrayManipulation([1,2,3,4], 3));
console.log(arrayManipulation([1,2,3,4], 6));

// Ex. 10

function cloneArray(array){
    let clone = [...array];
    return clone;
}
console.log('Ex 10: ')
console.log(cloneArray([1,2,3,4,5,6,7,8,9]));

// Ex. 11

function nElements(array, n){
    if (n == null){
        n = 1;
    }
    return array.slice(0,n);
}

console.log('Ex 11: ')
console.log(nElements([1,2,3]));
console.log(nElements([],3));
console.log(nElements([2, 3, 4, 5, 6], 3));

// Ex. 12

function lastElements(array, n){
    if (n != null){
        return array.slice(-n);
    } else{
        return array.at(-1);
    }
}
console.log('Ex 12: ')
console.log(lastElements([1,2,3,4,55]));
console.log(lastElements([1,2,3,4,55], 3));

// Ex. 13

function firstAndLastEquality(array){
    return array[0] === array.at(-1);
}

console.log('Ex 13: ')
console.log(firstAndLastEquality([1,2,3,4,55]));
console.log(firstAndLastEquality([55,2,3,4,55]));

// Ex. 14

function inBetween(array, firstAndLastEquality){
    if (firstAndLastEquality(array)){
        return array.length-2;
    } else{
        return false;
    }
}
console.log('Ex. 14: ')
console.log(inBetween([1,2,3,4], firstAndLastEquality));
console.log(inBetween([4,2,3,4], firstAndLastEquality));
console.log(inBetween([4,2,34,5,2,5,3,2,4], firstAndLastEquality));

// ------------------------------------ //

// EX 2.

let weirdArray = ['Inception', 'Spiderman', 'Tuesday'];
let weirderArray = ['Green', 'Saturday', 'Friday', 'Wednsday'];

weirderArray.reverse();
let combined = weirdArray.concat(weirderArray);
let movies = weirdArray.splice(0,2);
console.log(movies);

weirdArray.unshift('Monday');
weirdArray.push('Thursday');
let colors = weirderArray.splice(weirderArray.indexOf('Green'),1);
console.log(weirderArray);
console.log(colors);

weirderArray.unshift('Sunday');

// ------------------------------------ //

// Ex. 3 -- 1

let practiceFile = [273.15];
console.log(practiceFile);

practiceFile.push(42, 'hello');
console.log(practiceFile);

practiceFile.push(false, -4.6, "87");
console.log(practiceFile);

// EX. 3 -- 2

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']
cargoHold[5] = 'space tether';
console.log(cargoHold)
console.log(cargoHold.pop());
console.log(cargoHold);
console.log(cargoHold.shift());
console.log(cargoHold);
cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold);
console.log(cargoHold.length)

// Ex. 3 -- 3

// Use splice to make the following changes to the final cargoHold array from exercise 2

// 1. 

cargoHold.splice(3,0,'keys');
console.log(cargoHold);

// 2.

cargoHold.splice(cargoHold.indexOf('instruction manual'), 1);
console.log(cargoHold);

// 3. 

cargoHold.splice(2,3,'cat','fob', 'string cheese');
console.log(cargoHold);

// 3 -- 5

// 1.

str = 'In space, no one can hear you code.'
console.log(str.split(''));
console.log(str.split('e'));
console.log(str.split());
console.log(str);

// 2.

arr = ['B', 'n', 'n', 5];
console.log(typeof arr.join('a'));
console.log(arr.join(''));
console.log(arr.join(""));
console.log(arr.join());
console.log(arr);

// 3 -- 6

// 1.
element1 = ['hydrogen', 'H', 1.008]
element2 = ['helium', 'He', 4.003]
element26 = ['iron', 'Fe', 55.85]

// 2. 
table = []
table.push(element1, element2, element26);
console.log(table);

// 3.
console.log(table[1]);
console.log(table[1][1]);

// 4. 
console.log(`mass: ${table[0][2]}`);
console.log(`name: ${table[1][0]}`);
console.log(`symbol: ${table[2][1]}`);

// 5.


// Ex. 4

numbers1 = [1,2,3,4,5];
numbers2 = numbers1;
numbers1.push(6);

// console.log(numbers1);
// console.log(numbers2);

// with slice
numbers1 = [1,2,3,4,5];
numbers3=numbers1.slice();
console.log(numbers3);
numbers3.push(6);
console.log(numbers1);
console.log(numbers3);




