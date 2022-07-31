import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        bgImg="model-s.jpg"
        leftButton="custom order"
        rightButton="existing inventory"
      />
      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        bgImg="model-y.jpg"
        leftButton="custom order"
        rightButton="existing inventory"
      />
      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        bgImg="model-3.jpg"
        leftButton="custom order"
        rightButton="existing inventory"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        bgImg="model-x.jpg"
        leftButton="custom order"
        rightButton="existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        bgImg="solar-panel.jpg"
        leftButton={"Order now"}
        rightButton="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        bgImg={"solar-roof.jpg"}
        leftButton={"Order now"}
        rightButton="Learn more"
      />
      <Section
        title="Accessories"
        bgImg={"accessories.jpg"}
        leftButton={"Shop now"}
        // rightButton="Learn more"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
