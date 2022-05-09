import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import MailBoxContext from "../store/mailbox-context";


const Form = () => {
    const history = useHistory();
    const mailCtx = useContext(MailBoxContext);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) => {
      setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const switchHandler = () => {
      setIsLogin((prev) => !prev)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        let url;
        if(isLogin){
           url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCI6khKbzl59G5x5JnMjMfiuBe2-AIoKqc";
           axios.post(url, {
               email:email,
               password: password,
               returnSecureToken:true
           }).then((res) => {
               console.log(res.data);
               mailCtx.login(res.data.idToken, res.data.email);
               history.replace('/startingpage');

           }).catch((err) => {
               console.log(err)
           })
        } else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCI6khKbzl59G5x5JnMjMfiuBe2-AIoKqc";
            axios.post(url, {
                email: email,
                password: password,
                returnSecureToken: true
            }).then((response) => {
                console.log(response)
                console.log("success")
            }).catch((error) => {
                console.log(error)
            })
        }
    }
  return (
    <div>
      <h1>{isLogin ? "Login" : "sign-up"}</h1>
      <form onSubmit={submitHandler}>
          <div>
              <label>Email</label>
              <input
              type="email"
              id="email"
              onChange={emailHandler}
              />
            
          </div>
          <div>
              <label>Password</label>
              <input
              type="password"
              id="password"
              onChange={passwordHandler}
              
              />
          </div>
          <div>
              {<button>{isLogin ? "login" : "Create Account"}</button>}
              <button onClick={switchHandler}>{isLogin ? "create new account" : "already have an account"}</button>
          </div>
      </form>
    </div>
  );
};

export default Form;
