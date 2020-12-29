import React from 'react';

import { Container, Product, ProductImage, ProductName, ProductPrice } from './styles';

interface PropsTypes {
	products: [
		{
			id: number;
			name: string;
			price: number;
			image: File;
		}
	]
}

const ProductsList: React.FC<PropsTypes> = ({ products }) => {
	return (
		<Container
			horizontal
			data={products}
			renderItem={({ item }) => (
				<Product key={item.id} activeOpacity={0.7}>
					<ProductImage source={item.image} />
					<ProductName>{item.name}</ProductName>
					<ProductPrice>{`R$${item.price},00`}</ProductPrice>
				</Product>
			)}
		/>
	);
}

export default ProductsList;