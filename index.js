////The sum of 5 and 10 is 15
// let num1=5;
// let num2=10;
// sum=num1+num2;
// console.log(sum);

/// зарби рақами 3-ро аз 1 то 5 чоп кунед.
// let num1=3;
// for(let i=1;i<=5; i++)
// {
//     console.log(num1*i);
// }
////Ҷумлаи "Learning C++ is fun!"-ро панҷ маротиба, ҳар кадом дар сатр нав, чоп кунед.
// let string="Learning C++ is fun!";
// for (let i=1;i<=5;i++)
// {
//     console.log("Learning C++ is fun!");
// }
////Рақамҳои 50 ва 10-ро дар поёни якдигар нишон диҳед.
// let nem=50;
// let nem1=10;
// console.log(nem);
// console.log(nem1);


// function checknumber(num){

// if(num>0)
// {
//     return "pisitive";
// }
// if(num<0)
// {
//     return "negative";
// }
// if(num>0)
// {
//     return  return "zero";
// }
// }
// console.lol

// let numbe=function(num){
//     let cnt=1;
//     for(let i=cnt; i<=num; i++)
//     {
// cnt*=i;
//     }
//     return cnt;
// }
// console.log(number(6));
// let number=(num)=>{
//     let cnt=0;
//     for(let i=1; i<=num; i++)
//     {
// cnt+=i;
//     }
//     return cnt;
// }
// console.log(number(7));
// function number(a){

//     for(let i=1; i<=10; i++)
//     {
//        n=number*i+",";
//     }
//     return n;
// }
// console.log(5);
//MainFunction

///високостним
// function MainFunction(n)
// {
//    if(n%4==0 && n%100!=0 || n%400==0)
//    {
//       return true;
//    }
//    else
//    {
//       return false;
//    }
// }
// function MainFunction(a)
// {
//    return (a*a)*Math.PI;
// }
// console.log(MainFunction);
// function MainFunction(num)
// {

//    let sum=0;
//    for(let i=num;i>0;i/=10)
//    {
//     sum=i%10;
//     let m=sum+sum;

//    }
//    return sum;
// }
// console.log(415);
//MainFunction
// function MainFunction(num)
// {
//    let cnt=1;
//    for (let i=0; i<=10; i++)
//    {
// cnt+=num*i;
//    }
//    return cnt;
// }
// console.log(10)
// function MainFunction(num) {
//     for (let i = 1; i <= 10; i++) {
//         i
//     }
// }
//MainFunction
// function MainFunction(num)
// {
//    return Math.round(num*num*3.14)
// }
// console.log(MainFunction(8));
// function MainFunction(num, num1) {
//     let a = (num1 * num) / num;
//     let b = (num * num) / num;
//     return a+"\n"+b;
// }
// console.log(MainFunction(5, 7));
// let num=null;
// num=9
// let res=num-Math.abs(num%2)+2;
// console.log(res);


//     let a=num/1000%10;
//    let n=num/100%10;
//    let n1=num/10%10;
//    let n2=num%10;
//    let zarb=(n2*1000)+(n1*100)+(n*10)+a;
// console.log(zarb(7227));



////////
// hometask4
// //MainFunction
// function MainFunction(num)
// {
//    if(num>0)
//    {
//       return num-2;
//    }
//    else if(num<0)
//    {
//       return num+1;
//    }
//    else{
//       return num+10;
//    }
// }\
//MainFunction
// function MainFunction(num)
// {
//    if(num>0)
//    {
//       return num-2;
//    }
//    if(num<0)
//    {
//       return num+1;
//    }
//    else{
//       return num+10;
//    }
// }

// function ispal(num)
// {
//     return ispal(num) && isprime(num)

// }
///idpallindromdromandprime
// function ispal(num)
// {
//     let str="";
//     for(let i=num; i>0;i=Math.floor(i/10))
//     {
//         str+=i%10;
//     }
//     return num==str;
// }
// function isprime(number)
// {
//     for(let i=2;i<number;i++){

//     if(number%i==0) {
//         return "false"
//     }
//     }
//     return true;
// }
// console.log(ispal(130));
//pot
// function pot(num,num1) {
//     let sum = "";
//     for(let i=num; i<=num1; i++){
//       if(i==num1){
//          sum+=i
//       }
//       else{
//           sum += i + ","
//       }

