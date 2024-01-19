"use client"

import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import "./navbar.css"

function Navbar(){

    const {mode , toggle} = useContext(ThemeContext)

    return(
        <nav id='navbar'>
            <div id="logo">
                <h1>Z-SHOP</h1>
            </div>
            <ul>
                <li>
                    <label onClick={toggle}>
                        <input type="checkbox" onClick={toggle}/>
                        <div ></div>
                    </label>
                </li>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/product"}>Products</Link>
                </li>
                <li>
                    <button>Login</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;