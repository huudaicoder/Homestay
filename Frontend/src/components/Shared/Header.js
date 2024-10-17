import React from "react"
import logo from '../../public/logo.svg'
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="w-full border-b-2">
            <div className="item-centers mx-auto py-2 max-w-9/10">
                <Link to="/homepage">
                <img className="h-12 w-auto sm:h-16" src={logo} alt="Logo"/>
                </Link>
            </div>
        </div>
    );
}

export default Header