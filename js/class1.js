// let user = {
//   username: "junil",
//   password: "1234"
// };


class User {
  username;
  password;
  name;
  email;

  constructor(username, password, name, email) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.email = email;
  }

  printName() {
    console.log(this.name + "님");
  }

  // setUsername(username) {
  //   this.#username = username;
  // }

  // getUsername() {
  //   return this.#username;
  // }
}

class UserMain {
  static #instance = null; // 싱글톤
  static getInstance() {
    if(this.#instance == null) {
      this.#instance = new UserMain();
    }
    return this.#instance;
  }

  
  main() {
    let user = new User("junil", "1234", "김준일", "abcd@gmail.com");

    // user.username = "junil";
    // user.password = "1234";
    // user.name = "김준일";
    // user.email = "abcd@gmail.com";

    console.log(user);

    localStorage.username = user.username; // pc안에 데이터 저장

    // localStorage로 데이터 저장하면 전역으로 사용 가능
    console.log("username: " + localStorage.username);

    user.printName();
  }
}

window.onload = () => {
  // let userMain = new UserMain();
  let userMain = UserMain.getInstance();

  userMain.main();
}