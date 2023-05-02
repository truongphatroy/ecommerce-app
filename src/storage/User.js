/* Create user and handling with Local storeage */
import { userArr } from "./storage";

// const dispatch = useDispatch();
export class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.isSignin = false;
  }
  // find the user in useArr
  signin() {
    console.log(userArr);
    let isUser = userArr.find(
      (user) => user?.email === this.email && user?.password === this.password
    );
    console.log(isUser);

    if (isUser) {
      this.isSignin = true;
      // update active state to save in Local storage
      isUser.isSignin = true;
    } else {
      this.isSignin = false;
    }
    return { activeUser: isUser, isSignin: this.isSignin };
  }
}
