import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import './Themes/GlobalStyle.css';
import Home from './Pages/Home';
import { AuthContext } from './Config/auth';
import Konfirmasi from './Pages/Konfirmasi';
import DataBuku from './Pages/DataBuku';
import { PrivateRoute } from './Config/PrivateRoute';

function App() {
	const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));

	const SetAndGetToken = token => {
		localStorage.setItem('token', JSON.stringify(token));
		setToken(token);
	};

	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route path='konfirmasi' element={<Konfirmasi />} />
				<Route path='data-buku' element={<DataBuku />} />
			</Route>
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
		</Routes>
	);
}

export default App;
