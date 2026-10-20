import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Error } from './pages/Error'
import { Login } from './pages/Login'

export const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/',
        element: <Navigate to="/login" replace/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '*',
        element: <Error/>
    },
])