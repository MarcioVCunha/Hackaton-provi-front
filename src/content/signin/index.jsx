import { useState } from 'react';
import styled from 'styled-components';
import Input from '../shared/input';
import Side from '../shared/side-front-page';
import Title from '../shared/title';
import { signinUser } from '../../service/service.signinUser';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signin = async () => {
    if (email === '' || password === '') {
      alert('Preencha os dados corretamente');
      return;
    }

    const userInfo = {
      email,
      password
    }

    signinUser(userInfo)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        
        if (res.data.type === 1) {
          alert('Seja bem vinde');
          navigate('/homepage');
          return;
        }

        alert('Seja bem vinde Doutor');
        navigate(`/homepage-medico/${res.data.id}`)
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert('Email ou seja incorretos');
          return;
        }
        alert('Estamos com problema no servidor');
      });
  };

  return (
    <Page>
      <Side />
      <InputDiv>
        <Title text='Minha conta' />
        <Input placeholder='E-mail' setFunction={setEmail} />
        <Input placeholder='Senha' setFunction={setPassword} />
        <Button onClick={() => signin()}>Entrar</Button>
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
  height: 60%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 30%;
  padding: 10px;
  color: white;
  background-color: rgb(0, 52, 89);
  border: none;
  border-radius: 10px;
  font-size: 30px;
`;

export default Signin;