import { useState } from "react"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Navbar from "./Navbar"


function PortofolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage=()=>{
    if( currentPage=== 'Home'){
      return (
        <Home/>
      )
    }
    if( currentPage=== 'About'){
      return (
        <About/>
      )
    }
    if( currentPage=== 'Contact'){
      return (
        <Contact/>
      )
    }
    if( currentPage=== 'About'){
      return (
        <About/>
      )
    }else {
      return (
        <Blog/>
      )
    }

  }
  const handlePageChange =(page)=>setCurrentPage(page)
  return (
    <>
   
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    <main className="mx-3">{renderPage()}</main>
    </>
  )
}

export default PortofolioContainer