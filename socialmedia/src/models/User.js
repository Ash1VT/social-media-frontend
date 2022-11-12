export default class User{

    constructor(id, firstName, lastName, username, email){
        this.id = id;
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.email = email
    }

    setId(id){
        this.id = id;
    }

    setFirstName(firstName){
        this.firstName = firstName
    }

    setLastName(lastName){
        this.lastName = lastName
    }

    setUsername(username){
        this.username = username
    }

    setEmail(email){
        this.email = email
    }

}