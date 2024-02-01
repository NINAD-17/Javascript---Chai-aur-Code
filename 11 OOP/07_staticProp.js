// Static Properties

class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }

    static createId() {
        return `${Math.floor(Math.random() * 10000)}`
    }
}

const jimin = new User("Jimin");
console.log(jimin.createId()); // ERROR if you've used static keyword on createId()

// Sometime for some conditions we may want to not give access of createId() to each object which is instantiated from this class
// for this use keyword 'static'. It prevents access of that method


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const jyp = new Teacher("JYP", "jyp@jype.com");
jyp.logMe();
console.log(jyp.createId()); // ERROR