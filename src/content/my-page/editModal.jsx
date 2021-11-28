import { useState } from "react";
import styled from "styled-components";
import Input from "../shared/input";
import saveHistory from "../../service/service.saveHistory";
import { useNavigate } from "react-router-dom";

const EditModal = (props) => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('');
  const navigate = useNavigate();

  const saveInfo = () => {
    const body = {
      token: localStorage.getItem('token'),
      name,
      birthday,
      bloodType,
      height,
      weight,
      sex
    }

    const promisse = saveHistory(body);
    promisse
      .then(
        () => {
          alert('Dados salvos');
          //navigate('/homepage');
          return;
        })
      .catch((error) => {
        alert('Tivemos um erro no servidor');
        //navigate('/')
        return;
      })

  };

  return (
    <Modal isEditModalHidden={props.isEditModalHidden} onClick={((e) => e.preventDefault())}>
      <ModalContainer>
        <p>Editar Perfil</p>
        <Input placeholder='Nome' setFunction={setName} />
        <Input placeholder='Data De Nascimento' setFunction={setBirthday} />
        <Input placeholder='Tipo Sanguíneo' setFunction={setBloodType} />
        <Input placeholder='Altura (cm)' setFunction={setHeight} />
        <Input placeholder='Peso (kg)' setFunction={setWeight} />
        <Input placeholder='Sexo' setFunction={setSex} />
        <Save onClick={() => saveInfo()}>Salvar</Save>
        <Cancel onClick={() => props.setModal(!props.isEditModalHidden)}>Cancelar</Cancel>
      </ModalContainer>
    </Modal>
  );
};

const Modal = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: ${(props) => props.isEditModalHidden ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 60vw;
  height: 90vh;
  background-color: white;
  border: 1px solid rgb(0, 52, 89);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p{
    font-size: 24px;
    font-weight: 700;
  }

  button {
    width: 30%;
    height: 50px;
    border-radius: 10px;
    border: none;
    font-size: 28px;
  }
`;

const Save = styled.button`
  background-color: rgb(0, 52, 89);
  color: white;
`

const Cancel = styled.button`
  background-color: white;
`

export default EditModal;