import { useState } from "react";
import * as S from './styles'
import { addProduct } from "../../firebase/firebase.utils";

const initial = {
    name: '',
    price: '',
    description: '',
    location: '',
    imageURL: ''
}

const AddProduct = () => {
    const [productInfo, setProductInfo] = useState(initial)
    const {price, description, location, name, imageURL} = productInfo

    const handleChange = ({target}) => {
        const {name, value} = target;
        setProductInfo({...productInfo, [name]: value})
    }

    const handleSubmit = async () => {
        setProductInfo(initial)
        alert('add product')
        addProduct(productInfo)
    }

  return (
    <S.SignUpContainer>
    <h2>Add Product</h2>
        <S.FormContainer>
          <S.LabelContainer>Product name:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='text' name='name' value={name} />
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Price:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='number' name='price' value={price} />
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Description:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='text' name='description' value={description} />
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Location:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='text' name='location' value={location} />
        </S.FormContainer>
        <S.FormContainer>
          <S.LabelContainer>Image URL:</S.LabelContainer>
          <S.InputContainer onChange={handleChange} type='text' name='imageURL' value={imageURL} />
        </S.FormContainer>
        <button onClick={handleSubmit}>Register</button>
    </S.SignUpContainer>
  );
};

export default AddProduct;