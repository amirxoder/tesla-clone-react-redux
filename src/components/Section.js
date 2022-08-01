import React from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

const Wrap = styled.div`
  z-index: -1;
  width: 100%;
  height: 100vh;
  /* background-color: orange; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-image: ${(props) => `url("..//images/${props.bg}")`};
  /* background-image: url("..//images/model-s.jpg"); */
  background-size: cover;
  background-position: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: -1;
`;

const ButtonGroup = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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

const RightButton = styled(LeftButton)`
  background: #fff;
  opacity: 0.65;
  color: black;
  font-weight: bold;
`;

const animateArrow = keyframes`
 0% ,60%{
  transform:translateY(0);
 }
 50%{
  transform:translateY(-5px);
 }
 90%{
  transform:translateY(-3px);
 }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: ${animateArrow} 1s ease infinite;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = ({ title, desc, bgImg, leftButton, rightButton ,id}) => {
  return (
    <Wrap bg={bgImg} id={id}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{desc}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src="..//images/down-arrow.svg" alt="arrow" />
      </Buttons>
    </Wrap>
  );
};

export default Section;
