import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Grid from './page/grid.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/home.jsx'
import './index.css'
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/Home',
		element: <Home />,
	},
	{
		path: '/grid',
		element: <Grid />,
	},
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
