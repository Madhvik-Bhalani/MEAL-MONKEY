import React, { useContext, useEffect } from 'react'
import './Yourorder.css'
import Orderitem from './Orderitem'
import dbcon from '../Context/Dbcon'
// import Scrollbars from 'react-custom-scrollbars-2'
function Yourorder() {
    const condb=useContext(dbcon)
    let {getyourorder,odata}=condb

    useEffect(() => {
      getyourorder()
      // eslint-disable-next-line
    }, [])
    
    return (
        <>
            <section className="h-100 gradient-custom" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-10 col-xl-8">
                            <div className="card" style={{
                                borderRadius: "10px", border: "none", boxShadow: "0.6px 0.6px .8rem rgba(35, 52, 53, 0.1", width: "900px"
                            }}>
                                <div className="card-header px-4 py-4">
                                    <h5 className="text-muted mb-0">Thanks for your Order, <span style={{ color: "#a8729a" }}>{localStorage.getItem("name")}</span>!</h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>Receipt</p>
                                        <p className="small text-muted mb-0">Receipt Voucher : {localStorage.getItem("rno")}</p>
                                    </div>
                                    <div className='p-2' style={{ height: "400px" }} >
                                        {/* <Scrollbars> */}
                                        
                                        {
                                            odata.map((elem)=>{
                                                return (
                                                    <Orderitem key={elem._id} name={elem.name} qty={elem.quantity} price={elem.price} img={elem.img} otime={elem.ordertime} dtime={elem.deliverytime}/>
                                                )
                                                
                                            })

                                            
                                        }
                                        
                                        {/* </Scrollbars> */}
                                    </div>
                                    <div className="d-flex justify-content-between pt-2 mt-5">
                                        <p className="fw-bold mb-0">Delivery Location</p>


                                    </div>
                                    <div className="d-flex justify-content-between pt-2">
                                        <div>

                                            <p className="text-muted mb-0 text-capitalize" >{localStorage.getItem("address")}</p>

                                        </div>



                                    </div>
                                    <div className="d-flex justify-content-between pt-2 mt-3">
                                        <p className="fw-bold mb-0">Order Details</p>

                                    </div>

                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="text-muted mb-0">Invoice Number : {localStorage.getItem("vno")}</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Total</span> &#8377;{localStorage.getItem("total")}</p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">Invoice Date : {localStorage.getItem("date")}</p>
                                        <p className="text-muted mb-0"><span className="fw-bold me-4">Delivery Charges</span> Free</p>
                                    </div>




                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Yourorder