import styles from "./App.module.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
	return (
		<Router>
			<CssBaseline />
			<Container fixed>
				<div className={styles.App}>
					<div className={styles.Header}>
						<h2>Contacts App</h2>
						<Fab color="primary" aria-label="add" href="./create">
							<AddIcon />
						</Fab>
					</div>

					<Routes>
						<Route path='/*' element={<Read />} />
						<Route exact path="/create" element={<Create />} />
						<Route exact path="/read" element={<Read />} />
						<Route exact path="/update" element={<Update />} />
					</Routes>
				</div>
			</Container>
		</Router>
	);
}

export default App;
