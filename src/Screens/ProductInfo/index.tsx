import React from 'react';

import { Container, Name, Image, Description, Price } from './styles';

interface TypesProps {
  name: string;
  image: File;
  description: string;
  price: number;
}

const ProductInfo: React.FC<TypesProps> = ({ name, image, description, price }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Image source={image} />
      <Description>{description}</Description>
      <Price>{`R$${price},00`}</Price>
    </Container>
  );
}

export default ProductInfo;