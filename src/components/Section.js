import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: orange; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-image: url("..//images/model-s.jpg");
  background-size: cover;
  background-position: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 2rem;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 08);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)``;

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Onlinbe for Touchless Delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </Wrap>
  );
};

export default Section;
