class User {
    constructor(email, password ){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }
    // if getter then we should define shetter also 

    set password(value){
        this._password = value
    }
}

const hitesh = new User("sunnybhushan72@gmail.com", "abc")
console.log(hitesh.email);
