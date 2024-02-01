// ES6

class User {
    // Constructor is called immediately after an object is initialized from the class (new keyword)
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Methods
    encryptPassword() {
        return `${this.password}abc`;
    }

    capitalizeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const taehyung = new User("taehyung", "tae@gmail.com", "123");
console.log(taehyung.encryptPassword());
console.log(taehyung.capitalizeUsername());

// Behind the Scenes of above code
function User2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User2.prototype.capitalizeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const suga = new User2("suga", "suga@naver.com", "agustD");
console.log(suga.encryptPassword());
console.log(suga.capitalizeUsername());