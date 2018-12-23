/* Understanding callbacks
    Requisites
    get user
    get a user phone number by his ID
    get user address by his ID
*/

function getUser(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: 'Allan',
            birthDate: new Date()
        })
    }, 1000);
}

function getPhone(userId, callback) {
    setTimeout(() => {
        return callback(null, {
            phoneNumber: '2025550138',
            areaCode: 202
        })
    }, 2000);
}

function getAddress(userId, callback) {
    setTimeout(() => {
        return callback(null, {
            street: "25th Ave",
            number: 34
        })
    }, 2000);

}

function resolveUser(error, user) {
    console.log(user)
}

getUser(function resolveUser(error, user) {
    if (error) {
        console.log('There is a problem with the user. ', error)
        return;
    }
    getPhone(user.id, function resolvePhone(error1, phone) {
        if (error1) {
            console.log('There is a problem with the phone. ', error)
            return;
        }
        getAddress(user.id, function resolveAddress(error2, address) {
            if (error2) {
                console.log('There is a problem with the address. ', error)
                return;
            }
            console.log(`
            Nome: ${user.name}
            Endereco: ${address.street}, ${address.number}
            Telefone: ${phone.areaCode}, ${phone.phoneNumber}
            `)
        })

    })

})