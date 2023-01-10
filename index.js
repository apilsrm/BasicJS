// var x = 10;
// console.log(x);
// var x = 7 * 7 ;
// console.log(x);
// let y = 55;
// console.log(y);
// y = 56;
// console.log(y);
// let y = 558;
// console.log(y); //y has been already declared

// const PI = 3.14;
// console.log(PI);
// PI = 6.3;
// console.log(PI); //Assignment to constant variable.
// const PI = 33; //'PI' has already been declared 

// const x = 90 ;
// console.log(typeof x); //number
// console.log(x);

// let name = "apil";
// console.log(typeof name);
// console.log(name);

// let bo = true;
// console.log(typeof bo); // blooean
// console.log(bo);

// let x = 90;
// let y = 60 ;
// let z = true ;
// let result = x + y + z;
// console.log(typeof result); // 90 +60 +1
// console.log(result);

// let name = "apple ball";
// let y = 50;
// let find = name +" " + y ;
// console.log(find);
// console.log(typeof find);

// let fname = "Apil";
// let lname = "Sharma";
// // console.log("my name is : " + fname + " " + lname + ".");
// // console.log( `my name is : ${fname} ${lname} . `);

// const myGreeting = `my name is : ${fname} ${lname} . `;
// console.log (`Hello Everyone: ${myGreeting}`); 


// let name = " apil"
// console.log(name);
// console.log(typeof name);
// console.log(typeof Number(name));

//Type conversion and strings methods
// let number = 777;
// console.log(number);
// console.log(typeof String(number));
//console.log(typeof number.toString());

//String method
// let str = "hello , world";
// let y = "how r u ";
// let z = "   How  is       you";

//charAt
//console.log(str.charAt(0));

//length 
// console.log(str.length);

//concat
//console.log(str.concat(y));
//console.log(str.concat(" jjj kk j"));

//replace
//console.log(str.replace("hello", "hi"));
//Indexof
//console.log(str.indexOf("o")); //4 first
//console.log(str.lastIndexOf("l"));//9 last ko

//Includes
//console.log(str.includes("hello")); //true
//console.log(str.includes("hhj")); //false

//split
// let str = "hello , world, apil g ";
// console.log(str.split(","));
// console.log(str.split("l"));

//lower ad uppercase
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//trim --- aagadi ko space lai hatauxa i.e kotesonpaxiko space hatauxa

//console.log(z.trim()); 
//slice
//console.log(str.slice(0, 5)); //hell
// const heading = document.getElementById("mycss");
// heading.innerText = " i amapil ";

// heading.style.background = "red";
// heading .style.color= "black";
// heading.style.textAlign = "center";

//condition if elseif else
// let email = "sharmaapil05@gmail.com";
// let password = "123apil";

// if (email == "sharmaapil05@gmail.com" && password == "123apil")
//    {alert("Login Success");}
// else
// {alert("invalid credential");}   

//weather
//  let weather = "wijnter"

//  if (weather === 'cloudy')
//    { alert("its darks ");}
// else if (weather === "winter")
//   {alert("its cold");}
// else {
//     alert(" shut the f up ☝🏻 ");}

// let day = "Sunday";
// switch (day) {
//     case "Sunday":
//         alert("Today is Sunday");
//         break;

//     case "Monday":
//         alert("Today is Monday");
//         break;

//      case "Saturday":
//         alert("Today is Saturday");
//         break;
            
              

//     default:
//         alert("invalid");
//         break;
// }
   
// let  Y = prompt("enter the grade"); 
// switch (Y) {
//     case "A":
//        //alert("excellent grade");
//         document.write("excellent grade");
//         break;

//     case "B":
//         alert("verygood grade");
//         break;

//      case "C":
//         alert("good grade");
//         break;
            
//     default:
//         alert("ifail");
//         break;
// }
   

// for(i=0 ; i <= 10;i++)
// {document.write(i );}


// const number = [1, 2, 3, 4, 5, "apil"];
// document.write(number.length);
// alert(number[5]);

//while loop
// let x = 0;
// while (x<5) {
//     document.write(x);
//     x++; }

