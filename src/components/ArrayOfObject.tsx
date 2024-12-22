import { View, Text, FlatList } from "react-native";
import React from "react";

const ArrayOfObject = () => {
	const arrObject = [
		{ id: 1, name: "Harvey" },
		{ id: 2, name: "Ross" },
		{ id: 3, name: "Jos" },
		{ id: 4, name: "Eve" },
		{ id: 5, name: "Adam" },
	];
	return (
		<View>
			<Text>Array of object</Text>
			<FlatList
				keyExtractor={(item) => item.id.toString()}
				data={arrObject}
				renderItem={({ item }) => (
					<Text>
						Name : {item.name} ++ Id: {item.id}
					</Text>
				)}
			/>
		</View>
	);
};

export default ArrayOfObject;
