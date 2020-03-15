import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ elipseColor }) => elipseColor};
  color: ${({ textColor }) => textColor};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    object-fit: cover;
  }
`;
