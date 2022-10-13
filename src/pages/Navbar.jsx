import React from 'react'
import { Link } from '@mui/icons-material'
const Navbar = () => {
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
            <div className='container d_flex'>
                <span className='fa-solid fa-border-all'></span>
                <h4>Catergories <i className='fa fa-chevron-down'></i></h4>
            </div>
            <div className='navlink'>
                <ul className='nav'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                </ul>
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
