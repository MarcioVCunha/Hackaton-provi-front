import styled from "styled-components";
import Header from "../shared/header.jsx";
import Hints from "./hints.jsx";
import Medics from "./medics.jsx";

const Homepage = () => {
  return (
    <>
      <Header />
      <Page>
        <Text>Dicas</Text>
        <Hints />
        <Text>Médicos</Text>
        <Medics />
      </Page>
    </>
  );
};

const Page = styled.main`
  width: 90%;
  margin: 120px auto 0 auto;
`;

const Text = styled.p`
  color: rgb(0, 191, 166);
  font-size: 48px;
`;

export default Homepage;