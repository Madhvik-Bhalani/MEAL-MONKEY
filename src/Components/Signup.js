import React, { useContext, useState, useRef } from 'react'
import refcontext from '../Context/Refcontext'
import logo from '../Assets/logo.png'
import dbcon from '../Context/Dbcon'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css'



function Signup() {
    const refcon = useContext(refcontext)
    const condb = useContext(dbcon)
    let { getqty } = condb
    const refclose = useRef(null)
    const subref = useRef(null)
    const [data, setdata] = useState({ name: "", email: "", pass: "", mno: "", cpass: "" })
    const subHandler = async (e) => {
        e.preventDefault();
        let { name, email, pass, mno, cpass } = data;
        const res = await fetch("http://localhost:5000/auth/signup", {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ name, email, pass, mno, cpass })
        })
        const token = await res.json();
        if (res.status === 201) {
            console.log("sign up done.!");
            setdata({ name: "", email: "", pass: "", mno: "", cpass: "" })
            refclose.current.click()
            localStorage.setItem("token", token)
            condb.getcontact() //to get userdata when signup for name
            getqty()

        }
        else {
            toast.warn(`${token}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    textTransform: "capitalize"
                }
            })
        }

    }


    const changeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const clickHandler = () => {
        subref.current.click(); //trigger submit button
    }


    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" style={{ display: "none" }} ref={refcon.refup}>
            </button>

            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Create Your Account With MealMonkey</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form method='POST' onSubmit={subHandler}>
                                <img src={logo} alt="MealMonkey" style={{ width: "125px", height: "125px", display: "block", margin: "auto" }} />

                                <div className="mb-1">
                                    <label htmlFor="name" className="form-label text-capitalize">name</label>
                                    <input type="text" className="form-control" id="name" name="name" required minLength={3} maxLength={25} onChange={changeHandler} value={data.name} />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="mno" className="form-label text-capitalize">mobile_no</label>
                                    <input type="number" className="form-control" id="mno" name="mno" required onChange={changeHandler} value={data.mno} />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputEmail2" className="form-label text-capitalize">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2" name="email"
                                        aria-describedby="emailHelp" required onChange={changeHandler} value={data.email} />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="exampleInputPassword2" className="form-label text-capitalize">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" name="pass" required minLength={3} onChange={changeHandler} value={data.pass} />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputPassword3" className="form-label text-capitalize">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword3" name="cpass" required onChange={changeHandler} value={data.cpass} />
                                </div>
                                <input type="submit" value="Sign Up" style={{ display: "none" }} ref={subref} />
                            </form>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn " data-bs-dismiss="modal" style={{
                                backgroundColor: "#e99f27",
                                color: "white"
                            }} ref={refclose}>Close</button>
                            <button type="button" className="btn" style={{
                                backgroundColor: "#540640",
                                color: "white"
                            }} onClick={clickHandler}>Sign Up</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup