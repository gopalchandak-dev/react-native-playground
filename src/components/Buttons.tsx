import { View, Text, Pressable } from "react-native";
import React from "react";

const Buttons = () => {
	return (
		<View>
			<Pressable onPress={() => alert("Pressed")}>
				<Text style={{ color: "black" }}>This is a button</Text>
			</Pressable>
			<Pressable onPressIn={() => alert("Pressed In")}>
				<Text style={{ color: "blue" }}>This is a button</Text>
			</Pressable>
			<Pressable onPressOut={() => alert("Pressed Out ")}>
				<Text style={{ color: "green" }}>This is a button</Text>
			</Pressable>
			<Pressable onLongPress={() => alert("Long Pressed")}>
				<Text style={{ color: "black" }}>This is a button</Text>
			</Pressable>
		</View>
	);
};

export default Buttons;
