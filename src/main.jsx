import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Admin_Layout from './Admin_Layout.jsx'
import ConferenceCreation from './components/ConferenceCreation.jsx'
import ConferenceSelection from './components/ConferenceSelection.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Admin_Layout/>,
//     children:[
//       {
//         path:'create-conference',
//         element:<ConferenceCreation/>
//       },
//       {
//         path:'create-selection',
//         element:<ConferenceSelection/>
//       }
//     ]
//   },{
//     path:'/create-conference',
//     element:<ConferenceCreation/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
