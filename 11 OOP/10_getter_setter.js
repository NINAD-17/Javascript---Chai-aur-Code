class User {
    constructor(email, password) {
        this.email = email;
        this.password = password; 
    }

    // Each property gets getter and setter as a method by default automatically
    // You can't able to set getter and setter individually. Both needs to be defined.
    get password() {
        return `${this._password}randomText`;
    }

    set password(value) {
        // this.password = value; // Error: Maximum call stack size exceeded
        // If you use set same property in both constructor and setter then it will give this error.
        // So make different variable and set value in it. 
        // Because of this, now constructor will not set that property and in setter property will overwrites
        this._password = value;
    }
}

const taehyung = new User("V@hybe.com", "abc");
console.log(taehyung.password);