//     }
//     return sum;
// }
//MainFunction
// function MainFunction(num)
// {
//    let number=num*6;
//    return number;
// }
// console.log(MainFunction(1));

//MainFunction
//MainFunction/
// function MainFunction(num)
// {
//    let sum="";
//    for(let i=num;i>0;i=Math.floor(i/10))
//    {
//    if(i%10>i)
//     return "The largest digit in "+num+" is "+ i%10;
//    }
//    }


// console.log(MainFunction(123));

// function MainFunction(num)
// {
//    let sum=0;

//    for(let i=num;i>0;i=Math.floor(i/10))
// sum+=i%10;
//    return sum;
// }
// console.log(MainFunction(111));
// function MainFunction(num)
// {

// if(num==0) return 1;
// return num%10*MainFunction(Math.floor(num/10))
// }
// console.log(MainFunction(111));
// function MainFunction(num)
// {
//     let sum=0;
//     for(let i=0;i<=num.length();i++)
//     {

//     }
// }
//MainFunction
// function MainFunction(num)
// {
// //Hello //olleH
// // let str="";
// // for(let i=num.length-1;i>=0;i--)
// // {
// //     str+=num[i];
// // }
// // }
// // console.log(MainFunction("Hello"));










/////recurce
//MainFunction
// ёфтани факториали ракам 
// function MainFunction(num)
// {
//    if(num==0) return 1;
//    return num*MainFunction(num-1)
// function findLargestDigit(num, largest = 0) {
//     if (num === 0) return largest;
//     let currentDigit = num % 10;
//     if (currentDigit > largest) largest = currentDigit;
//     return findLargestDigit(Math.floor(num / 10), largest);
// }
// console.log(findLargestDigit(4548320));
// function findSmallestDigit(num, smallest = 9) {
//     if (num === 0) return smallest;
//     let currentDigit = num % 10;
//     if (currentDigit < smallest) smallest = currentDigit;
//     return findSmallestDigit(Math.floor(num / 10), smallest);
// }
// console.log(findSmallestDigit(4548320));
// function gcd(a, b) {
//     if (b === 0) return a;
//     return gcd(b, a % b);
// }
// console.log(gcd(48, 18));

// // function doubleFactorial(num) {
// //     if (num <= 1) return 1;
// //     return num * doubleFactorial(num - 2);
// // }

// function factorial(num) {
//     if (num <= 1) return 1;
//     return num * factorial(num - 1);
// }

// function factorialOfFactorials(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= factorial(i);
//     }
//     return result;
// }
// console.log(12);
// Create a function that takes an array of numbers and return

// function checkArrayForSeven(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 7) {
//             return "Boom!";
//         }
//     }
//     return "Not!";
// }
// console.log(checkArrayForSeven([1, 2, 3, 4, 5, 6, 7])); // Boom!
// console.log(checkArrayForSeven([1, 2, 3, 4, 5, 6]));    // Not!
// function MainFunction(num)







// Create a function that takes a string and returns a string in which

// function repeatCharacters(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         result += str[i] + str[i];
//     }
//     return result;
// }
// console.log(repeatCharacters("hello")); // hheelllloo

// function factorial(num) {
//     if (num <= 1) return 1;
//     return num * factorial(num - 1);
// }

// function factorialifactorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= factorial(i);
//     }
//     return result;
// }

// console.log(factorialifactorial(5)); 





//     function helper(words) {
//         if (words.length === 0) return "";
//         let word = words[0];
//         if (word.startsWith(letter)) {
//             word = reverseWord(word);
//         }
//         return word + (words.length > 1 ? " " : "") + helper(words.slice(1));
//     }

//     return helper(sentence.split(' '));
// }

// console.log(reverseWordsStartingWithRecursive("hello world, how are you?", "h")); // "olleh world, woh are you?"

// function isVowel(char) {
//     return 'aeiou'.includes(char.toLowerCase());
// }

// function isVowelSandwich(str) {
//     if (str.length !== 3) return false;
//     return !isVowel(str[0]) && isVowel(str[1]) && !isVowel(str[2]);
// }









// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// function Mainfunction(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(Mainfunction([1,2,3,4,5,6,7,8,9,10]));


// function Max(number)
// {
//     return Math.max(...number);
// }

