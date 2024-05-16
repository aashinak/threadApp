import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { Auth, ErrorPage, LoginComponent, SignupComponent } from './components/index.js'
import store from './store/store.js'
import HomePage from './pages/HomePage.jsx'
import Search from './pages/Search.jsx'
import Profile from './pages/Profile.jsx'
const router = createBrowserRouter([
    {
      path : "/",
      element : <App/>,
      errorElement : <ErrorPage/>,
      children : [
        {
          path : "/",
          element : <Auth authentication><HomePage/></Auth>
        },

        {
          path : "/login",
          element : <Auth authentication={false}><LoginComponent/></Auth>
        },
        {
          path : "/signup",
          element : <Auth authentication={false}><SignupComponent/></Auth>
        },
        {
          path : "/search",
          element : <Auth authentication><Search/></Auth>
        },
        {
          path : "/profile/:profilename",
          element : <Auth authentication><Profile/></Auth>
        },

      ]
    }
      
    ]
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
