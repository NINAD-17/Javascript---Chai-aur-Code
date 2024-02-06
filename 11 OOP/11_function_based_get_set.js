// Function based syntax for getter and setter
function User(email, password) {
    this._email = email;
    this._password = password;

    // defineProperty is a property of getter/setter
    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, "password", {
        get: function() {
            return `${this._password}randomText`;
        },
        set: function(value) {
            this._password = value;
        }
    });
}

const jhope = new User("jhope@hybe.com", "hybeBoy");
console.log(jhope.email);