// Object based implementation of getter/setter
const User = {
    _email: "jin@hybe.com",
    _password: "wwh",

    get email() {
        return `${this._email}`;
    },

    set email(value) {
        this._email = value;
    }
}

// Object.create(User): make an object based on user
const jin = Object.create(User);
console.log(jin.email)