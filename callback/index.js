/* Understanding callbacks
    Requisites
    get user
    get a user phone number by his ID
    get user address by his ID
*/

function getUser() {
    return new Promise(function resolvePromise(resolve,reject){
        setTimeout(() => {
            //return reject (new Error('Something unexpected has happened.'))
            return resolve({
                id: 1,
                name: 'Allan',
                birthDate: new Date()
            })
        }, 1000);

    })
}

function getPhone(userId) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                phoneNumber: '2025550138',
                areaCode: 202
            })
        }, 2000);

    })
}

function getAddress(userId, callback) {
    setTimeout(() => {
        return callback(null, {
            street: "25th Ave",
            number: 34
        })
    }, 2000);

}

const user = getUser()
user
    .then(function (userObject){
        return getPhone(userObject.id)
        //getPhone has to be resolved before the result is returned
        .then(function resolvePhone(result){
            return{
                user:{
                    name: userObject.name,
                    userId: userObject.id
                },
                phone: result
            }
        })
    })
    .then(function (userObject){
    console.log('User', userObject)
})
    .catch(function (error){
    console.error('There was a problem returning the user.',error)
})