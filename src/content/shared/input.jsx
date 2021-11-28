import styled from 'styled-components';

const Input = (props) => {
  const { placeholder, setFunction } = props;

  return (
    <TextInput placeholder={placeholder} onChange={(e) => setFunction(e.target.value)} />
  )
}

const TextInput = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 10px;
  border: solid 1px black;
  padding: 0 10px;
  font-size: 20px;
`;

export default Input;