import { useState } from "react";
import * as S from "./styles";
import { newAccount, auth } from "../../firebase/firebase.utils";


const initial = {
    name: '',
    email: '',
    password: '',
    confirm_password: '' 
}

const SignUp = () => {
    const [userInfo, setUserInfo] = useState(initial)
    const {password, confirm_password, email, name} = userInfo

    const handleChange = ({target}) => {
        const {name, value} = target;
        setUserInfo({...userInfo, [name]: value})
    }

    const handleSubmit = async () => {
        if(password !== confirm_password){
            alert('Password does not match')
            return
        }

        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        newAccount(user, userInfo)
        setUserInfo(initial)
        alert('New user created')
    }

  return (
    <S.SignUpContainer>
    <h2>Sign up</h2>
        <S.FormContainer>
          <S.LabelContainer>Name:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='text' name='name' value={name} />
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Email:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='email' name='email' value={email}/>
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Password:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='password' name='password' value={password}/>
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Confirm Password:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='password' name='confirm_password' value={confirm_password}/>
        </S.FormContainer>
        <button onClick={handleSubmit}>Register</button>
    </S.SignUpContainer>
  );
};

export default SignUp;
