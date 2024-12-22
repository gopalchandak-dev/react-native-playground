import React from "react";
import { Text, Image, View, SafeAreaView } from "react-native";

const Car = () => {
	const car = {
		price: "$200,000",
		imagee: "https://imgs.search.brave.com/mhLtUIVzI3mIrszB1cbVZvbZR3EJQLunyWgrB6qUjWU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZlL2Uz/L2JkL2ZlZTNiZGIy/MzAwZGE2NWY1NDgy/NDE1ZjMwYTg2ZmRk/LmpwZw",
		name: "NuNu 700",
		rating: "6.9",
		description: "This is a NuNu Car!",
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					flex: 1,
					justifyContent: "flex-start",
					alignItems: "center",
					padding: 20,
					backgroundColor: "", // Add background color to ensure visibility
				}}
			>
				<Text style={{ fontSize: 16, marginBottom: 10, color: "#000" }}>
					{car.price}
				</Text>
				<Image
					source={{ uri: car.imagee }}
					style={{ width: 200, height: 200, marginBottom: 10 }}
				/>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 5,
						color: "#000",
					}}
				>
					{car.name}
				</Text>
				<Text style={{ fontSize: 16, marginBottom: 5, color: "#000" }}>
					Rating: {car.rating}
				</Text>
				<Text
					style={{
						fontSize: 14,
						textAlign: "center",
						marginTop: 10,
						color: "#000", // Make sure the text color is visible
					}}
				>
					{car.description}
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default Car;
