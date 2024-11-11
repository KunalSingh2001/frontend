import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';

function App() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={<Home />} /> Home component */}
				<Route path="/register" element={<Register />} /> {/* Register component */}
			</Routes>
		</Router>
	);
}

export default App;
