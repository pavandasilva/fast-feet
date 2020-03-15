import React from 'react';

import { Container } from './styles';

const LazyPhoto = function LazyPhoto({ abreviation, photoUrl }) {
  const colors = [
    {
      elipse: '#fcf4ee',
      text: '#cb946c',
    },
    {
      elipse: '#f4effc',
      text: '#a28fd0',
    },

    {
      elipse: '#ffeef1',
      text: '#cc7584',
    },
    {
      elipse: '#ebfbfa',
      text: '#83cec9',
    },
    {
      elipse: '#f4f9ef',
      text: ' #a8d080',
    },
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];

  return (
    <Container elipseColor={color.elipse} textColor={color.text}>
      {abreviation}
      <img src={photoUrl} alt="" />
    </Container>
  );
};

export default LazyPhoto;