// function MainFunction(numbers)
// {
//     let cnt=0;
//     for(let i=0;i<numbers.length;i++)
//     {
//         if(numbers[i]%2==0)
//         {
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(MainFunction([1,2,3,4,5,6,7,8,9,10]))
// function MainFunction(num,num1)
// {
//     for(let i=0; i<=num.length;i++)
//     {
//         if(num[i]==num1)
//         {
//             return i;
//         }

//     }
//     return -1;
// }
// console.log(MainFunction([1,2,3,4,5,6,7,8,9,10],3));
///task5
// function calculateAverage(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum / numbers.length;
// }
// console.log(calculateAverage([1, 2, 3, 4, 5]));  
//  function MainFunction(...num)
//  {
//     return [].concat(...num);
//  }
//  console.log(MainFunction([1,2,3,10],[3,4,5,6,7,8]));

///task3



//  function MainFunction(num)
//  {
//     return num.join()===num.toReversed().join();

//  }
//  console.log(MainFunction([1,2,3,2,1]));
///task8
// function MainFunction(num)
// {
//     let sum=0;
//     for(let i=0;i<num.length;i++)
//     {
//         sum+=num[i];
//     }
//     return sum;
// }
// console.log(MainFunction([1,2,3,4,5]));

///task9
// function MainFunction(num) {
//     let types = [];
//     for (let i = 0; i < num.length; i++) {
//         types.push(typeof num[i]);
//     }
//     return types;
// }

// console.log(MainFunction([1, 'hello', true, null, undefined, {}, []])); 
///task10
// function MainFunction(num) {
//     let lengths = [];
//     for (let i = 0; i < num.length; i++) {
//         lengths.push(num[i].length);
//     }
//     return lengths;
// }

// console.log(MainFunction(["hello", "world", "this", "is", "a", "test"])); 

///task11
// function MainFunction(num,num1)
// {
//     return Math.sqrt(num)==Math.cbrt(num1)
// }
// console.log(MainFunction(4,8));

///task14
// function MainFunction(num)
// {
//     let sum=0;
//     for(let i=0; i< num.length;i++)
//     {
//         if(num[i]>5)
//         {
//             sum+=num[i];
//         }
//     }
//     return sum;
// }
// console.log(MainFunction([1,5,20,30,4,9,18]));
///task13
// function MainFunction(num)
// {
//     for(let i=0;i<num.length;i++)
//     {
//         return Math.pow(num[i],2)
//     }
// }
// console.log(MainFunction([1,2,3,4]));





//hometask1
// function MainFunction(num)
// {
// for(let i=0; i<num.length;i++)
// {
//     {
//         return num[i];
//     }

// }
// }
// console.log(MainFunction([1,2,3,4,5,6,7,8,9,10]));

//task2
// function MainFunction(...num)
// {
//     return [].concat(...num);
// }

// console.log(MainFunction([1,2,3,4,5]));
//task3
// function MainFunction(num)
// {

//     return num.reverse().join();
// }
// console.log(MainFunction([ 1,2,3,4,5]));
//task4
// function MainFunction(num)
// {
//     let cnt=[];
//     for(let i=0;i<num.length;i++)
//     {
//      cnt+=num[i]+1;
//     }
//     return cnt;
// }

// console.log(MainFunction([1,2,3,4,5]));
//task5
// function MainFunction(num)
// {
//     for(let i=0;i<num.length;i++)
//     {
//       return num[num.length-1]  
//     }
// }
// console.log(MainFunction(["hello","world","this","is","a","test"]));
//task6

// function MainFunction(num) {
//     return num.join("");
// }

// console.log(MainFunction(["hello", "world", "this", "is", "a", "test"]));
//task7
// function MainFunction(num,num1)
// {
//     for(let i=0;i<num.length;i++)
//     {
//         if(num[i]==num1)
//         {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(MainFunction([1,2,3,4,5],7));
//task8
// function MainFunction(num, num1) {
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] === num1) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(MainFunction(["a", "g", "y", "d"], "d"));
//task9
// function MainFunction(num, num1) {
//     return num.concat(num1);
// }

// console.log(MainFunction([1, 2, 3], [4, 5, 6])); 
//task10

// function MainFunction(num)
// {
//     return  num.map((el) => el.length
//     )

// }
// console.log(MainFunction(["hello", "world"]));
// function MainFunction(arr)
// {
//     return arr.filter((el) => el%2==0);

