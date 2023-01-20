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

// function myCalc(){
//     if (true){
//         const x = (((9+5)/2)*3);
//         console.log(x);
//     }
// } myCalc();

//DOM MANIPULATION and its method
// const ans = document.head;
// console.log(ans);

// const ans = document.body.firstElementChild;
//console.log(ans);
//const ans = document.body.lastElementChild;
//console.log(ans);

// const result = document.getElementById("myIs");
// console.log(result);

// const result = document.getElementById("myIs");
// result.innerHTML = "Apil sharma <b> what is your </b>";
// result.innerText= "Ronldo gayo khadi"; //no change

// const ans = document.getElementsByClassName("myyour");
// console.log(ans[0]); //array ma store huncha  bcz class haru multipul huncha
// ans[0].innerHTML = "Asdfghjkljcui<b> hat the the </>b";

// const newData = document.getElementsByTagName("span");  //tags also store value in array sm as class
// console.log(newData);
// newData[0].innerHTML = " I am always Happy ";

// const myEmail = document.getElementsByName("email");
// console.log(myEmail[0]);
// myEmail[0].style.width = "50px";

// const myQuery = document.querySelectorAll("clickme");
// console.log(myQuery);

// const myButton = document.getElementById("clickme");
// myButton.innerText= "Save";
// myButton.style.background = "blue";
// myButton.style.color = "white";
// myButton.style.padding = "10px";
// myButton.style.border = "none";
// myButton.style.cursor = "pointer";

// const Creat = document.createElement("h2");
// //console.log(Creat); //console ma creat garxa page ma nagarikina
//  document.body.append(Creat);

// myButton.onclick = myFunc //reference pass gareko ho
// function myFunc(){
// const Creat = document.createElement("h2");

// Creat.innerHTML = "the is teh";
// document.body.append(Creat);}
// // // myFunc();

// // let button = document.getElementById("myButton");
// // button.addEventListener("click", function())
// // console.log("the button was click");

// // const MyCountry = document.querySelector("#myCountry");
// // console.log(MyCountry);
// // MyCountry.innerHTML = "Nepal is a small country"; //dom manipulate using query; 

// const myclear = document.querySelectorAll("button");
// console.log(myclear);
// myclear[1].innerText = "this is a clear button";
// for(let i =0 ; i <myclear.length; i++)
// {
// myclear[1].innerText = "this is a clear button"; 
// myclear[1].style.background = "#00FFFF";
// myclear[1].style.color = "green";
// myclear[1].style.padding = "10px";
// myclear[1].style.border = "none";
// myclear[1].style.cursor = "pointer"; 
// } 

// function Deletethis(){
// const pleasedel= document.querySelector("h2");
// pleasedel.remove();}

// myButton.onclick = myFunc; //as a reference function lai use gareko..fxn call nagrikina bcz click garesi matrai clear garni ho
// myclear[1].onclick = Deletethis;


// const spntxt = document.querySelectorAll("span")
// console.log(spntxt);
// for(let i =0 ; i <spntxt.length; i++)
// {
// spntxt[1].innerText = " span"; 
// spntxt[1].style.color = "red";

// }

//ADvance array method
//for each
//iif we use for each it cannot return array . it only iterate main array
// let arr = [10, 2, 4, 6, 8];
// //const Myresult = ()=> // function () == ()=> fat array function}
// arr.forEach((value,index,array)=>{
// console.log(index + "=" + value);
// });

//let arr = [10, 2, 6, 8, 5, 7, 11];

// const MyForEach = arr.forEach((value,index,array)=>{
//     return(array[index] = value +2);
//     });
// console.log(MyForEach); //its  doesnt return anything

//Map -- if we use map  it return new array after irrate main array;
// const MyMap = arr.map((valuee, indeex, array)=>{
//     //console.log(valuee, indeex, array);
//     return(array[indeex]= valuee +2);
// });
// console.log(MyMap)

// //Filter
// const myFilter = arr.filter((value, index, array) =>{
   // return value>2;
    //return value %2 === 0; //for even
    // return value % 2 !== 0;
//}); //its returns value  
// console.log(myFilter); 

//Find method
// const myFind = arr.find((value, index, array)=>{
//     return value > 10 ;
// });
// console.log(myFind);

//reduce metgod return single value output ma(sum average etc) 
// const myReduce = arr.reduce((accumultor, curValue, curIndex ,array) =>{
    // console.log(accumultor, curValue, curIndex );
     //accumultor += curValue ;
    //  accumultor = (accumultor + curValue)/2 ;
    //  return accumultor; 

// }); console.log(myReduce);


//Event listeners
// const NewClick = document.getElementById("myclick");
// const NewBox = document.getElementById("mybox");
// const NewTag = document.getElementById("mytag");
// const MyInput = document.querySelector("input");

// NewClick.addEventListener("click", () => {
//     // NewBox.style.background = "red";
//     NewBox.classList.add("newCssDiv");
// });
// NewBox.addEventListener("mouseover", () => {
//     NewClick.style.transform = "scale(1.1)";
//     NewTag.style.background = "yellow";
// });
// NewBox.addEventListener("mouseout", () => { 
// NewClick.style.transform = " ";
// NewTag.style.background ="";
// });


// MyInput.addEventListener("change", (e) => {
// console.log(e);
// console.log(e.target.value);
// } );

// NewBox.addEventListener("dblclick", () => {
// document.body.style.background = "black"
// });

// NewBox.addEventListener("click", () => {
//     document.body.style.background = "white"
// });

