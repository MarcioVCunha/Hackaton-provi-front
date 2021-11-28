import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getConfig from '../../service/getConfig';
import getHints from '../../service/service.getHints';

const Hints = () => {
  const [hints, setHints] = useState([]);
  const config = getConfig();
  const navigate = useNavigate();

  useEffect(() => {
    const promisse = getHints(config);
    promisse
      .then((res) => {
        setHints(res.data);
        return;
      })
      .catch((error) => {
        alert('Tivemos um erro no servidor');
        navigate('/');
      })
  }, []);

  return (
    <HintsContainer>
      {hints.map((hint, key) => {
        return (
          <HintContainer key={key}>
            <Name>{hint.name}</Name>
            <HintText>{hint.text}</HintText>
          </HintContainer>
        )
      })}
    </HintsContainer>
  );
};

const HintsContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`;

const HintContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: justify;
  padding: 20px;
`;

const Name = styled.p`
  color: rgb(0, 52, 89);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const HintText = styled.p`
  font-size: 18px;
`;

export default Hints;