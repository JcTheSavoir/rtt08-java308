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