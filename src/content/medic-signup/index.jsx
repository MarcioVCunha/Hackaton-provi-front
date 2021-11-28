import styled from "styled-components";
import Side from "../shared/side-front-page";
import Title from "../shared/title";
import Input from "../shared/input";
import { useState } from "react";
import { medicReistrationSchema } from "../../validations/registrationValidation";
import { useNavigate } from "react-router-dom";
import { postMedic } from "../../service/service.postUsers";

const MedicSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [CRM, setCRM] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const signPatient = async () => {
    const userInfo = {
      name,
      email,
      password,
      repeatPassword,
      phone,
      CRM
    };

    const validation = await medicReistrationSchema.validate(userInfo);

    if (validation.error === undefined) {
      postMedic(userInfo)
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
        <Title text='Sou Médico' />
        <Input placeholder='Nome' setFunction={setName} />
        <Input placeholder='E-mail' setFunction={setEmail} />
        <Input placeholder='CRM' setFunction={setCRM} />
        <Input placeholder='Whatsapp' setFunction={setPhone} />
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
    width: 100vw;
    height: 100%;
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
    width: 60%;
  }
`;

export default MedicSignup;