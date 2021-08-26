import { useState } from "react";
import { auth } from "../../firebase/firebase.utils";
import * as S from "./styles";
import CurrentUserContext from "../../context/user-context/UserContext";
import { Link } from "react-router-dom";

const initial = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [userInfo, setUserInfo] = useState(initial)
    const {password,email} = userInfo

    const handleChange = ({target}) => {
        const {name, value} = target;
        setUserInfo({...userInfo, [name]: value})
    }

    const handleSubmit = async () => {
        const {user} = await auth.signInWithEmailAndPassword(email, password)

        localStorage.setItem('uid', user.uid)
        
    }

  return (
    <S.SignUpContainer>
    <h2>Login</h2>
        <S.FormContainer>
          <S.LabelContainer>Email:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='email' name='email' value={email}/>
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Password:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='password' name='password' value={password}/>
        </S.FormContainer>
        <Link to="./"><button onClick={handleSubmit}>Login</button></Link>
        
    </S.SignUpContainer>
  );
};

export default SignIn;
