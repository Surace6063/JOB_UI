import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobCard from './components/JobCard'
import SinglePage from './pages/SinglePage'
import JobForm from './components/JobForm'
import Register from "./pages/Register"

const App = () => {
  return (
   <>
   <Navbar />
   {/* <Home /> */}
   <Register />
   {/* <JobCard />
   <SinglePage />
   <JobForm /> */}
   </>
  )
}

export default App