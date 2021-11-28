import { useState } from "react";
import styled from "styled-components";
import Header from "../shared/header";
import Input from "../shared/input";
import postMedicInfo from "../../service/service.postMedicInfo";
import { useNavigate } from 'react-router-dom';

const CreateMedicPage = () => {
  const [name, setName] = useState('');
  const [CRM, setCRM] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate();

  const editInfo = () => {
    if (name === '' || CRM === '' || specialty === '' || phone === '' || email === '' || state === '' || city === '' || street === '' || number === '') {
      alert('Preencha todos os campos por favor.');
      return;
    }

    const medicInfo = {
      token: localStorage.getItem('token'),
      name,
      CRM,
      specialty,
      phone,
      email,
      state,
      city,
      street,
      number
    };

    const promisse = postMedicInfo(medicInfo);
    promisse
      .then((res) => {
        alert('Informações alteradas com sucesso');
      })
      .catch((error) => {
        alert('Estamos com problemas no servidor');
        navigate('/');
      })
  };

  return (
    <>
      <Header />
      <Page>
        <Input placeholder='Nome' setFunction={setName}>{name}</Input>
        <Input placeholder='CRM' setFunction={setCRM} ></Input>
        <Input placeholder='Especialidade' setFunction={setSpecialty}></Input>
        <Input placeholder='Telefone' setFunction={setPhone}></Input>
        <Input placeholder='E-mail' setFunction={setEmail}></Input>
        <Input placeholder='Estado' setFunction={setState}></Input>
        <Input placeholder='Cidade' setFunction={setCity}></Input>
        <Input placeholder='Rua' setFunction={setStreet}></Input>
        <Input placeholder='Número do consultório' setFunction={setNumber}></Input>
        <Button onClick={() => editInfo()}>Editar</Button>
      </Page>
    </>
  );
};

const Page = styled.main`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: calc(100vh - 200px);
`;

const Button = styled.button`
  width: 30%;
  height: 50px;
  font-size: 28px;
  background-color: rgb(0, 52, 89);
  color: white;
  border: none;
  border-radius: 10px;
`;

export default CreateMedicPage;