import styles from "./App.module.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Book from "@mui/icons-material/MenuBook";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function App() {
	return (
		<Router>
			<CssBaseline />
			<Container fixed>
				<Box className={styles.App}>
					<div className={styles.Header}>
						<h2>Contacts App</h2>
						<div>
							<Tooltip title="All Contacts">
								<IconButton>
									<Fab
										color="secondary"
										aria-label="Add new contact"
										href="./"
									>
										<Book />
									</Fab>
								</IconButton>
							</Tooltip>
							<Tooltip title="Add New Contact">
								<IconButton>
									<Fab
										color="primary"
										aria-label="Add new contact"
										href="./create"
									>
										<AddIcon />
									</Fab>
								</IconButton>
							</Tooltip>
						</div>
					</div>

					<Routes>
						<Route path="/*" element={<Read />} />
						<Route exact path="/create" element={<Create />} />
						<Route exact path="/read" element={<Read />} />
						<Route exact path="/update" element={<Update />} />
					</Routes>
				</Box>
			</Container>
		</Router>
	);
}

export default App;
