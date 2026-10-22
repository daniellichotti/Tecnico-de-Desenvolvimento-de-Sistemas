import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Error } from './pages/Error'
import { Login } from './pages/Login'
import { User } from './pages/User'
import { PrivateRoute } from './components/PrivateRoute'
import { CreateUser } from './pages/CreateUser'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute/>,
        children: [
            { path: '/home', element: <Home/> },
            { path: '/users/:id', element: <User/> },
            { path: '/create-user', element: <CreateUser/> },
        ]
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