import React from "react";
import { View } from "react-native";
import { products } from "../utils/product";
import NewProduct from "./NewProduct";
import { NewProductProps } from "../utils/types";

const NewPraentProduct: React.FC = () => {
	return (
		<View>
			<NewProduct product={products} />
		</View>
	);
};

export default NewPraentProduct;