// }
// console.log(MainFunction([1,2,3,4,5,6,7,8,9,10]));




///classtask
///task3
// function MainFunction(arr) {
//     return arr.reduce((acc, num) => acc * num, 1);
// }

// console.log(MainFunction([7, 13, 2, 6, 4]));
///task2

// function MainFunction(arr) {
//     return arr.reduce(
//         (acc, num) => {
//             if (num % 2 === 0) {
//                 acc.juft += num;
//             } else {
//                 acc.toq += num;
//             }
//             return acc;
//         },
//         { juft:0, toq:0 }
//     );
// }

// console.log(MainFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

// function MainFunction (arr)
// {
//     return arr.toSorted((a,b)=>(a-b));
// }
// console.log(MainFunction([1,4,6,3,12,6,7]));

// function factorial(num) {
//     if (num <= 1) return 1;
//     return num * factorial(num - 1);
// }

// function factorialArray(arr, callback) {
//     return arr.map(callback);
// }

// console.log(factorialArray([1, 2, 3, 4, 5], factorial)); 

// function letterIndexes(str) {
//     return str.toLowerCase().split('').map(char => {
//         if (char >= 'a' && char <= 'z') {
//             return char.charCodeAt(0) - 96;
//         }
//         return char;
//     });
// }

// console.log(letterIndexes("hello"));
// function squareElements(arr) {
//     return arr.map(num => num * num);
// }

// console.log(squareElements([1, 2, 3, 4, 5])); 
// function sortDescending(arr) {
//     return arr.sort((a, b) => b - a);
// }

// console.log(sortDescending([5, 2, 9, 1, 5, 6])); 
// function findMinValue(arr) {
//     return Math.min(...arr);
// }

// console.log(findMinValue([5, 2, 9, 1, 5, 6])); 

// function Mainfunction(arr) {
//     let sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum / arr.length;
// }

// console.log(Mainfunction([1, 2, 3, 4, 5])); 
// function filterNegativeNumbers(arr) {
//     return arr.filter(num => num < 0);
// }

// console.log(filterNegativeNumbers([1, -2, 3, -4, 5, -6])); 
// function MainFunction(arr) {
//     let maxIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//     }
//     return maxIndex;
// }

// console.log(MainFunction([1, 3, 7, 1, 4, 7, 2])); 
///task1
// function sumOfCubes(arr) {
//     return arr.reduce((acc, el) => acc + Math.pow(el, 3), 0);
// }
// console.log(sumOfCubes([1, 2, 3])); 
///task2 
// function MainFunction(num)
// {
//     return num.every(num=> num);
// }
// console.log(MainFunction([true,true,true,true,true]));

// function MainFunction(arr) {
//     if (arr.length === 0) return 0;
//     let lastEl = arr[arr.length - 1];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i += 2) {
//         sum += arr[i];
//     }
//     return sum * lastEl;
// }

// console.log(MainFunction([1, 3, 3, 1, 10])); 
// function findMinMax(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     return [min, max];
// }

// console.log(findMinMax([1, 2, 3, 4, 5])); // [1, 5]
// function MainFunction(arr1, arr2) {
//     return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
// }

// console.log(canNest([1, 2, 3], [0, 4])); // true
// console.log(canNest([1, 2, 3], [2, 4])); // false

// function removeStrings(arr) {
//     return arr.filter(item => typeof item === 'number');
// }

// console.log(removeStrings([1, 'hello', 2, 'world', 3, 'foo', 4, 'bar'])); // [1, 2, 3, 4]
// function sortStringsByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length);
// }

// console.log(sortStringsByLength(["apple", "banana", "kiwi", "cherry", "mango"])); // ["kiwi", "mango", "apple", "cherry", "banana"]
// function sumOfAbsoluteValues(arr) {
//     return arr.reduce((acc, num) => acc + Math.abs(num), 0);
// }

// console.log(sumOfAbsoluteValues([1, -2, 3, -4, 5])); // 15
// function formatPhoneNumber(numbers, callback) {
//     if (numbers.length !== 10) {
//         throw new Error("Array must contain exactly 10 numbers.");
//     }
//     let phoneNumber = "(";
//     for (let i = 0; i < numbers.length; i++) {
//         if (i === 3) phoneNumber += ") ";
//         if (i === 6) phoneNumber += "-";
//         phoneNumber += numbers[i];
//     }
//     callback(phoneNumber);
// }

