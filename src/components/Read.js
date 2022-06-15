import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Read = () => {
	const [APIData, setAPIData] = useState([]);
	useEffect(() => {
		axios
			.get(`https://62a853a9a89585c17711aa83.mockapi.io/api/v1/contacts`)
			.then((response) => {
				response.data.sort((a, b) =>
					a.firstName.localeCompare(b.firstName)
				);
				setAPIData(response.data);
			});
	}, []);

	const setData = (data) => {
		console.log(data);
		localStorage.setItem("id", data.id);
		localStorage.setItem("firstName", data.firstName);
		localStorage.setItem("lastName", data.lastName);
		localStorage.setItem("companyName", data.companyName);
		localStorage.setItem("avatar", data.avatar);
		localStorage.setItem("country", data.address.country);
		localStorage.setItem("strAddress", data.address.strAddress);
		localStorage.setItem("strAddressLn2", data.address.strAddressLn2);
		localStorage.setItem("postcode", data.address.postcode);
		localStorage.setItem("city", data.address.city);
	};

	return (
		<Box
			sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
		>
			<List>
				{APIData.map((data) => {
					return (
						<Fragment key={data.id}>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemAvatar>
										<Avatar
											alt={data.lastName}
											src={data.avatar}
										/>
									</ListItemAvatar>
									<ListItemText
										sx={{ width: "50%" }}
										primary={
											!data.firstName && !data.lastName
												? data.companyName
												: `${data.firstName} ${data.lastName}`
										}
										secondary={
											<Typography
												sx={{
													display: "block",
												}}
												component="span"
												variant="body2"
												color="text.primary"
											>
												{!data.firstName &&
												!data.lastName
													? " "
													: data.companyName}
											</Typography>
										}
									/>
									<ListItemText
										sx={{ width: "50%" }}
										primary={
											data.address.strAddressLn2
												? `${data.address.strAddress}, ${data.address.strAddressLn2}`
												: data.address.strAddress
										}
										secondary={
											<Fragment>
												<Typography
													sx={{
														display: "block",
													}}
													component="span"
													variant="body2"
													color="text.primary"
												>
													{`${data.address.postcode}, ${data.address.city}`}
												</Typography>
												{data.address.country}
											</Fragment>
										}
									/>
								</ListItemButton>
								<Link to="/update" title="Edit contact">
									<IconButton
										color="primary"
										aria-label="edit"
										component="span"
										onClick={() => setData(data)}
									>
										<EditIcon />
									</IconButton>
								</Link>
							</ListItem>
							<Divider />
						</Fragment>
					);
				})}
			</List>
		</Box>
	);
};

export default Read;
