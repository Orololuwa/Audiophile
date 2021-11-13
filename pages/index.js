import React from "react";
import { Title } from "./styled";
import withAuth from "HOC/withAuth";
import Section from "components/section";

const Home = (props) => {
  return (
    <div style={{ background: "#000" }}>
      <Section>NEW PRODUCT</Section>
    </div>
  );
};

export default withAuth(Home);
