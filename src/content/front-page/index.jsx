import styled from "styled-components";
import Side from "../shared/side-front-page.jsx";
import { useNavigate } from "react-router-dom";
import Title from "../shared/title.jsx";

const FrontPage = () => {
  const navigate = useNavigate();

  const sendTo = (link) => {
    navigate(link);
  };

  return (
    <Page>
      <Side />
      <ButtonsDiv>
        <Title text='Bem Vinde ao ConecTrans' />
        <div>
          <MedicButton onClick={() => sendTo('/medic-signup')}>
            Sou Médico
          </MedicButton>
          <PatientButton onClick={() => sendTo('/patient-signup')}>
            Sou Paciente
          </PatientButton>
        </div>
        <BottomText onClick={() => sendTo('sign-in')}>Já tenho conta</BottomText>
      </ButtonsDiv>
    </Page>
  )
};

const Page = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5vh 5vw;
`;

const ButtonsDiv = styled.div`
  width: 50%;
  height: 80%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  button{
    width: 60%;
    height: 60px;
    border: none;
    font-size: 36px;
    text-align: center;
    border-radius: 10px;
  }
`;

const MedicButton = styled.button`
  background-color: rgb(0, 126, 167);
  margin-bottom: 60px;
`;

const PatientButton = styled.button`
  background-color: rgb(0, 191, 166);
`;

const BottomText = styled.p`
  font-size: 30px;
  cursor: pointer;
`;

export default FrontPage;