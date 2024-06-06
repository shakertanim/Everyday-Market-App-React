import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductComponents from "./Components/ProductComponents";
import Header from "./Components/Header.tsx";
import { Outlet } from "react-router-dom";
import RegisterComponents from "./Components/RegisterComponents.tsx";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [{
            path: '/product',
            element: <ProductComponents />
        },
            {
                path: '/register',
                element: <RegisterComponents />
            },
            {
                path: '/',
                element: <App />
            }]
    }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
