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
   
let  Y = prompt("enter the grade"); 
switch (Y) {
    case "A":
       //alert("excellent grade");
        document.write("excellent grade");
        break;

    case "B":
        alert("verygood grade");
        break;

     case "C":
        alert("good grade");
        break;
            
    default:
        alert("ifail");
        break;
}
   
