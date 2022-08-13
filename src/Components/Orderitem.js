import React from 'react'

function Orderitem(props) {
   
    return (
        <>
        <div className="card shadow-0 border mb-4">

            <div className="card-body">

                <div className="d-flex justify-content-between">
                    <div className="col-md-2">
                        <img src={props.img}
                            className="img-fluid" alt="food" />
                    </div>
                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0">{props.name}</p>
                    </div>
                    
                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">Qty: {props.qty}</p>
                    </div>
                    <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                        <p className="text-muted mb-0 small">&#8377;{props.price}</p>
                    </div>
                </div>
                <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: "1" }} />
                <div className="row d-flex align-items-center">
                    {/* <div className="col-md-2">
                                                    <p className="text-muted mb-0 small">Track Order</p>
                                                </div> */}
                    <div className="col-md-12">
                        <div className="progress" style={{ height: "6px", borderRadius: "16px" }}>
                            <div className="progress-bar" role="progressbar"
                                style={{ width: `60%`, borderRadius: "16px", backgroundColor: "#a8729a" }}></div>
                        </div>
                        <div className="d-flex justify-content-around mb-1">
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary {props.otime}</p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered {props.dtime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Orderitem