import React, { useContext } from 'react'
import logo from '../Assets/logo.png'
import refcontext from '../Context/Refcontext'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import reloadcontext from '../Context/Reloadcontext';
import dbcon from '../Context/Dbcon';
import { useLocation } from 'react-router-dom';


function Navbar() {

    const reloadcon = useContext(reloadcontext)
    let { setreload } = reloadcon
    // modal trigger reference
    const refcon = useContext(refcontext)
    // eslint-disable-next-line
    const { refin, refup, refpass } = refcon
    const signinHandler = (e) => {
        e.preventDefault();
        refin.current.click();

    }
    const signupHandler = (e) => {
        e.preventDefault();
        refup.current.click();
    }
    const condb = useContext(dbcon)
    let { putqty } = condb
    let navigate = useNavigate()
    const logoutHandler = () => {
        let qty = parseInt(localStorage.getItem("count"))
        putqty(qty)
        localStorage.removeItem("token");
        navigate("/")
        setreload({})
        localStorage.setItem("count", 0) //reset to 0 for every new user old user get their respective data by (getqty-api)

    }

    const changepassHandler = () => {
        // console.log(refpass.current);
        refpass.current.click()
    }

    let location = useLocation()

    return (
        <>
            <nav className="navbar navbox navbar-expand-lg bg-light" style={{ height: "90px" }}>
                <div className="container-fluid ">
                    <img src={logo} className="logoimg" alt="Meal Monkey.." />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-center">
                                <Link className="nav-link active" aria-current="page" to="/"><h1><span style={{ color: "#e99f27" }}>Meal</span> <span style={{ color: "#540640" }}>Monkey</span></h1></Link>
                            </li>
                            ``
                        </ul>

                        {!localStorage.getItem("token") ?
                            <div className="authbtns">
                                <button className="signin btn text-capitalize mx-1" onClick={signinHandler}>sign in</button>
                                <button className="btn signup text-capitalize mx-1" onClick={signupHandler}>sign up</button>

                            </div>
                            : <div className='sidebox'>
                                <li ><i style={{ color: location.pathname === "/" ? "#e99f27" : "", textShadow: location.pathname === "/" ? ".35px .35px .35px #540660" : "" }} className="fa-solid fa-house-chimney nicons"></i> <Link to="/" style={{ color: location.pathname === "/" ? "#e99f27" : "", textShadow: location.pathname === "/" ? ".37px .37px .37px #540660" : "" }} className='links'>Home</Link></li>



                                <li><i style={{ color: location.pathname === "/contact" ? "#e99f27" : "", textShadow: location.pathname === "/contact" ? ".35px .35px .35px #540660" : "" }} className="fa-solid fa-address-card nicons"></i> <Link to="/contact" className='links' style={{ color: location.pathname === "/contact" ? "#e99f27" : "", textShadow: location.pathname === "/contact" ? ".37px .37px .37px #540660" : "" }}>Contact Us</Link></li>


                                <li className="nav-item dropdown">
                                    <Link className="nav-link  links dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                        <i className="fa-solid fa-user nicons"></i> {localStorage.getItem("name")}
                                    </Link>
                                    <ul className="dropdown-menu" style={{ width: "257px" }}>
                                        <li onClick={changepassHandler} ><Link
                                            className="dropdown-item p-1" to="#" style={{ fontSize: "23px" }}><i className="fa-solid fa-unlock" style={{ fontSize: "23px" }}></i> Change Password</Link></li>
                                        <li> <Link to="/yourorder" style={{ fontSize: "23px" }}
                                            className='dropdown-item p-1'><i className="fa-solid fa-basket-shopping" style={{ fontSize: "23px" }}></i> Your Order</Link></li>
                                        <li className='logout' onClick={logoutHandler}> <Link to="#" style={{ fontSize: "23px" }}
                                            className='dropdown-item p-1'><i className="fa-solid fa-right-from-bracket" style={{ fontSize: "23px" }}></i> Logout</Link></li>


                                    </ul>
                                </li>

                                <span className="d-flex justify-content-center align-items-center position-absolute translate-middle  border border-light text-light text-center" style={{ top: "30px", right: "64px", borderRadius: "50%", height: "19px", width: "19px", zIndex: "1", backgroundColor: "#e99f27" }}> <span className='text-light' style={{ fontSize: "12px" }}>{localStorage.getItem("count")}</span>
                                </span>
                                <li className='cart'>
                                    <Link to="/cart" >
                                        <i className="fa-solid fa-cart-arrow-down" style={{ transition: "none", transitionProperty: "none", color: location.pathname === "/cart" ? "#e99f27" : "", textShadow: location.pathname === "/cart" ? ".37px .37px .37px #540660" : "" }}>

                                        </i>
                                    </Link></li>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar