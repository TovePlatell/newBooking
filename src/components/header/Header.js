//import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const isLoggedIn = localStorage.getItem('uid') || false
    return(
        <div style={{height: '40px' , display: 'flex', justifyContent:'space-between', alignItems: 'center', borderBottom: '1px solid lightgray'}}>
            <div style={{width: '20%'}}>
                <Link to='/'>
                    Logo
                </Link>
            </div>
            <div style={{width: '40%', display: 'flex', justifyContent: 'space-around'}}>
                <Link to='/offices' style={{textDecoration: 'none', color: 'black'}}>
                    Offices
                </Link>
                <Link to='/contact' style={{textDecoration: 'none', color: 'black'}}>
                    Contact
                </Link>
                <Link to='/account' style={{textDecoration: 'none', color: 'black'}}>
                    Account
                </Link>
                <Link to='/booking' style={{textDecoration: 'none', color: 'black'}}>
                    Bookings
                </Link>
                {isLoggedIn && (
                <Link onClick={() => localStorage.removeItem('uid')} to='/' style={{textDecoration: 'none', color: 'black'}}>
                    Log out
                </Link>

                )}
            </div>
        </div>
    )
}

export default Header