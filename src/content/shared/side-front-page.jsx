import styled from "styled-components";
import doctors from '../../assets/doctors.png';

const Side = () => {
  return (
    <PhotoDiv>
      <Photo src={doctors} alt='Doctors' />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor orci et commodo consectetur. Quisque at posuere metus. Donec sed mi sit amet est blandit malesuada ac mattis enim. Phasellus vitae odio ornare, eleifend justo a, porta quam. Cras scelerisque dui nec lorem rutrum porttitor. Vivamus fringilla nulla nec ante venenatis luctus. Donec in tincidunt neque, a varius sem.
      </p>
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