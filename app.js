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

        