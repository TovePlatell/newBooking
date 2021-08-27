import { useState } from "react";
import * as S from "./styles";
import { addBooking } from "../../firebase/firebase.utils";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initial = {
  email: "",
};

const NewBooking = ({name, price, location}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [userInfo, setUserInfo] = useState(initial);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit =() => {
    addBooking(name, userInfo.email, startDate, endDate)
    alert("Office booked");
  };

  return (
    <S.SignUpContainer>
      <h2 style={{ textAlign: "center" }}>Book now</h2>
      <h3 style={{textAlign: "center"}}>{`${name} - ${location} - ${price} SEK`}</h3>
      <S.FormContainer>
        <S.LabelContainer>Email:</S.LabelContainer>
        <S.InputContainer
          onChange={handleChange}
          type='email'
          name='email'
          value={userInfo.email}
        />
      </S.FormContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <button onClick={handleSubmit}>Register</button>
      </div>
    </S.SignUpContainer>
  );
};

export default NewBooking;
