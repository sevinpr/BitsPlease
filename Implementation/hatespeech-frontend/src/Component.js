import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";

const api = axios.create({
	baseURL: "http://127.0.0.1:5000", // replace with your base URL
});

const MyComponent = () => {
	const [inputText, setInputText] = useState("");
	const [responseText, setResponseText] = useState("");

	const handleSubmit = async () => {
		try {
			const response = await api.post("/api/input", { text: inputText });
			setResponseText(response.data[0]);
		} catch (error) {
			console.error(error);
		}
	};

	const handleInputChange = (event) => {
		setInputText(event.target.value);
	};

	useEffect(() => {
		if (responseText && responseText === "Hate Speech") {
			document.body.style.backgroundColor = "red";
		} else if (responseText && responseText === "Non-Hate Speech") {
			document.body.style.backgroundColor = "green";
		} else {
			document.body.style.backgroundColor = "white";
		}
	}, [responseText]);

	return (
		<div>
			<TextField
				id="outlined-basic"
				label="Enter Text"
				variant="outlined"
				onChange={handleInputChange}
			/>
			<Button onClick={handleSubmit} variant="contained" color="primary">
				Submit
			</Button>
		</div>
	);
};

export default MyComponent;
