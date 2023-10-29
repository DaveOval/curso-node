const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {   
        id: 2,
        name: "Jane Doe",
    }
]


const getUserById = ( id, callback )  => {
    const user = users.find( function ( user ){
        return user.id === id;
    });

    if( !user ){
        return callback(`USUARIO no encontrado ${id}`);
    }

    return callback( null, user );

}

module.exports = {
    getUserById
}