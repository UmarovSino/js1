
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





//////////

<img src="./images.png">

# javaScript
### lecture3
______

<img src="./Снимок экрана 2025-01-10 143408.png">

 ### лексияи сеюм
 _______
<img src="./Снимок экрана 2025-01-10 143423.png">
 
 ### Scope дар ҷава чист?

_______
 Дар JavaScript миқёс бо контексти ҷории рамзи шумо ишора мекунад.Ин контекст муайян мекунад ки дар куҷо мо метавонем ба тағйирёбандаҳо ва функсияҳо дастраси пайдо кунем.
 ________
    Дар навбати худ ба чор гуруҳ ҷудо мешаванд.
  ________
  # Function declaration -Hosting

  <img src="./Снимок экрана 2025-01-10 143535.png">

Дар JavaScript, эъломияҳои функсия комилан баланд карда мешаванд (hoisted). Ин маънои онро дорад, ки ҳам номи функсия ва ҳам таърифи он ба қисми болоии дастрасии худ дар доираи дахлдор бардошта мешаванд, ки функсияро имкон медиҳад дар ҳар куҷои ин доира, ҳатто пеш аз таърифи воқеии он дар код, фаро хонда шавад.
<img src="./Снимок экрана 2025-01-10 143547.png">
Майдони муваққатии беэътиборӣ (Temporal Dead Zone) барои let ва const

TDZ: Ин истилоҳ барои тавсифи ҳолатест, ки дар он тағйирёбандаҳо дастнорас мебошанд. Онҳо дар доира ҳастанд, аммо ҳанӯз эълом нашудаанд. Тағйирёбандаҳои let ва const дар TDZ аз оғози доираи худ то лаҳзаи эълом шуданашон мавҷуданд.

Чӣ тавр TDZ-ро пешгирӣ кардан мумкин аст?
Ба таври нисбатан оддӣ, ҳамеша боварӣ ҳосил кунед, ки let ва const-и худро дар қисми болоии доираи худ таъриф мекунед.

Майдони муваққатии беэътиборӣ:

   * pi; // ReferenceError (Майдони муваққатии беэътиборӣ)
   * const pi = 3.14; (Эълом ва ибтидоисозӣ)
   * pi; // => 3.14 (Дуруст ва коршоям)
  
<img src="./Снимок экрана 2025-01-10 143558.png">
