import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7d40e7;
  font-size: 14px;
  font-weight: 700;
  height: 100%;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  padding: 60px 30px;
  flex-direction: column;
  width: 360px;
  height: 425px;
  border-radius: 4px;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));
  background-color: #ffffff;
  color: #444444;

  img {
    width: 80%;
    align-self: center;
  }
  form {
    margin-top: 30px;
  }
  span {
    font-size: 14px;
    color: #444444;
    font-weight: 700;
    margin-bottom: 50px;
  }
  input {
    width: 100%;
    height: 45px;
    border-radius: 4px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    margin-bottom: 20px;
    margin-top: 5px;
    padding: 0px 10px;
  }

  button {
    width: 300px;
    height: 45px;
    border-radius: 4px;
    background-color: #7d40e7;
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
    border: none;
  }
`;
