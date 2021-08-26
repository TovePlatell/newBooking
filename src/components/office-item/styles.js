import styled from "styled-components";

export const OfficeItemContainer = styled.div`
  border: 1px solid lightgray;
  width: 50vw;
  height: 80vh;
  margin: 25px;
`;

export const ImageContainer = styled.div`
  background-image: ${({ imageURL }) => `url(${imageURL})`};
  height: 70%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProductInfoContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Header = styled.h2`
  margin: 0;
`;