// formatPhoneNumber([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], function(result) {
//     console.log(result); // (555) 555-5555
// }

// console.log(formatPhoneNumber([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])); // (555) 555-5555
// function formatPhoneNumber(numbers, callback) {
//     if (numbers.length !== 10) {
//         throw new Error("Array must contain exactly 10 numbers.");
//     }
//     let phoneNumber = "(";
//     for (let i = 0; i < numbers.length; i++) {
//         if (i === 3) phoneNumber += ") ";
//         if (i === 6) phoneNumber += "-";
//         phoneNumber += numbers[i];
//     }
//     callback(phoneNumber);
// }

// formatPhoneNumber([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], function(result) {
//     console.log(result); // (555) 555-5555
// });
// function findFirstAndLastIndex(word, char) {
//     let firstIndex = word.indexOf(char);
//     let lastIndex = word.lastIndexOf(char);
//     return { firstIndex, lastIndex };
// }

// console.log(findFirstAndLastIndex("javascript", "a")); // { firstIndex: 1, lastIndex: 3 }
// console.log(findFirstAndLastIndex("hello", "l")); // { firstIndex: 2, lastIndex: 3 }
// function totalResistance(resistances) {
//     return resistances.reduce((total, resistance) => total + resistance, 0);
// }

// console.log(totalResistance([1, 2, 3, 4])); // 10
// console.log(totalResistance([10, 20, 30])); // 60


// function countTrueValues(arr) {
//     return arr.filter(value => value === true).length;
// }

// console.log(countTrueValues([true, false, true, true, false])); // 3

// function compact(array) {
//     return array.filter(Boolean);
// }

// console.log(compact([0, 1, false, 2, '', 3, null, undefined, NaN, 4])); // [1, 2, 3, 4]
// function arrayOfMultiples(num, length) {
//     let result = [];
//     for (let i = 1; i <= length; i++) {
//         result.push(num * i);
//     }
//     return result;
// }

// console.log(arrayOfMultiples(7, 5)); // [7, 14, 21, 28, 35]





// let car = {
//     brand: "toyota",
//     model: "camry",
//     year: 2020,
// //     color: "white",
// //     price: 30000,
// //     scores: [5, 4, 3, 5, 5],
// //     getinfo: function () {
// //         let scores=car.scores.reduce((a,b) => a+b);
// //         return `carbrend ${car.brand} , carmodel ${car.model} , thisyear ${car.year} , thiscolor ${car.color} , thisprice ${car.price} ,thisscores ${scores}`;
// //     }
// // }
// // car.city="england";
// // delete car.getinfo;
// // console.log(car);
// // for (const key in car) {
// //   console.log(key,car[key]);
// // }


// // let thisname={
// //     name:"Sino",
// //     age:20,
// //     city:"Dushanbe" ,
// //     scores:[5,5,5,5,5],
// //     getinfo:function(){

// // let jam=thisname.scores.reduce((a,b)=>a+b);
// //         return `name ${thisname.name} age ${thisname.age} city ${thisname.city} scores ${jam}`;
// //     }
// // }

// // console.log(thisname.getinfo());

// // Function to find the sum of an array using reduce
// function sumArray(arr) {
//     return arr.reduce((acc, num) => acc + num, 0);
// }
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// // Function to find the product of an array using reduce
// function productArray(arr) {
//     return arr.reduce((acc, num) => acc * num, 1);
// }
// console.log(productArray([1, 2, 3, 4, 5])); // 120

// // Function to find the maximum value in an array using reduce
// function maxArray(arr) {
//     return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
// }
// console.log(maxArray([1, 2, 3, 4, 5])); // 5

// // Function to find the minimum value in an array using reduce
// function minArray(arr) {
//     return arr.reduce((min, num) => (num < min ? num : min), arr[0]);
// }
// console.log(minArray([1, 2, 3, 4, 5])); // 1

// // Function to count occurrences of a value in an array using reduce
// function countOccurrences(arr, value) {
//     return arr.reduce((count, num) => (num === value ? count + 1 : count), 0);
// }
// console.log(countOccurrences([1, 2, 3, 4, 5, 3, 3], 3)); // 3

// function MainFunction(num){
// return num.reduce((acc,num)=>acc+num,0)
// }
// console.log(MainFunction([1,2,3,4,5,6,7,8,9,10]));