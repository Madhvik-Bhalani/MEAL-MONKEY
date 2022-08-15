import React, { useContext, useState } from 'react'
import refcontext from '../Context/Refcontext'
import logo from '../Assets/logo.png'
import dbcon from '../Context/Dbcon'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dellocation() {
    const refcon = useContext(refcontext)
    let { refloc, reflocclose, reflocsub } = refcon
    const [data, setdata] = useState({ hno: "", area: "", pin: "", cod: "", city: "" })

    const condb = useContext(dbcon)
    let { yourorder, condata } = condb
    const subHandler = (e) => {
        e.preventDefault()

        let { hno, area, pin, cod, city } = data
        yourorder(hno, area, pin, cod, city)
        setdata({ hno: "", area: "", pin: "", cod: "", city: "" })
        reflocclose.current.click()


    }
    const changeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })


    }
    const clickHandler = () => {


        reflocsub.current.click()
    }

    const editmode = () => {
        toast.success(`Edit Mode Enabled`, {
            position: "top-right",
            autoClose: 2300,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                textTransform: "capitalize"
            }
        })
        setdata({ hno: condata.hno, area: condata.area, pin: condata.pin, city: condata.city, cod: condata.cod })
        condata.hno = undefined
    }
    const sameadd = () => {
        setdata({ hno: condata.hno, area: condata.area, pin: condata.pin, city: condata.city, cod: condata.cod })
    }


    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropl" style={{ display: "none" }} ref={refloc}>
            </button>

            <div className="modal fade" id="staticBackdropl" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-capitalize" style={{ fontSize: "23px" }} id="staticBackdropLabel">enter your delivery location <i className="fa-solid fa-location-dot" style={{ fontSize: "23px" }}></i></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form method='POST' onSubmit={subHandler} >
                                <img src={logo} alt="MealMonkey" style={{ width: "125px", height: "125px", display: "block", margin: "auto" }} />
                                <div className="mb-3">

                                    <label htmlFor="hno" className="form-label text-capitalize">Flat, House no., Building, Company, Apartment</label>
                                    <input type="text" className="form-control" id="hno" name="hno" required onChange={changeHandler} minLength={3} value={data.hno || condata.hno || " "} readOnly={condata.hno !== undefined ? true : false} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="area" className="form-label text-capitalize">Area, Street, Sector, Village</label>
                                    <input type="text" className="form-control" id="area" name="area" required onChange={changeHandler} minLength={5} value={data.area || condata.area || " "} readOnly={condata.hno !== undefined ? true : false} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pin" className="form-label text-capitalize">Pincode</label>
                                    <input type="text" className="form-control" id="pin" name="pin" required onChange={changeHandler} minLength={5} value={data.pin || condata.pin || " "} readOnly={condata.hno !== undefined ? true : false} />
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <div>

                                        <label htmlFor="cod" className="form-label text-capitalize" style={{ marginLeft: "5px" }}>Payment Mode</label>
                                        <select required className="form-select" aria-label="Default select example" name='cod' id='cod' style={{ width: "220px" }} onChange={changeHandler} value={data.cod || condata.cod || " "} disabled={condata.hno !== undefined ? true : false}>
                                            <option value="select payment mode" >Select Payment Mode</option>
                                            <option value="cash on delivery" >Cash On delivery</option>

                                        </select>
                                    </div>
                                    <div>

                                        <label htmlFor="city" className="form-label text-capitalize text-end d-block " style={{ marginRight: "5px" }}>Select Your City</label>
                                        <select required className="form-select" aria-label="Default select example" id='city' style={{ width: "220px" }} name="city" onChange={changeHandler} value={data.city || condata.city || " "} disabled={condata.hno !== undefined ? true : false}>
                                            <option value="city" >City</option>
                                            <option value="Surat" >Surat</option>
                                            <option value="Vadodara" >Vadodara</option>
                                            <option value="Vapi" >Vapi</option>


                                        </select>
                                    </div>


                                </div>
                                <div className='d-flex justify-content-between'>


                                    <div className={`form-check d-${condata.hno === undefined ? "none" : ""}`}>
                                        <input className={`form-check-input`} type="checkbox" value="" id="flexCheckDefault" onChange={editmode} />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Enable Edit Mode
                                        </label>
                                    </div>


                                    <div className={`form-check d-${condata.hno === undefined ? "none" : ""}`}>
                                        <input className={`form-check-input d-${condata.hno === undefined ? "none" : ""}`} type="checkbox" value="" id="flexCheckDefault2" onChange={sameadd} />
                                        <label className="form-check-label" htmlFor="flexCheckDefault2">
                                            Same As Above
                                        </label>
                                    </div>

                                </div>

                                <input type="submit" value="confirm order" style={{ display: "none" }} ref={reflocsub} />
                            </form>
                        </div>
                        <div className="modal-footer">

                            <div>

                                <button type="button" className="btn mx-1" style={{
                                    backgroundColor: "#e99f27",
                                    color: "white"
                                }} data-bs-dismiss="modal" ref={reflocclose}>Close</button>
                                <button type="button" className="btn mx-1" style={{
                                    backgroundColor: "#540640",
                                    color: "white", outline: "none"
                                }} onClick={clickHandler}>Confirm Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Dellocation