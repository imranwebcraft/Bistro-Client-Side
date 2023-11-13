import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Context/AuthProvider.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<AuthProvider>
					<RouterProvider router={router}></RouterProvider>
					<Toaster></Toaster>
				</AuthProvider>
			</HelmetProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
