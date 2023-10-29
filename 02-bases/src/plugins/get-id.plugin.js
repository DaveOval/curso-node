const { v4: uuidv4 } = require('uuid');

const getId = () => {
    //if( !id ) return new Error("Id is required")

    return uuidv4()
}

module.exports = {
    getId,
}
