import React from 'react';
import { NavbarList } from './NavbarList';
import './navbar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Navbar(props) {
    return (
        <div className="navbar">
            <ul className='navbar-left'>
                {
                    NavbarList.map((item, index) =>
                        < li key={index} >
                            <a href="">
                                <item.icon sx={{ fontSize: '16px', color: "#333", padding: "0 8px", transform: "translateY(2px)" }} />
                                {item.desc}
                            </a>
                        </li>
                    )
                }
            </ul>

            <ul className='navbar-right'>
                <li>
                    <a href="">
                        <AccountCircleIcon
                            sx={{ fontSize: '16px', color: "#333", padding: "0 8px", transform: "translateY(2px)" }}
                        />
                        Profile
                    </a>
                </li>
                <li>
                    <a href="">
                        1972
                        <KeyboardArrowDownIcon
                            sx={{ fontSize: '17px', color: "#333", padding: "0 8px", transform: "translateY(2px)" }} />
                    </a>
                </li>
            </ul>

        </div >
    );
}

export default Navbar;