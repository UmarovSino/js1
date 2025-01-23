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
