import React, { useContext, useState } from 'react'
import refcontext from '../Context/Refcontext'
import logo from '../Assets/logo.png'
import dbcon from '../Context/Dbcon'

function Changepass() {
    const refcon = useContext(refcontext)
    const condb = useContext(dbcon)
    const [pass, setPass] = useState({ opass: "", npass: "", rpass: "" })

    const subHandler = (e) => {
        e.preventDefault()
        let {opass,npass,rpass}=pass
        condb.changepass(opass,npass,rpass);
        
        

    }
    const changeHandler = (e) => {
        setPass({ ...pass, [e.target.name]: e.target.value })
    }
    return (
        <>
            <button className="btn btn-primary d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" ref={refcon.refpass}>
            </button>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Change Password</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ref={refcon.refclosepass}></button>
                </div>
                <div className="offcanvas-body">
                    <form method='POST' onSubmit={subHandler}>
                        <img src={logo} alt="MealMonkey" style={{ width: "125px", height: "125px", display: "block", margin: "auto" }} />
                        <div className="mb-3">

                            <label htmlFor="pass1" className="form-label text-capitalize">Old Password</label>
                            <input type="text" className="form-control" id="pass1" aria-describedby="emailHelp" name="opass" required onChange={changeHandler} value={pass.opass} ref={refcon.refopass}/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass2" className="form-label text-capitalize">New Password</label>
                            <input type="password" className="form-control" id="pass2" name="npass" required onChange={changeHandler} value={pass.npass} ref={refcon.refnpass}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass3" className="form-label text-capitalize">Re-Type Password</label>
                            <input type="password" className="form-control" id="pass3" name="rpass" required onChange={changeHandler} value={pass.rpass} ref={refcon.refrpass}/>
                        </div>

                        <input type="submit" className='mt-4 btn btn-dark d-block m-auto' value="Save Password" style={{ backgroundColor: "#540640", fontSize: "18px" }} />
                    </form>

                </div>
            </div>
        </>
    )
}

export default Changepass