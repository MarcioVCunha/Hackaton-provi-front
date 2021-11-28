import styled from "styled-components";
import doctors from '../../assets/doctors.png';

const Side = () => {
  return (
    <PhotoDiv>
      <Photo src={doctors} alt='Doctors' />
      <p>
      Vamos juntos proporcionar saúde, segurança e inclusão para pessoas trans que sofrem por falta de um serviço essencial.
Aqui na ConectTrans você encontra os melhores profissionais da área da saúde para te ajudar nesse momento de transição.      </p>
    </PhotoDiv>
  );
};

const PhotoDiv = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media(max-width: 600px){
    display: none
  }

  @media(max-width: 1200px) and (min-width: 601px){
    display: flex;
  }

  p{
    width: 80%;
    font-size: 20px;
    text-align: justify;
  }

`;

const Photo = styled.img`
  width: 80%;
`;

export default Side;