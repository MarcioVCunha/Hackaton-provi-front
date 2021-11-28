import styled from "styled-components";
import logo from "../../assets/logo.png";
const Title = (props) => {
  const { text } = props;

  return (
    <Logo src={logo}/>
  )
}

const Logo = styled.img`
  width: 80%;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

export default Title;