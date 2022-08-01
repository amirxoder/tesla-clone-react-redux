import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 60px;
  /* width: 100%; */
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.scroll ? "#fff" : "transparent")};

  .scroll__header {
    background-color: #fff;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  /* gap: 1rem; */
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RigthMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    /* padding: 0 10px; */
    margin-right: 10px;
  }

  i {
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    a {
      font-size: 0.8rem;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${(props) => (props.show ? "0" : "-100%")};
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  width: 300px;
  z-index: 1000;
  /* text-align: center; */
  list-style: none;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  /* justify-content: space-;
   1
  */

  .close {
    font-size: 2rem;
    position: absolute;
    right: 0.4rem;
    top: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.3);
    }
  }

  li {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
  /* .modelMobileshow {
    display: none;
  }

  @media (max-width: 768px) {
    .modelMobileshow {
      display: block;
    }
  } */
`;

const Header = () => {
  const [show, setShow] = useState(false);
  const menuToggle = () => {
    setShow(!show);
  };
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    // console.log(scrollY);
    if (scrollY >= 200) {
      setScroll(true);
      // console.log(scroll);
    } else {
      setScroll(false);
      // console.log(scroll);
    }
  });

  return (
    <Container scroll={scroll}>
      <a href="#">
        <img src="..//images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <a href="#models">Model S</a>

        <a href="#model3">Model 3</a>

        <a href="#modelx">Model X</a>

        <a href="#modely">Model Y</a>
      </Menu>

      <RigthMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <i className="bi bi-list " onClick={() => menuToggle()}></i>
      </RigthMenu>
      <BurgerNav show={show}>
        <i className="bi bi-x close" onClick={() => menuToggle()}></i>
        <li onClick={() => menuToggle()}>
          <a href="#models" className="modelMobileshow">
            Model S
          </a>
        </li>
        <li onClick={() => menuToggle()}>
          <a href="#model3" className="modelMobileshow">
            Model 3
          </a>
        </li>
        <li onClick={() => menuToggle()}>
          <a href="#modelx" className="modelMobileshow">
            Model X
          </a>
        </li>
        <li onClick={() => menuToggle()}>
          <a href="#modely" className="modelMobileshow">
            Model Y
          </a>
        </li>
        <li onClick={() => menuToggle()}>
          <a href="#">Existing Inventory</a>
        </li>
        <li onClick={() => menuToggle()}>
          <a href="#">Used Inventory</a>
        </li>
        <li onClick={() => menuToggle()}>
          <a href="#">Trade-in </a>
        </li>
        <li onClick={() => menuToggle()}>
          <a href="#">Cybertruck</a>
        </li>
        <li onClick={() => menuToggle()}>
          <a href="#">Roudaster</a>
        </li>
        <li onClick={() => menuToggle()}>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;
