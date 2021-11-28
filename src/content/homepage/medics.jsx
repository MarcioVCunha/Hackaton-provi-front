/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import styled from "styled-components";
import getMedics from "../../service/service.getMedics";
import { useNavigate } from "react-router-dom";

const Medics = () => {
  const [medicList, setMedicList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const promisse = getMedics({ token });
    promisse
      .then((res) => {
        setMedicList(res.data);
        return;
      })
      .catch((error) => {
        alert('Estamos com um problema no servidor')
        navigate('/')
      })
  }, [])

  const message = (text) => {

  };

  return (
    <MedicsContainer>
      {medicList.map((medic, key) => {
        return (
          <MedicContainer key={key}>
            <Name>{medic.name}</Name>
            <Specialization>{medic.specialization}</Specialization>
            <CRM>CRM: {medic.CRM}</CRM>
            <p>Atende em:</p>
            <Address>{medic.address}, {medic.addressNumber} - {medic.city} - {medic.state}</Address>
            <Buttons>
              <a href={`https://wa.me/55${medic.phone}?text=${encodeURI('Gostaria de tirar uma dúvida')}`} target='_blank'>
                <ButtonQuestion onClick={() => message('tirar uma dúviada')}>Tirar dúvida</ButtonQuestion>
              </a>
              <a href={`https://wa.me/55${medic.phone}?text=${encodeURI('Gostaria de agendar um horário')}`} target='_blank'>
                <ButtonApointment onClick={() => message('marcar um horário')}>Agendar consulta</ButtonApointment>
              </a>
            </Buttons>
          </MedicContainer>
        )
      })}
    </MedicsContainer>
  )
};

const MedicsContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const MedicContainer = styled.div`
  border: 1px solid #007EA7;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  p{
    margin: 10px 0;
    text-overflow: ellipsis;
  }
`;

const Specialization = styled.p`
`;

const Name = styled.p`
  color: rgb(0, 52, 89);
  font-size: 24px;
`;

const CRM = styled.p`
`;

const Address = styled.p`
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a{
    width: 50%;
  }

  button{
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 20px;
    margin: 10px;
  }
`;

const ButtonQuestion = styled.button`
  background: rgba(0, 52, 89, 1);
  color: white;
`;

const ButtonApointment = styled.button`
  background: rgba(0, 191, 166, 1);
`;

export default Medics;