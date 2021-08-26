import { useState } from "react";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";
//import * as S from "./styles";



const FileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [setProgress] = useState(0);


  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  console.log("image", image);


  const storage = firebase.storage();

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on
    (
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 30
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image", image);
  return (
    <div>
      {/* <S.SignUpContainer>
        <h2>Sign up more officespaces</h2>
        <S.FormContainer>
          <S.LabelContainer>Officename:</S.LabelContainer>
          <S.InputContainer
            onChange={}
            type='text'
            name='name'
            value={}
          />
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Description:</S.LabelContainer>
          <S.InputContainer
            onChange={}
            type='email'
            name='email'
            value={}
          />
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Location:</S.LabelContainer>
          <S.InputContainer
            onChange={}
            type='password'
            name='password'
            value={Location}
          />
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Price:</S.LabelContainer>
          <S.InputContainer
            onChange={handleChange}
            type='number'
            name='confirm_password'
            value={Price}
          />
        </S.FormContainer>
      </S.SignUpContainer> */}

      <input type='file' onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <img style={{width: '250px'}} src={url} alt='office' />
    </div>
  );
};

export default FileUpload;
