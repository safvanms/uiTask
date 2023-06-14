import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';
import EmployeeList from './components/EmployeeList/EmployeeList';
import ErrorPage from './components/ErrorPage';

export default function App() {
	return (
		<React.StrictMode>
			<div className="App">
				<div className='container'>
					<BrowserRouter>
						<Routes>
							<Route index path='/' element={<EmployeeDetails />} />
							<Route index path='/employee/:id' element={<EmployeeList />} />
							<Route index path='/*' element={<ErrorPage />} />
						</Routes>
					</BrowserRouter>
				</div>
			</div >
		</React.StrictMode>
	);
}