// //rightclick 
// NewClick.addEventListener("contextmenu", () => {
//     e.preventDefault();
//     NewClick.style.background = "blue"
// });
// addEventListener("contextmenu", (e) => {
// e.preventDefault();
// });

// const MyClick =document.getElementById("myclick");
// const HeyInput = document.getElementById("myinput");
// const MyClear = document.getElementById("myclear");

// const CallMeBack = () => {
//    // alert(HeyInput.value); 
//    //sessionStorage.setItem("key", HeyInput.value);
//    localStorage.setItem("name", JSON.stringify({fname ="apil'', lname : ''sharma ", age : 23})
//    );
// };
// MyClick.addEventListener("click", CallMeBack);
// MyClear.addEventListener("click",DeleteToken);

// // if (sessionStorage.getItem("key")){
// //  alert(sessionStorage.getItem("key"));}

// if (localStorage.getItem("name")){
//  //alert(localStorage.getItem("name"));
// console.log(JSON.parse(localStorage.getItem("name")))};

// MyClear.addEventListener("click", DeleteToken);
// function DeleteToken() {
//    localStorage.clear();}

 //Math object
 //const value  = Math.random();
 //onsole.log(value);

//Abs
// const value  = Math.abs(-5);
// console.log(value); //ans 5

// const value  = Math.max(2,4,10,2);
// console.log(value);

// const value  = Math.min(2,4,10,2);
// console.log(value);

// function sub (a,b){
//    return Math.abs(a-b);
// }
// console.log(sub(2,6)); //ans 4

//trunk
// const value = Math.round(5.8);
// console.log(value); //ans 5

// const value = Math.round(4.5)
// console.log(value); //ans 5

// const value = Math.floor(4.5)
// console.log(value); //ans 4

// const value  = Math.ceil(5.30);
// console.log(value); //ans 6


//const value  = Math.pow(2,4); //16
// const value  = Math.sqrt(2,4);//1.4142...
// const value  = Math.random();
// console.log(value);

//Date in js
// const myDate = new Date();
// console.log(myDate);

// const OneByone = new Date();
// console.log(OneByone.getDate());
// console.log(OneByone.getFullYear());
// console.log(OneByone.getMilliseconds());
//console.log(OneByone.getUTCDay()); //0 sunday 1 monday 3 tuesday
// console.log(OneByone.getTimezoneOffset());
// console.log(OneByone.toISOString());
//console.log(OneByone.toLocaleTimeString());  //4:15:32 pm

//Set time out
// setTimeout (() => {
//    console.log("this is timeset");
// },3000 );

// const setId = setInterval(() => {
//    console.log("this is timeset");
// },1000 );

// setTimeout (() => {
//    clearInterval(setId);
//    console.log("this is timestop");
// },3000 );



//constructor function

// function BankAccount(CustomarName , balance = 0){
//    this.CustomarName = CustomarName;
//    this.balance = balance;
//    this.AccountNumber = Date.now();

   // this.deposite = function(amount){
   //   this.balance += amount;
   //  };
   // this.withdraw = function(amount){
   //    this.balance -= amount;
   // }; 

//    } 

   
// BankAccount.prototype.deposite = function(amount){
//    this.balance += amount;
//    console.log(`Deposited ${amount}, Current balance is : ${this.balance}`);
//   };

// BankAccount.prototype.withdraw = function(amount){
//    if(this.balance>= amount){
//       this.balance +=amount;
//   console.log(`withdraw balance is ${amount} , Current balance is : ${this.balance}`);
//    }else{
//       console.log(`Balance insufficent , Current balance ${this.balance}`);
//    }
// }; 

//    const ramAccount = new BankAccount("Ram", 5000);
//    const hariAccount = new BankAccount("Hari");
//    // const shyamAccount = new BankAccount("Shyam");

//    //hariAccount.deposite(8000);
//    ramAccount.withdraw(6000);
//    // shyamAccount.deposite(1000);
//    // console.log(ramAccount , hariAccount ,shyamAccount);

//    console.log(ramAccount ,hariAccount);


//Class Based OOP concept in JS

// constructor  is a special method that is used to initialize the object when it is created


// class BankAccount {
//    // CustomerName;
//    // accountNumber;
//    // balance;

// //constructor
// constructor(CustomerName,balance = 0){
//    this.CustomerName = CustomerName;
//    this.accountNumber = Date.now();
//    this.balance = balance;
// }
// deposite(amount){
//    this.balance = this.balance + amount;
//    console.log(`Deposited ${amount}, Current balance is : ${this.balance}`);
// }

// withdraw(amount){
//    if(this.balance>= amount){
//       this.balance -= amount;
//       console.log(`withdraw balance is ${amount} , Current balance is : ${this.balance}`);
//          }
//    else{
//       console.log(`Balance insufficent , Current balance ${this.balance}`);
//       }; 
// }
// }

// const shyamAccount = new BankAccount("Shyam" , 5000);
// const gitaAccount = new BankAccount("gita");
// gitaAccount.deposite(6000);
// shyamAccount.withdraw(5000);

// console.log(shyamAccount , gitaAccount);


class Person {
  
constructor ( Fname, Lname, Age,Gender){
   this.Fname = Fname;
   this.Lname = Lname;
   this.Age = Age;
   this.Gender = Gender;

   
}

sayHello(){
   console.log(`My name is ${this.Fname} ${this.Lname} and my age is ${this.Age}`);
}
}

const person_1 = new Person("Apil" , "sharma" , 21 , "M");
// console.log(person_1);
person_1.sayHello(); //My name is Apil sharma and my age is 21
console.log(person_1); //whole object 