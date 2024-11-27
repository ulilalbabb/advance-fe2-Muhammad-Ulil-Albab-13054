import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import Opening from './pages/opening'
import HomePage from './pages/homepage'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import AdminPage from './pages/admin'
// import UseCreate from './components/Elements/features/useCreate'
// import UseEdit from './components/Elements/features/useEdit'
import { Provider } from 'react-redux'
import store from './redux/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Opening />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/homepage',
    element: <HomePage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  // {
  //   path: '/create',
  //   element: <UseCreate/>
  // },
  // {
  //   path: '/edit/:id',
  //   element: <UseEdit/>
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
    </Provider>
  </StrictMode>
)
