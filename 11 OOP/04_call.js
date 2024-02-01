function setUsername(username) {
    this.username = username;
    console.log("called!!");
}

function createUser(username, email, password) {
    // setUsername(username); // If you write only this statement then this function will called but it will not set value of username
    // It will set value of username to setUsername's 'this' So after this line execute that function's content will flush and you will not get username in output.
    //setUsername.call(username);
    
    setUsername.call(this, username); // You're passing createuser's this to get all value in this 'this'
    this.email = email;
    this.password = password;
}

const taehyung = new createUser("Taehyung", "tae30@kakao.com", "tae30");
console.log(taehyung);