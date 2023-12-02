

function Navbar({ currentPage, handlePageChange }) {
  return (
    <>
    
    <ul className="nav nav-tabs">
      <li className="nav-items">
        <a href="#home"
         onClick={()=>handlePageChange('Home')}
         className={currentPage==='Home' ? 'nav-link active': 'nav-link'}
         > Home</a>
      </li>
    </ul>
    <ul className="nav nav-tabs">
    <li className="nav-items">
      <a href="#contact"
       onClick={()=>handlePageChange('Contact')}
       className={currentPage==='Contact' ? 'nav-link active': 'nav-link'}
       > Contact</a>
    </li>
  </ul>
  <ul className="nav nav-tabs">
  <li className="nav-items">
    <a href="#blog"
     onClick={()=>handlePageChange('Blog')}
     className={currentPage==='Blog' ? 'nav-link active': 'nav-link'}
     > Blog</a>
  </li>
</ul>
<ul className="nav nav-tabs">
  <li className="nav-items">
    <a href="#about"
     onClick={()=>handlePageChange('About')}
     className={currentPage==='About' ? 'nav-link active': 'nav-link'}
     > About</a>
  </li>
</ul>
</>
  )
}

export default Navbar