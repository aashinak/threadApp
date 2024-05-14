import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from './components/ErrorPage.jsx'
import LoginComponent from './components/LoginComponent.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.js'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : "/contacts/:contactId",
        element : <div><h1 className='font-bold'>Contact</h1></div>
      },
    ]
  },
  {
    path : "/login",
    element : <LoginComponent/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
