import React from 'react';
import { View } from 'react-native';

import ProductList from './src/Screens/ProductInfo';

import imageProduct from './src/Images/Bone_Baseball_Sarja.jpg';

export default function App() {

  return (
    <ProductList
      name='Boné Adidas'
      image={imageProduct}
      description='Boné de Baseball Sarja, masculino.'
      price={299}
    />
  );
}