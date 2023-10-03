import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "@env";
import {
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	FlatList,
	Image,
	View,
} from "react-native";

const BookSearch = () => {
	const key = API_KEY;
	const [resultData, setResultData] = useState([]);
	const [query, setQuery] = useState("");

	const fetchData = async () => {
		try {
			const result = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`
			);
			setResultData(result.data.items);
		} catch (err) {
			console.log("No Response from Google");
			console.log(err);
			setResultData([]);
		}
	};

	return (
		<>
			<Text style={styles.textLabel}>Search for books</Text>
			<TextInput
				style={styles.textInput}
				value={query}
				onChangeText={(text) => {
					setQuery(text);
				}}
			/>
			<Pressable
				style={styles.button}
				title="Search"
				onPress={() => {
					fetchData();
				}}
			>
				<Text style={styles.buttonText}>Search</Text>
			</Pressable>
			{resultData.length !== 0 ? (
				<>
					<FlatList
						data={resultData}
						renderItem={({ item }) => (
							<View style={styles.entry}>
								{item.volumeInfo.imageLinks !== undefined ? (
									<Image
										style={styles.thumbnail}
										source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
									/>
								) : null}
								<Text style={styles.detail}>{item.volumeInfo.title}</Text>
							</View>
						)}
					></FlatList>
				</>
			) : null}
		</>
	);
};

const styles = StyleSheet.create({
	textInput: {
		fontSize: 20,
		padding: 10,
		margin: 5,
		borderWidth: 1,
		color: "purple",
	},
	textLabel: {
		fontSize: 18,
		paddingLeft: 10,
		marginTop: 10,
		color: "purple",
		fontWeight: "bold",
		alignSelf: "center",
	},
	thumbnail: {
		width: 100,
		height: 150,
		margin: 3,
	},
	button: {
		alignItems: "center",
		backgroundColor: "purple",
		padding: 15,
		borderRadius: 5,
		width: 200,
		alignSelf: "center",
		marginTop: 15,
		marginBottom: 15,
	},
	buttonText: {
		color: "#61dafb",
		fontWeight: "bold",
		fontSize: 25,
	},
	detail: {
		color: "purple",
		fontWeight: "bold",
		padding: 5,
		fontSize: 15,
	},
	entry: {
		marginTop: 5,
		padding: 15,
		borderWidth: 2,
		backgroundColor: "#61dafb",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 10,
		borderColor: "purple",
	},
});

export default BookSearch;
