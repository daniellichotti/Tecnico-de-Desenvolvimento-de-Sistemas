import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes'

export function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
