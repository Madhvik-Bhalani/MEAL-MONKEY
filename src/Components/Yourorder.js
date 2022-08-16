import React, { useContext, useEffect } from 'react'
import './Yourorder.css'
import Orderitem from './Orderitem'
import dbcon from '../Context/Dbcon'
import Scrollbars from 'react-custom-scrollbars-2'
import img from '../Assets/e2.svg'

function Yourorder() {
    const condb = useContext(dbcon)
    let { getyourorder, odata } = condb

    useEffect(() => {
        getyourorder()
        // eslint-disable-next-line
    }, [])

    document.title="Meal Monkey-Your Orders"

    return (
        <>
            {odata.length !== 0 ? <>  <section className="h-100 gradient-custom" >
                <div className="container py-4 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-10 col-xl-8">
                            <div className="card" style={{
                                borderRadius: "10px", border: "none", boxShadow: "0.7px 0.7px .9rem rgba(35, 52, 53, 0.1", width: "900px"
                            }}>
                                <div className="card-header px-4 py-4" style={{ backgroundColor: "rgb(230,230,230)" }}>
                                    <h5 className="mb-0" style={{ color: "#540660" }}>Thanks for your Order, <span style={{ color: "#540660" }}>{localStorage.getItem("name")}.!</span></h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0" style={{ color: "#540660" }}>Receipt</p>

                                    </div>
                                    <div className='p-2' style={{ height: "300px" }} >
                                        <Scrollbars>
                                            {
                                                odata.map((elem) => {
                                                    return (
                                                        <Orderitem key={elem._id} name={elem.name} qty={elem.quantity} price={elem.price} img={elem.img} otime={elem.ordertime} dtime={elem.deliverytime} hno={elem.hno} area={elem.area} pin={elem.pin} city={elem.city} onum={elem.onum} />
                                                    )
                                                })
                                            }
                                        </Scrollbars>
                                    </div>
                                    <hr className='mt-5' />
                                    <div className="d-flex justify-content-between pt-2 mt-1">
                                        <p className="text-muted mb-0"><span className="fw-bold me-4" style={{ fontSize: "18px" }}>Payment Mode</span> </p>
                                        <p className="text-muted mb-0"><span className="fw-bold " style={{ fontSize: "18px" }}>Delivery Charges</span> </p>
                                    </div>
                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="text-muted mb-0 text-capitalize" style={{ fontSize: "18px" }}>{localStorage.getItem("cod")}</p>
                                        <p className=" text-muted mb-0 text-capitalize" style={{ fontSize: "18px" }}>free</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </> : <div className='errimgorder mt-4'>
                 <h4 className='text-center text-capitalize mt-5' style={{ fontSize: "28px", color: "#540640", textShadow: ".5px .5px .5px #e99f27" }}>You Haven't Placed Any Order,Yet.</h4>
                <h5 className='text-center' style={{ marginTop: "-11px" }}><span style={{ fontSize: "30px", color: "#540640" }}>—————</span> <span style={{ color: "#e99f27", fontSize: "21px" }}>X</span> <span style={{ fontSize: "30px", color: "#540640" }}>—————</span></h5>
                <img src={img} alt="" />
            </div>}
        </>
    )
}

export default Yourorder