// do{
//     document.write(x);
//     x++;
// }
// while(x<5)

//Array

// const myArray = [1, 2, 3, "apil", "g"];
// document.write(myArray.length);

//push to add element in arry
// const newAdd = myArray.push("good");
// document.write(myArray);

//unshift method
// const newAdd = [ 1, 2, 4, "sdf"];
// document.write(newAdd.unshift("sharma"));
// document.write(newAdd);


//pop 
// const newAdd = [ 1, 2, 4, "sdf"];
// console.log(newAdd);
// const newData = newAdd.pop();
// console.log(newData);

//shift 
// const newAdd = [ 1, 2, 4, "sdf"];
// const newData = newAdd.shift();
// console.log(newAdd);
// console.log(newData);

//concat
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9,10];
// console.log(arr1.concat(arr2));

//Filter
//let newArr = [11, 12, 13, 14, 15, "api"];
//console.log(newArr);
//const findFlter = newArr.filter((n) => n>5);
//console.log(findFlter);
//console.log(newArr);

//Splice 
 //console.log(newArr.splice(2,4));

//reverse
//console.log(newArr.reverse());

//Sorting
// let newArr = [8,1, 4, 5, 3, 2, ];
// console.log(newArr)
// const myData = newArr.sort();
// console.log(myData);
// console.log(newArr)

//let myarr = []

// myarr [0] =1;
// console.log(myarr)

// for (let i = 0; i <10; i++)
// {
//     myarr[i] =i ;
//     myarr.push(i);
//     console.log(myarr);
// }
//OBJECT
// const myPro = {
//     fname : "apil",
//     lname : "sharma",
//     age : 21,
//     isMarried : false,
//     salary :function(){
//         console.log("no salary");
//         return true;

//     },
// };
// console.log(myPro);
// console.log(myPro.lname);
// console.log(myPro.isMarried);
// console.log(myPro["age"]);
// const ans = myPro.salary();
// console.log(ans);

// const car = {
//     make : "toyota",
//     model :"camry",
//     color : "red",
//     runWheel : 4,
//     isElectric : false,
//     startEngine : function(){
//         console.log("Start Engine");
//         return false;        
//     },
//     endEngine: function(){
//         console.log("end engine");
//         return false;
//     },
// }
// console.log(car);
// console.log(car.model);
// console.log(car.startEngine());
// console.log(car.endEngine());

// if (car.startEngine()){
//     console.log("car is ready for running");
//     }
// else if(car.endEngine()){
//     console.log("Car is not ready for running");
//     }
// else{
//     console.log("invalid");
// }    
 //Function
//  function myData(params) {
//     let a = 90;
//     let b = 8;
//     let result= (a + b)/2;
//     console.log(result);
    
//  }
//  myData();

// function newFun(a, b, c) {
//     return(a + b + c);   
// }
// const ans = newFun(2, 4, 6);
// const ans2 = newFun(1, 3, 5);
// console.log(ans);
// console.log(ans2);

// const myData = function() {
//         let a = 90;
//         let b = 8;
//         let result= (a + b)/2;
//         console.log(result);
        
//      }
// console.log(myData);     

// function myData (arr = []){
//     let total = 0;
//     for (let i =0; i<arr.length; i++){
//     total += arr[i];    
//     }
//     return total;
// }
// const ans = myData([5,1,2,4,3,2])
// console.log(ans);

//Scoping
// let x = 90; //global scope 
// function myScope(){
//     let x = 50; //local scope
// }

// var x = 90;
// function myVar(){
//     var x = 9 +9;
//     console.log(x);
// }
// console.log(x);
// myVar();

// vvar in Block

// function myBlock(){
//     if (true){
//         var x = 9 * 9;
//         console.log(x);
//     }
//     console.log(x+1);
// }
// myBlock();

//let in block anf function scope
// function myFun(){
//     if(true){
//         let y = (5+6)/2;
//         //console.log(y);
//     }
// }
// myFun();
 
//const in block space

function myCalc(){
    if (true){
        const x = (((9+5)/2)*3);
        console.log(x);
    }
} myCalc();