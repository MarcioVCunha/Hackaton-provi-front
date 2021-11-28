import styled from "styled-components";
import Side from "../shared/side-front-page";
import Title from "../shared/title";
import Input from "../shared/input";
import { useState } from "react";
import { patientRegistrationSchema } from "../../validations/registrationValidation";
import { useNavigate } from "react-router-dom";
import { postPatient } from "../../service/service.postUsers";

const PatientSignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const signPatient = async () => {
    const userInfo = {
      name,
      email,
      password,
      repeatPassword
    };

    const validation = await patientRegistrationSchema.validate(userInfo);

    if (validation.error === undefined) {
      postPatient(userInfo)
        .then(() => {
          alert('Cadastro Criado');
          navigate('/sign-in');
          return;
        })
        .catch((error) => {
          error.response.status === 409 ?
            alert('Email já cadastrado')
            :
            alert('Estamos com um problema no servidor')
        })
    } else {
      alert('Preencha os dados corretamente');
    }
  }

  return (
    <Page>
      <Side />
      <InputDiv>
        <Title text='Sou Paciente' />
        <Input placeholder='Nome' setFunction={setName} />
        <Input placeholder='E-mail' setFunction={setEmail} />
        <Input placeholder='Senha' setFunction={setPassword} />
        <Input placeholder='Confirmar Senha' setFunction={setRepeatPassword} />
        <Button onClick={() => signPatient()}>Cadastrar</Button>
      </InputDiv>
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

const InputDiv = styled.div`
  width: 50%;
  height: 80%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media(max-width: 600px){
    width: 100%;
  }
`;

const Button = styled.button`
  width: 30%;
  border: none;
  border-radius: 10px;
  background-color: rgb(0, 52, 89);
  color: white;
  font-size: 30px;
  padding: 10px;
  @media(max-width: 600px){
    width: 80%;
  }
  @media(max-width: 1200px) and (min-width: 601px){
    width: 80%;
    font-size: 24px;
  }
`;

export default PatientSignUp;