import { useState } from "react";
import * as S from "./styles";
import Modal from "react-modal";
import NewBooking from "../new-booking/NewBooking";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "80vh",
    width: "80vh",
  },
};

const OfficeItem = ({
  office: { description, imageURL, price, name, location },
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <S.OfficeItemContainer>
      <S.ImageContainer imageURL={imageURL} />
      <S.ProductInfoContainer>
        <S.Header>{name}</S.Header>
        <span>{description}</span>
        <span>{location}</span>
        <span>{price} SEK</span>
        <button onClick={handleModal}>Book</button>
        <Modal
          style={customStyles}
          onRequestClose={handleModal}
          isOpen={modalIsOpen}>
          <NewBooking price={price} name={name} location={location} />
          
        </Modal>
      </S.ProductInfoContainer>
    </S.OfficeItemContainer>
  );
};

export default OfficeItem;
