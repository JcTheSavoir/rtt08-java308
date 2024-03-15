


// //-----------------------if else statements---

// let drinkingAge = 18;
// let studentAge = 12;
// parentConsent = true;

// if (studentAge > drinkingAge) {
//     console.log("You can Drink");
// } else {
//     console.log("Your Not Old Enough");
// };


// if (studentAge > drinkingAge || parentConsent === true) {
//     console.log("You Can Drink");
// }else{
//     console.log("Nahh");
// };



// let personAge = 20;
// let candyAmount = 0
// let destinationBudget = 175
// let flightAvailable = false
// let jointPain = true

// if (personAge >= 65) {
//     console.log("You are eligible for medicare");
// } else {
//     console.log("You are too young for medicare, please get a job");
// }

// if (candyAmount > 0) {
//     console.log("Yes take a piece of candy from the bank");
// } else {
//     console.log("We are out of candy, please go to Dollar General instead");
// }

// if (destinationBudget >= 2000) {
//     console.log("We can get there in style");
// } else {
//     console.log("Time to get tickets where you have to stand during the flight");
// }

// if (flightAvailable === true) {
//     console.log("Alright we are set for this trip, glad we waited last minute to get the tickets");
// } else {
//     console.log("Um hun, don't be mad but I might've forgotten to book the flight, and there are no flights availabe");
// }

// if (jointPain === false) {
//     console.log("Looks like we are doing well for being 26");
// } else {
//     console.log("Wow joint pain at my age, this shouldn't be possible");
// }

// let number = 23
// if (number > 0 && number > 100) {
//     console.log("Positive and Greater than 100")
// } else if (number > 0 && number < 100) {
//     console.log("Positive and less than 100")
// } else {
//     console.log("The number is negative")
// }

// let learnerScore = 55;
// if (learnerScore >= 90)  {
//     console.log("A");
// } else if (learnerScore >= 80) {
//     console.log("B");
// }else if (learnerScore >= 70) {
//     console.log("C");
// }else if(learnerScore >= 55) {
//     console.log("D");
// }else{
//     console.log("F");
// }

// // --------SWITCH STATEMENTS----
// let bubbleDiameter = 20;
// let bubbleRadius = bubbleDiameter/2;

// switch (bubbleRadius) {
//     case bubbleRadius === 10:
//         console.log("That is a decent sized bubble")
//         break;
//     case bubbleRadius > 10: 
//         console.log("Now that is a bubble worth creating");
//         break;
//     default:
//         console.log("You need to go back to bubble school")
//         break;
// }

// let x = 5;
// let y = 4;
// let operand = "*";
// switch (operand) {
//    case "+":
//        console.log(x + y);
//        break;
//    case "-":
//        console.log(x - y);
//        break;
//    case "*":
//        console.log(x * y);
//        break
//    case "/":
//        console.log(x / y);
//        break;
//    default:
//        console.log("Invalid Operand")
//        break;
// }


// // const signUpUser =()=>{}
// // const loginUser =()=>{}
// // const alertUser =()=>{}

// // switch (userStatus) {
// //     case "newMember":
// //         signUpUser();
// //         break;

// //     case "exisitingUser":
// //         loginUser();
// //         break;

// //     case "invalidUser":
// //         alertUser();
// //         break;

// //     default:
// //         break;
// // }

// //---------------Ternary Operators----
//     // Similar to an if else conditional, but only a single line
//     //syntax is ----- (conditional) ? (value_if_true) : (value_if_false)
// let bubbleCount = 24

// bubbleCount >= 30 ? console.log("That's a lot of bubbles") : console.log("Come one, you can blow more than that, follow the spongebob method")

// if(false) {
//     console.log("True");
// }else{
//     console.log("False");
// }
// // Prints false, as it's executing false




// //-------------------------- ForLOOPS
//     /* for (initialization; condition; afterthought) {
// 	statements
// }*/
// for (let i=0;   i <10;      i++    ){ //(-initialization; -condition; -do this)
//    // i starts at zero, until i is no longer less than 10, it will go up by 1.  
//     console.log("Loop is currently at", i); 
//     //--------what happens everytime i goes up by 1, until it's no longer less than 10----
// }

// let students = [
//     "Diana",
//     "Trayvelle",
//     "Farah",
//     "Farouk"
// ]

//     for( let i = 0; i < students.length; i++){
//         console.log(students[i])
//     }


//     //Count down from 10 to 1
// // for(i=10; i = 1; i--){
// //     console.log("T-Minus", i)
// // };

//     //Output Odd numbers from 1 to 10
// for(i=1; i<=10; i+2){
//     console.log(i)
// }

//     //Output even numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     } 
// }


//     //Output multiples of 3, starting at 6, and ending at 60
// for( i=6; i <= 60; i+=3){
//     console.log(i)
// };

    //Output an increasing number of # symbols, from 1 to 7
        //This can be done with a switch statement shown below
//     for(i=1; i <= 7; i++){
//     switch (i) {
//         case i = 1:
//             console.log("#");
//             break;
//         case i = 2:
//             console.log("##");
//             break;
//         case i = 3:
//             console.log("###");
//             break;
//         case i = 4:
//             console.log("####");
//             break;
//         case i = 5:
//             console.log("#####");
//             break;
//         case i = 6:
//             console.log("######");
//             break;
//         case i = 7:
//             console.log("#######");
//             break; 
//     }
// }

        //This can be done using the repeat() method shown below 
// for(i=1; i <= 7; i++){
//     console.log("#".repeat(i))
// }


        //This can also be done by allowing the use of another variable shown below
// let answer = ""

// for(i=1; i <= 7; i++){
//     answer += "#"
//     console.log(answer)
// }

    /*
    write a for loop that iterates from 1 to 20. The loop should:
        -Print “prime” for all prime numbers.
        -Print “even” for all even numbers.
        -Print “odd” for all odd numbers.
        -Treat 2 as an even number and 1 & 3 as odd, rather than prime.
    */