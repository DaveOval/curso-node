//const { getAge, getId } =  require("../plugins")



const builMakePerson = ( { getAge , getAge } ) => {

    return  ( { name, birthdate } ) => {
        return {
            id: getId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
    
}

/* const john = buildPerson( obj )

console.log(john)
 */

moudel.exports = {
    builMakePerson,
}