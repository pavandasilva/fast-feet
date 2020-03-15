import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ status }) =>
    status === 'PENDING'
      ? '#f0f0df'
      : status === 'WITHDRAWN'
      ? '#bad2ff'
      : status === 'CONCLUDED'
      ? '#dff0df'
      : status === 'DELIVERED'
      ? '#dff0df'
      : '#fab0b0'};

  width: 110px;
  height: 25px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ status }) =>
    status === 'PENDING'
      ? '#c1bc35;'
      : status === 'WITHDRAWN'
      ? '#4d85ee'
      : status === 'CONCLUDED'
      ? '#dff0df'
      : status === 'DELIVERED'
      ? '#2ca42b'
      : '#de3b3b'};

  font-size: 14px;
  font-weight: 700;
`;

export const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${({ status }) =>
    status === 'PENDING'
      ? '#c1bc35;'
      : status === 'WITHDRAWN'
      ? '#4d85ee'
      : status === 'CONCLUDED'
      ? '#dff0df'
      : status === 'DELIVERED'
      ? '#2ca42b'
      : '#de3b3b'};
`;
