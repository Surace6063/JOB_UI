import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobCard from './components/JobCard'
import SinglePage from './pages/SinglePage'

const App = () => {
  return (
   <>
   <Navbar />
   <Home />
   {/* <Register /> */}
   <JobCard />
   <SinglePage />
   </>
  )
}

export default App