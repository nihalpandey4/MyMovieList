import React,{useState,useEffect} from 'react'
import NMDB_Logo from "../NMDB_Logo.png"
import Avatar from "../Avatar.png"
import "./Navbar.css"

const Navbar = () => {

    const [show,handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>150){
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        })
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[]);

    return (
        <div className={`navbar ${show && "nav_black"}`}>
            <img className = "nav_logo" src ={NMDB_Logo} alt ="NMDB_Logo" />
            <img className = "nav_avatar" src ={Avatar} alt ="NMDB_avatar" />
        </div>
    )
}

export default Navbar;