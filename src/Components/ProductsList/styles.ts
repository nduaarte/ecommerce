import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(FlatList)`
  margin: 10px;
`;

export const Product = styled.TouchableOpacity`
  margin: 0 5px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  width: 160px;
  height: 160px;
  border-radius: 3px;
`;

export const ProductName = styled.Text`
  margin: 5px 0 0;
  color: #6e6e6e;
  font-size: 12px;
`;

export const ProductPrice = styled.Text`
  color: #72a148;
  font-size: 15px;
  font-weight: bold;
`;

