import React from 'react';
import { View } from 'react-native';

import ProductList from './src/Components/ProductsList';
import Title from './src/Components/Title';

import DATA from './src/data';
import adidasLogo from './src/Images/AdidasLogo.svg';

export default function App() {

  return (
    <View>
      <Title
        logoImage={adidasLogo}
        name='Bonés'
      />
      <ProductList
        products={DATA.hat}
      />
    </View>
  );
}