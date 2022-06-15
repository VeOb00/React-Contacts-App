import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

// import { styled } from "@mui/material/styles";
// import FileUpload from "@mui/icons-material/FileUpload";
// import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [company, setCompany] = useState("");
	const [avatar, setAvatar] = useState("");
	const [country, setCountry] = useState("Austria");
	const [street, setStreet] = useState("");
	const [street2, setStreet2] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [city, setCity] = useState("");

	const [APICountriesData, setApiCountriesData] = useState([]);

	// const Input = styled("input")({
	// 	display: "none",
	// });

	const ContactAPI = {
		firstName: firstName,
		lastName: lastName,
		company: company,
		avatar: avatar,
		companyName: company,
		address: {
			country: country,
			strAddress: street,
			strAddressLn2: street2,
			postcode: zipCode,
			city: city,
		},
	};

	useEffect(() => {
		axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
			setApiCountriesData(response.data);
		});
	}, []);

	const postData = (event) => {
		event.preventDefault();
		if (
			firstName.trim() === "" ||
			lastName.trim() === "" ||
			country.trim() === "" ||
			street.trim() === "" ||
			zipCode.trim() === "" ||
			city.trim() === ""
		) {
			return;
		}

		axios
			.post(
				`https://62a853a9a89585c17711aa83.mockapi.io/api/v1/contacts`,
				ContactAPI
			)
			.then(() => {
				navigate("/read");
			});
	};

	return (
		<Box
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" },
				width: "60%",
			}}
			component="form"
			noValidate
			autoComplete="off"
			onSubmit={postData}
		>
			<div>
				<div>
					<TextField
						required
						id="first-name"
						label="First Name"
						variant="standard"
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
					/>
					<TextField
						required
						id="last-name"
						label="Last Name"
						variant="standard"
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
					/>
					<br />
					<TextField
						id="company-name"
						label="Company"
						variant="standard"
						onChange={(e) => setCompany(e.target.value)}
						value={company}
					/>
					<br />
					<TextField
						id="avatar"
						label="Avatar URL"
						variant="standard"
						onChange={(e) => setAvatar(e.target.value)}
						value={avatar}
					/>
					{/* <label htmlFor="avatar">
						<Input
							accept="image/*"
							id="avatar"
							type="file"
							onChange={(e) => setAvatar(e.target.value)}
						/>
						<IconButton
							color="primary"
							aria-label="upload picture"
							component="span"
						>
							<FileUpload  />
						</IconButton>
						<div>{avatar}</div>
					</label> */}
				</div>
				<br />
				<div>
					<TextField
						required
						id="country"
						select
						label="Select"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
						helperText="Please select country"
						variant="standard"
					>
						{APICountriesData.map((option) => (
							<MenuItem
								key={option.cca2}
								value={option.name.common}
							>
								{option.name.common}
							</MenuItem>
						))}
					</TextField>
					<br />
					<TextField
						required
						id="street"
						label="Street Address"
						variant="standard"
						onChange={(e) => setStreet(e.target.value)}
						value={street}
					/>
					<TextField
						id="street-2"
						label="Street Address Line 2"
						variant="standard"
						onChange={(e) => setStreet2(e.target.value)}
						value={street2}
					/>
					<br />
					<TextField
						required
						id="zip-code"
						label="Postal Code"
						variant="standard"
						onChange={(e) => setZipCode(e.target.value)}
						value={zipCode}
					/>
					<TextField
						required
						id="city"
						label="City"
						variant="standard"
						onChange={(e) => setCity(e.target.value)}
						value={city}
					/>
				</div>
			</div>
			<div>
				<Button type="submit" variant="contained" disableElevation>
					Add Contact
				</Button>
				<Button
					type="button"
					variant="outlined"
					disableElevation
					href="/read"
				>
					Cancel
				</Button>
			</div>
		</Box>
	);
};

export default Create;
