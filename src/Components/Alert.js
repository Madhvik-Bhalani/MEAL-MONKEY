import React, { useContext } from 'react'
import alertcontext from '../Context/Alertcontext'
import './Alert.css'

function Alert() {
    const alertcon=useContext(alertcontext);
    let {alert}=alertcon
    return (
        alert&& 
        <>
             <div className="toast position-fixed toastbox" role="alert" aria-live="assertive" aria-atomic="true" style={{ display: "block", zIndex: "1", bottom: "10px", right: "10px"}}>
                <div className="toast-header" style={{ backgroundColor: "rgb(84 81 81)" }}>
                    <i class="fa-solid fa-comment-dots text-light"></i>
                    <strong className="me-auto " style={{ fontSize: "18px", marginLeft: "10px", color: "white" }}>Meal Monkey</strong>
                    <small className='text-capitalize' style={{ fontSize: "16px", color: "white" }} >{alert.page}</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" style={{ color: "white" }}></button>
                </div>
                <div className="toast-body " style={{ fontSize: "17px",zIndex:"1" }}>
                    <p className='text-dark text-capitalize' style={{fontSize:"18px",fontWeight:"500"}}>{alert.msg}</p>
                </div>
            </div>
        </>
    )
}

export default Alert