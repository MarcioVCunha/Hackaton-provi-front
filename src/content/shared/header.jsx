import { useEffect, useState } from "react";
import styled from "styled-components";
import getConfig from "../../service/getConfig.js";
import getUserName from "../../service/service.getUserName.js";
import icon from '../../assets/icon.svg'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const config = getConfig();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const promisse = (getUserName(config));
    promisse
      .then((res) => setUsername(res.data))
      .catch(() => {
        alert('Seu token expirou');
        navigate('/');
      });
  }, [])

  return (
    <TopBar>
      <SearchBar placeholder='Buscar Médico' />
      <UserDiv>
        <Name onClick={(() => navigate('/my-page'))} >{username}</Name>
        <Icon onClick={(() => navigate('/my-page'))} src={icon} alt='Icon' />
      </UserDiv>
    </TopBar>
  );
};

const TopBar = styled.header`
  width: 100vw;
  height: 70px;
  background-color: rgb(0, 191, 166);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchBar = styled.input`
  width: 30%;
  margin-right: calc(15%);
  border: none;
  height: 50px;
  padding: 10px;
  font-size: 26px;
  border-radius: 10px;
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`

const Name = styled.p`
  font-size: 26px;
  color: white;
  cursor: pointer;
`

const Icon = styled.img`
  height: 50px;
  cursor: pointer;
`

export default Header;