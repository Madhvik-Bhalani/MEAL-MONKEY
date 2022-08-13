import React, { useContext, useState } from 'react'
import refcontext from '../Context/Refcontext'
import logo from '../Assets/logo.png'
import dbcon from '../Context/Dbcon'

function Dellocation() {
    const refcon = useContext(refcontext)
    let { refloc, reflocclose, reflocsub } = refcon
    const [data, setdata] = useState({ hno: "", area: "", landmark: "", cod: "", city: "" })

    const condb=useContext(dbcon)
    let {yourorder}=condb
    const subHandler = (e) => {
        e.preventDefault()
        let {hno,area,landmark,cod,city}=data
        yourorder(hno,area,landmark,cod,city)
        // setdata({hno: "", area: "", landmark: "", cod: "", city: ""})
        reflocclose.current.click()

    }
    const changeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
       

    }
    const clickHandler = () => {
        reflocsub.current.click()
    }
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropl" style={{ display: "none" }} ref={refloc}>
            </button>

            <div className="modal fade" id="staticBackdropl" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-capitalize" style={{ fontSize: "23px" }} id="staticBackdropLabel">enter your delivery location <i className="fa-solid fa-location-dot" style={{ fontSize: "23px" }}></i></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form method='POST' onSubmit={subHandler}>
                                <img src={logo} alt="MealMonkey" style={{ width: "125px", height: "125px", display: "block", margin: "auto" }} />
                                <div className="mb-3">

                                    <label htmlFor="hno" className="form-label text-capitalize">Flat, House no., Building, Company, Apartment</label>
                                    <input type="text" className="form-control" id="hno" name="hno" required onChange={changeHandler} minLength={3} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="area" className="form-label text-capitalize">Area, Street, Sector, Village</label>
                                    <input type="text" className="form-control" id="area" name="area" required onChange={changeHandler} minLength={5} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="landmark" className="form-label text-capitalize">Landmark</label>
                                    <input type="text" className="form-control" id="landmark" name="landmark" placeholder='E.g.near abc circle' required onChange={changeHandler} minLength={5}/>
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <div>

                                        <label htmlFor="cod" className="form-label text-capitalize" style={{ marginLeft: "5px" }}>Payment Mode</label>
                                        <select required className="form-select" aria-label="Default select example" name='cod' id='cod' style={{ width: "220px" }} onChange={changeHandler}>
                                            <option value="select payment mode" >Select Payment Mode</option>
                                            <option value="cash on delivery" >Cash On delivery</option>

                                        </select>
                                    </div>
                                    <div>

                                        <label htmlFor="city" className="form-label text-capitalize text-end d-block " style={{ marginRight: "5px" }}>Select Your City</label>
                                        <select required className="form-select" aria-label="Default select example" id='city' style={{ width: "220px" }} name="city" onChange={changeHandler}>
                                            <option value="city" >City</option>
                                            <option value="Surat" >Surat</option>
                                            <option value="Vadodara" >Vadodara</option>
                                            <option value="Vapi" >Vapi</option>


                                        </select>
                                    </div>


                                </div>

                                <input type="submit" value="confirm order" style={{ display: "none" }} ref={reflocsub} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" style={{
                                backgroundColor: "#e99f27",
                                color: "white"
                            }} data-bs-dismiss="modal" ref={reflocclose}>Close</button>
                            <button type="button" className="btn " style={{
                                backgroundColor: "#540640",
                                color: "white", outline: "none"
                            }} onClick={clickHandler}>Confirm Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dellocation