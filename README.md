// Console Log
    // used to log / notate values or messages within the application

// console.log('Hello, welcome the Application')

let numberOne = 3;
// --keyword - name ---- vlaue
    // Three Keywords: var, let, const 
    // "var" is not used much anymore, should instead use "let" or "const"

let theNumber3 = 9

// -keyword for Console data in JS
// console.log()
// -----method

// console.log("Hello, welcome the Application")
// ------------------------------- DATA TYPES   

// 1> Number
    // 0 - infinity (negative, positive, etc)
    // ex: 1, 2, 3, 4, 5, 2.5, -0.5

    // a.> Integers
        // only whole numbers
        // ex: 10, 20, 30, 

    // b.> FLoat
        // Has decimal points
        // ex: 0.4, 6.4

// 2> String
    // "Jordan"
    // ex: const name = "Bryan"
        // 'name' becomes a "string" because it's equal to "Bryan" which is text contained inside double or single quotes 
            // If you need to put a string inside of something  //like this - const welcome = "Hello welcom to your first 'class'" you would use single quotes inside of it.  Or vice versa

// 3> Boolean
    // true or false values
//-------------------------------- Above is the "first level" of data types

// 4> Null
    // means NO VALUE

// 5> Nil

// 6> Undefined
    // variable has not been assigned a value or null
    // ex: let jordan;
        // ^ This would be undefined ^ 
        // ex: let jordan = 1 
        // ex: let jordan = Null
            // ^ The above two are not undefined ^ 
//---------------------------------------------------------------

// 7> OBJECTS!!!!
    // used to store collections of data of multiple types, or more complex entities
        // ex: below
            // let student = {
            //     // key-value pairs
            //     name: "Jordan",
            //     age: 0,
            //     isAnInstructor: true,
            //     siblings: ["natash", "niya", "josiah"]
            // }
    // ^ with the above code, "studen" is an object.  And each of the properties 
    // ^ has it's own data type ( like "student.name" is a "string").  You can see that if you
    // ^ call it with console.log()
        // ex: 
        // console.log(typeof student.name)  would show as a "String" in 
        // the console (in browser > dev tools > console)

//-------Logical Operators
    // -- && Operators, compares two or more conditions results and returns 'true', 'false', or 'null'
let thisLogic = 3 > 3 && 6 == 6; //since 3 is not greater than 3, it prints false
let thisLogic2 = 3 > 2 && 6 == 6; //since both statements are correct, it prints true

    // The || (logical OR) operator compares two or more conditions’ results and returns true when at least one is true
let thisLogic3 = 3 > 2 || 6 == 6; // thisLogic is true
let thisLogic4 = 3 > 2 || 6 == 7; // thisLogic is true

    //The ! (logical NOT) operator negates a given result.
let thisLogic5 = !(3 > 2 && 6 == 6); // thisLogic is false
let thisLogic6 = !(3 > 2 || 6 == 7); // thisLogic is false

//---------String Concatenation
    //Concatenation is when two or more things are joined together. In JavaScript, the plus sign (+) operator is the only arithmetic operator that can be applied to a string. 
console.log("Hello" + "World"); // outputs: Hello World
console.log("This is" + " a String"); // outputs: This is a String
console.log("The number is " + 5); // outputs: The number is 5
console.log("Hello" - " World"); // Invalid, cannot use -

    //---String Access 
        //To read an individual character within a string, you can use square bracket notation, as follows:
        const name = "Inigo Montoya";

        console.log(name[2]); // i
        console.log("Hello World"[4]); // o 
        //KEEP IN MIND : Indexes start with the number 0, which is important for picking which line to read off of

// let hasHousing = true;
//     // global

// const doChores = () => {
//     // local
// }
// ---------------------------------[SCOPE ---> Global v. Local]

// // -------------------------------{if..Else Statements} 
// let drinkingAge = 18
// let studentAge = 22
// let parentConsent = false

// // if( studentAge > drinkingAge ){
// //     console.log("You can drink")
// // }else{
// //     console.log("Your Not Old Enough")
// // }

// if(studentAge > drinkingAge || parentConsent === true   ){
//     console.log("You Can Drink")
// }else{
//     console.log("Nahh")
// }
// // -----------------------------------[EITHER of these above must be true to get first statement]

// if(studentAge > drinkingAge && parentConsent === true   ){
//     console.log("You Can Drink")
// }else{
//     console.log("Nahh")
// }
// // -----------------------------------[BOTH of these above must be true to get first statement]

// if(drinkingAge > 18 ){
//     console.log("Lets Drink!!")
// }

// let num = -10

// if( num > 0){
//     console.log(true)
// }else {
//     console.log(false)
// }

// let userAge= 19

// if(userAge >= 18){
//     console.log("Access Granted")
// }else{
//     console.log("Access DENIED!")
// }

// let number = 23

// if(number > 0 && number >100){
//     console.log("Positive and Greater than 100")
// }else if (number > 0 && number < 100){
//     console.log("Positive but Less than 100")
// }else{
//     console.log("Number is negative")
// }
// /----------------------------------------------------{{EXAMPLES}}
// const signUpUser = () => {};
// const LoginUser = () => {};
// const alertUser = () => {};

// switch (userStatus) {
//   case "newMember":
//     signUpUser();
//     break;
//   case "existingMember":
//     LoginUser();
//     break;

//   case "invalidUser":
//     alertUser();
//     break;

//   default:
//     break;
// }
// -------------------------------------------------------[SWITCH]
// let x = 5;
// let y = 4;
// let operand = "*";
// switch (operand) {
//   case "+":
//     console.log(x + y);
//     break;
//   case "-":
//     console.log(x - y);
//     break;
//   case "*":
//     console.log(x * y);
//     break;
//   case "/":
//     console.log(x / y);
//     break;
//   default:
//     console.log("Invalid Operand");
//     break;
// }
// -------------------------------------------------------[SWITCH]
// studentAge > 18  ? console.log("ofAge") : console.log("Not of Age")
// -----------------------------------------------------------------{TERNARY}



// try {
//    fetch('https://www.nyke.com'){
//     // return a response
//    }
// } catch (error) {
//     console.log(error)
// }