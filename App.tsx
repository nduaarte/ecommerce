import React from 'react';
import { View } from 'react-native';

import ProductList from './src/Components/ProductsList';
import DATA from './src/data';

export default function App() {

  return (
    <View>
      <ProductList
        products={DATA.hat}
      />
    </View>
  );
}