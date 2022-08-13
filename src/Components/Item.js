import React, { useContext } from 'react'
import dbcon from '../Context/Dbcon'
import reloadcontext from '../Context/Reloadcontext'
import './Item.css'

function Item(props) {
    const condb = useContext(dbcon)
    const reloadcon = useContext(reloadcontext)
    let { setreload } = reloadcon

    let { addtocart } = condb
    const addtocartHandler = () => {

        addtocart(props.product._id);
        let data = parseInt(localStorage.getItem("count"))
        localStorage.setItem("count", data + 1)
        setreload({}) //for nav re-render



    }
    return (
        <>
            <div className="col-md-3 d-flex justify-content-center mt-4">

                <div className="card cardp" style={{ width: "355px" }}>
                    <div className="imgbox">

                        <img src={props.img} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-capitalize" >{props.name}</h5>
                        <p className="card-text">{props.desc}.</p>
                        <div className="pricebox d-flex justify-content-between" style={{ marginBottom: "7px", padding: "0px", borderBottom: "1px solid black" }}>
                            <p className='card-text'><span style={{ color: "black", fontSize: "17px" }}>•</span> {props.seller}</p>
                            <p className='card-text'><span style={{ color: "black", fontSize: "16px" }}>&#x20B9;</span>{props.price} Only/-</p>
                        </div>
                        <button className="btn text-light text-capitalize d-block m-auto" style={{ backgroundColor: "#540640", width: "130px" }} onClick={addtocartHandler}>add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item