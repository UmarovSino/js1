
<img src="./images.png">

# javaScript
### lecture2
______

* Condition
* Loops
* Function
_______________
# if-шартгузорӣ
    
3 роҳи сохтани condition мавҷуд аст.
  * бо роҳи if else if else
  * switch case
  * бо роҳи ternary operator

# loop -цыкл
  цылк ҳам ба монанди дар боло зикркардашуда( дар мавзуи if)  бо се роҳ сохта мешавад

* for
* while
* do/while
  

# function-функция

<img src="Снимок экрана 2025-01-08 140406.png">

функция хам ба монанди дигархо ба се гурух чудо карда мешавад:

# fuction declaration

<img src="./Снимок экрана 2025-01-08 140820.png">

функции declaration функцияи номдор мебошад ба воситаи номе ки гузошта мешавад файрот мекнем.

# fuction expression
<img src="./Снимок экрана 2025-01-08 141123.png">

  дар навбати худ ба ду гурух чудо мешавад.

* anonym 
* arrow
  

  намунаи мисолҳо бо ин ду функсия

  <img src="./Снимок экрана 2025-01-08 141624.png">

 # JavaScript Loops
## Loop for
 ### EXAMPLE

for (let i=0; i<=5; i++) {
    console.log(i);
}
 ### While Loop
EXAMPLE

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
### do while Loop
EXAMPLE

let i = 0;
do {
    console.log(i);
    i++;
} while (i<=5);
JavaScript Functions
# Function Declaration
EXAMPLE

function SumTwoNum(num1,num2) {

   return num1+num2;

}
let user1=SumTwoNum(2,3)
console.log(user1);
2. Function Expression
EXAMPLE a. Anonymous Function

let SumTwoNum = function(num1, num2) {
    return num1 + num2;
};
let user1 = SumTwoNum(2, 3);
console.log(user1);
b. Arrow Function

let SumTwoNum = (num1, num2) =>
num1 + num2;
let user1 = SumTwoNum(2, 3);
console.log(user1);
3.IIFE (Immediately Invoked Function Expression)
(function(num1, num2) {
    console.log(num1 + num2);
})(2, 3);
