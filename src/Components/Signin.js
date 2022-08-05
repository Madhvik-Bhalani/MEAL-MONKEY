import React, { useContext, useRef, useState } from 'react'
import refcontext from '../Context/Refcontext'
import logo from '../Assets/logo.png'
import reloadcontext from '../Context/Reloadcontext'
import dbcon from '../Context/Dbcon'



function Signin() {
  

    // context for ref modal trigger btn -- triggerd from nav
    const refcon = useContext(refcontext)
    const reloadcon=useContext(reloadcontext)
    const condb=useContext(dbcon)
    
    const refclose = useRef(null)
    const subref = useRef(null)

    const [data, setData] = useState({ email: "", pass: "" })
    const subHandler = async (e) => {
        e.preventDefault();
        let { email, pass } = data
        const res = await fetch("http://localhost:5000/auth/signin", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email, pass })
        })
        const token = await res.json()
        if (res.status === 200) {
            localStorage.setItem("token", token)
            setData({ email: "", pass: "" })
            refclose.current.click()
            reloadcon.setreload({}); //just for nav&home rerender after signin
            condb.getcontact() //to get userdata when signup
        }
    }

    const clickHandler = () => {
        subref.current.click();
    }

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ display: "none" }} ref={refcon.refin}>
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Sign In To MealMonkey</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form method='POST' onSubmit={subHandler}>
                                <img src={logo} alt="MealMonkey" style={{ width: "125px", height: "125px", display: "block", margin: "auto" }} />
                                <div className="mb-3">

                                    <label htmlFor="exampleInputEmail1" className="form-label text-capitalize">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required onChange={changeHandler} value={data.email} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-capitalize">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name="pass" required onChange={changeHandler} value={data.pass} />
                                </div>

                                <input type="submit" value="Sign In" ref={subref} style={{ display: "none" }} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" style={{
                                backgroundColor: "#e99f27",
                                color: "white"
                            }} data-bs-dismiss="modal" ref={refclose}>Close</button>
                            <button type="button" className="btn " style={{
                                backgroundColor: "#540640",
                                color: "white", outline: "none"
                            }} onClick={clickHandler}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin