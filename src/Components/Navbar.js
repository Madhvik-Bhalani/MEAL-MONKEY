import React, { useContext } from 'react'
import logo from '../Assets/logo.png'
import refcontext from '../Context/Refcontext'
import './Navbar.css'
import { Link } from "react-router-dom";
import reloadcontext from '../Context/Reloadcontext';
import { useNavigate } from 'react-router-dom';


function Navbar() {


    // modal trigger reference
    const refcon = useContext(refcontext)
    const reloadcon = useContext(reloadcontext)
    // eslint-disable-next-line
    let { reload, setreload } = reloadcon
    const { refin, refup } = refcon
    const signinHandler = (e) => {
        e.preventDefault();
        refin.current.click();

    }
    const signupHandler = (e) => {
        e.preventDefault();
        refup.current.click();

    }

    let navigate = useNavigate()
    const logoutHandler = () => {
        setreload({})//for rerender nav
        localStorage.removeItem("token");
        navigate("/")
    }

  
   
    
   
    

    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ height: "90px", backgroundColor: "rgb(250 255 255)" }}>
                <div className="container-fluid">
                    <img src={logo} className="logoimg" alt="Meal Monkey.." />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-center">
                                <Link className="nav-link active" aria-current="page" to="/"><h1><span style={{ color: "#e99f27" }}>Meal</span> <span style={{ color: "#540640" }}>Monkey</span></h1></Link>
                            </li>

                        </ul>

                        {!localStorage.getItem("token") ?
                            <div className="authbtns">
                                <button className="signin btn text-capitalize mx-1" onClick={signinHandler}>sign in</button>
                                <button className="btn signup text-capitalize mx-1" onClick={signupHandler}>sign up</button>

                            </div>
                            : <div className='sidebox'>
                                <li><i className="fa-solid fa-house-chimney"></i> <Link to="/" className='links'>Home</Link></li>



                                <li><i className="fa-solid fa-address-card"></i> <Link to="/contact" className='links'>Contact Us</Link></li>


                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-user"></i> {localStorage.getItem("name")}..
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link
                                            className="dropdown-item" to=""><i className="fa-solid fa-unlock"></i> Change Password</Link></li>
                                        <li className='logout' onClick={logoutHandler}> <Link to="" className='dropdown-item'><i className="fa-solid fa-right-from-bracket"></i> Logout</Link></li>

                                    </ul>
                                </li>

                                <li className='cart'><i className="fa-solid fa-cart-arrow-down"></i> Cart</li></div>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar