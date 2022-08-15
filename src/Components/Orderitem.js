import React from 'react'




function Orderitem(props) {

    return (
        <>
            <div className="card shadow-0 border mb-4 "  >

                <div className="card-body p-1" >

                    <div className="d-flex justify-content-between">
                        <div className="col-md-2 imgbox">
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
                    <p style={{ borderBottom: "1px dotted gray" }} className="mt-2"></p>
                    <p style={{ fontSize: "13px" }}>Order #{props.onum} | {props.otime}</p>

                </div>
            </div>
        </>
    )
}

export default Orderitem