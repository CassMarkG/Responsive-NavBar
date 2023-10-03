import { useEffect, useState } from 'react'
import menu from "../assets/menu_FILL0_wght400_GRAD0_opsz24.svg";
import '../App.css'

function Navbar(){
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [screeWidth,setScreenWidth] = useState(window.innerWidth);

    //toggle menu change
    const updateMenu = () => {
      setIsMenuClicked(!isMenuClicked);
    }

    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }

      window.addEventListener('resize', changeWidth)

      return () => {
        window.removeEventListener('resize', changeWidth)
      }
    },[])

    return(
        <>
        <div className="container">
        <div className="logo">
          <h1>Logo</h1>
        </div>
            {(isMenuClicked || screeWidth > 810) && (
              <ul className="items" >
              <li><a className='active' href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Discover</a></li>
            </ul> 
            )}
      <div className="menu" >
        {/* <button className='check' >
        </button> */}
          <img src={menu} alt="" onClick={updateMenu}/>
      </div>
      </div>  
        </>
    )
}

export default Navbar;