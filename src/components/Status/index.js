import React from 'react';

import { Container, Circle } from './styles';

export default function Status({ status }) {
  let translatedStatus;

  switch (status) {
    case 'CANCELED':
      translatedStatus = 'CANCELADO';
      break;
    case 'PENDING':
      translatedStatus = 'PENDENTE';
      break;
    case 'WITHDRAWN':
      translatedStatus = 'RETIRADA';
      break;
    case 'DELIVERED':
      translatedStatus = 'ENTREGUE';
      break;
    default:
  }

  return (
    <Container status={status}>
      <Circle status={status} />
      {translatedStatus}
    </Container>
  );
}
