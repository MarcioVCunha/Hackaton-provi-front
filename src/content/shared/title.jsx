import styled from "styled-components";

const Title = (props) => {
  const { text } = props;

  return (
    <Text>{text}</Text>
  )
}

const Text = styled.p`
  width: 80%;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

export default Title;