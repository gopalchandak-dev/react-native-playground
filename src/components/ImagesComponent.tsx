import { View, Text, Image } from "react-native";
import React from "react";

const ImagesComponent = () => {
	return (
		<View>
			<Text>This is an ImagesComponent</Text>
			<Image
				source={require("../../assets/harvey9.jpg")}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: "https://reactjs.org/logo-og.png" }}
				style={{ width: 150, height: 150 }}
			/>
		</View>
	);
};

export default ImagesComponent;
