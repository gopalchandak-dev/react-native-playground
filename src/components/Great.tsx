import { Text, View } from "react-native";

const Great = () => {
	const me = {
		name: "Harvey",
		lastName: "Spector",
	};
	return (
		<View>
			<Text>
				King of Lawyer! {me.name} {me.lastName}
			</Text>
		</View>
	);
};

export default Great;
