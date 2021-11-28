import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Input from "../shared/input";
import { useState } from "react";
import postMedicine from "../../service/service.postMedicine";

const MedicineModal = (props) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const saveInfo = () => {
    const body = {
      token: localStorage.getItem('token'),
      name,
      date,
      quantity
    }

    const promisse = postMedicine(body);
    promisse
      .then((res)  => {
        alert('Remedio adicionado');
        return;
      })
      .catch((error) => {
        alert('Estamos com problema no servidor');
        //navigate('/');
        return;
      })
  };

  return (
    <Modal isEditModalHidden={props.isOpen} onClick={((e) => e.preventDefault())}>
      <ModalContainer>
        <p>Editar Perfil</p>
        <Input placeholder='Nome' setFunction={setName} />
        <Input placeholder='Data de início do tratamento' setFunction={setDate} />
        <Input placeholder='Quantidade' setFunction={setQuantity} />
        <Save onClick={() => saveInfo()}>Salvar</Save>
        <Cancel onClick={() => props.setModal(!props.isOpen)}>Cancelar</Cancel>
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

export default MedicineModal;