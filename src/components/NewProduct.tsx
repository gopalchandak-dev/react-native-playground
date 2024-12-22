import React, { ReactNode } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { NewProductProps } from "../utils/types";

const NewProduct: React.FC<NewProductProps> = ({ product }) => {
	return (
		<View>
			<FlatList
				keyExtractor={(item, index) => index.toString()}
				data={product}
				renderItem={({ item }) => (
					<View style={styles.card}>
						<Image
							source={{ uri: `${item.productImage}` }}
							style={styles.imagee}
						/>
						<View style={styles.prod}>
							<Text style={styles.pName}>{item.productName}</Text>
							<Text style={styles.pPrice}>
								Price : ${item.productPrice}
							</Text>
							<Text style={styles.isFea}>{`${
								item.isFeatured ? "Featured" : "Not Featued"
							}`}</Text>
							<Text style={styles.pDes}>
								{item.productDescription}
							</Text>
						</View>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		flex: 1,
		flexDirection: "row",
		margin: 10,
	},
	imagee: { width: 150, height: 150, borderRadius: 15, overflow: "hidden" },
	prod: {
		margin: 10,
	},
	pName: { fontSize: 24, fontWeight: "semibold" },
	pPrice: { fontWeight: "400", fontSize: 15 },
	isFea: {
		backgroundColor: "#4C585B",
		color: "white",
		paddingVertical: 8,
		paddingHorizontal: 20,
		borderRadius: 6,
		textAlign: "auto",
		alignSelf: "baseline",
		opacity: 0.8,
	},
	pDes: { fontWeight: "300", fontSize: 12 },
});

export default NewProduct;
