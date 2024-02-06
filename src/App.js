import React from 'react'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import Portofolio from './Portofolio/Portofolio'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'


export default function App() {
  let Routes = createBrowserRouter([
    { path: '', element: <Layout/>,children:[
      {path:'',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portofolio',element:<Portofolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<NotFound/>},
    ] }
  ])
  return (
    <RouterProvider router={Routes}/>
  )
}
