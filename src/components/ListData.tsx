import { View, Text, FlatList } from "react-native";
import React from "react";

const ListData = () => {
	const abc = ["a", "b", "c", "d", "e"];
	return (
		<View>
			<FlatList
				data={abc}
				keyExtractor={(item) => item}
				renderItem={({ item }) => <Text>item - {item}</Text>}
			/>
		</View>
	);
};

export default ListData;
