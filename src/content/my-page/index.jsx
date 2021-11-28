import styled from "styled-components";
import Header from "../shared/header";
import icon2 from '../../assets/icon2.svg';
import { useEffect, useState } from "react";
import getUserInfo from "../../service/service.getUserInfo";
import EditModal from "./editModal";
import MedicineModal from "./medicineModal";

const MyPage = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [bloodtype, setBloodType] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('');
  const [isEditModalHidden, setIsEditModalHidden] = useState(false);
  const [medicine, setMedicine] = useState([]);
  const [isMedicineModalOpen, setMedicineModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const promisse = getUserInfo({ token });
    promisse
      .then(async (res) => {
        setName(res.data.userInfo[0].name);
        setBirthdate(res.data.userHistory[0].birth_date ? res.data.userHistory[0].birth_date : '');
        setBloodType(res.data.userHistory[0].blood_type ? res.data.userHistory[0].blood_type : '');
        setHeight(res.data.userHistory[0].height ? res.data.userHistory[0].height : '');
        setWeight(res.data.userHistory[0].weight ? res.data.userHistory[0].weight : '');
        setSex(res.data.userHistory[0].sex ? res.data.userHistory[0].sex : '');
        setMedicine(res.data.userMedications);
      })
      .catch((res) => console.log(res))
  }, []);

  return (
    <>
      <Header />
      <EditModal isEditModalHidden={isEditModalHidden} setModal={setIsEditModalHidden} />
      <MedicineModal isOpen={isMedicineModalOpen} setModal={setMedicineModalOpen} />
      <Page>
        <UserInfo>
          <Icon src={icon2} alt='icon' />
          <ContainerInfo>
            <Name>{name}</Name>
            <Birthdate>Data de nascimento: {birthdate}</Birthdate>
            <Editar onClick={() => setIsEditModalHidden(!isEditModalHidden)}>Editar</Editar>
          </ContainerInfo>
        </UserInfo>
        <Text>Dados de saúde</Text>
        <DataContainer>
          <Info>Tipo sanguíneo: {bloodtype}</Info>
          <Info>Altura: {height} cm</Info>
          <Info>Peso: {weight} kg</Info>
          <Info>Sexo Biológico: {sex}</Info>
        </DataContainer>
        <Text>Remédios</Text>
        <MedicineContainer>
          <AddMedication onClick={() => setMedicineModalOpen(!isMedicineModalOpen)}>+</AddMedication>
          {medicine.map((med, key) => {
            return (
              <MedContainer key={key}>
                <MedName>{med.name}</MedName>
                <MedText>{med.dosage}</MedText>
                <MedText>desde {med.begin_date}</MedText>
              </MedContainer>
            )
          })}
        </MedicineContainer>
      </Page>
    </>
  );
};

const Page = styled.main`
  margin: 120px auto 0 auto;
  width: 90vw;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  height: 10vh;
  margin: 0 5vw;
`;

const ContainerInfo = styled.div`
  p{
    margin: 10px 0;
  }
`

const Name = styled.p`
  font-size: 48px;
  font-weight: 700;
`;

const Birthdate = styled.p`
  font-size: 24px;
`;

const Editar = styled.p`
  font-size: 24px;
  color: rgb(0, 52, 89);
  cursor: pointer;
`;

const DataContainer = styled.div`
  margin: 10px;
`;

const Text = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: rgb(0, 52, 89);
  margin: 10px;
`
const Info = styled.p`
  font-size: 20px;
  margin: 10px;
`;

const MedicineContainer = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const AddMedication = styled.button`
  margin: 10px;
  height: 150px;
  background-color: rgb(0, 126, 167);
  color: white;
  font-size: 100px;
  border: none;
`;

const MedContainer = styled.div`
  height: 150px;
  border: solid 1px rgb(0, 126, 167);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`;

const MedName = styled.p`
  font-size: 20px;
  font-weight: 700;
`

const MedText = styled.p`
  font-size: 20px;
`

export default MyPage;