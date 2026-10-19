import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Error } from './pages/Error'

export const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '*',
        element: <Error/>
    },
])