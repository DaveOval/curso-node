

//const { emailTemplate} = require("./js-fundation/01-template");
//require("./js-fundation/02-destructuring")
//const { getUserById } = require("./js-fundation/03-callback")
//const { getUserById } = require("./js-fundation/04-callback")
const { buildMakePerson } = require("./js-fundation/05-factory.js")

const makePerson = buildMakePerson({  })

const obj = { name: "John" , birthdate: "1999-01-08" }

//console.log( emailTemplate );

//console.log(emailTemplate);

/* const id = 2 ;

getUserById( id , ( error, user ) => {
    if( error ){
        throw new Error("User not found with id", 1)
    }
    console.log(user)
});
 */


