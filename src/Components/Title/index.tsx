import React from 'react';

import { Container, Logo, Name } from './styles';

interface PropsTypes {
  name: string;
}

const Title: React.FC<PropsTypes> = ({ name }) => {
  return (
    <Container>
      <Name>{name}</Name>
    </Container>
  );
}

export default Title;