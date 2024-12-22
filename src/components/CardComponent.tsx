import React from "react";
import { Text, Image, View, Pressable, StyleSheet } from "react-native";

const CardComponent = () => {
	return (
		<View style={stylesss.card}>
			<Image
				source={require("../../assets/harvey9.jpg")}
				style={stylesss.imagesss}
			/>
			<Text style={stylesss.bigText}>Harvey Spector</Text>
			<Text style={stylesss.smallText}>
				He is Harvey and the OG Lawyer
			</Text>
			<Pressable
				onPress={() => alert("I'm pressed !")}
				style={stylesss.buttonns}
			>
				<Text style={{ color: "white", fontSize: 16 }}>Press Me</Text>
			</Pressable>
		</View>
	);
};

const stylesss = StyleSheet.create({
	card: {
		backgroundColor: "teal",
		paddingVertical: 50,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 20,
		marginHorizontal: 30,
		boxShadow: "20px 20px  100px #888888",
	},
	imagesss: {
		borderRadius: 50,
		width: 100,
		height: 100,
	},
	bigText: {
		fontSize: 20,
		marginTop: 10,
		textAlign: "center",
		fontWeight: "500",
		color: "white",
	},
	smallText: {
		fontSize: 12,
		marginBottom: 10,
		textAlign: "center",
		color: "white",
	},
	buttonns: {
		backgroundColor: "#007bff",
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
	},
});

export default CardComponent;
