class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const bangPD = new Teacher("BangPD", "bangpd@hybe.com", "bang07");
bangPD.addCourse("Music");

const namjoon = new User("Namjoon", "namjoon@hybe.com", "nam123");
namjoon.logMe();
bangPD.logMe();

console.log(namjoon === bangPD);
console.log(bangPD === Teacher); // false. As it's not a class it's an instance of Teacher
console.log(bangPD instanceof Teacher);
console.log(bangPD instanceof User);