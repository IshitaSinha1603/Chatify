import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Chatify</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/18201340/pexels-photo-18201340/free-photo-of-redhead-woman-looking-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>John</span>
                <button onClick={()=>signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;