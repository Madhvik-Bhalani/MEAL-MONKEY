import React, { useContext } from 'react'
import dbcon from '../Context/Dbcon'

function Citem(props) {
    const condb = useContext(dbcon)
    let { plusitem, minusitem } = condb

    // const deleteHandler = () => {
    //     deleteproduct(props.product._id)
    //     let data=parseInt(localStorage.getItem("count"))
    //     localStorage.setItem("count",data-1)

    // }
    const plusHandler = () => {
        plusitem(props.product._id)
    }
    const minusHandler = () => {
        minusitem(props.product._id)
    }
    return (
        <>
            <div className="items-info p-2">
                <div className="product-img">
                    <div className="imgbox">

                        <img src={props.img} alt="" />
                    </div>
                </div>
                <div className="title">
                    <h4>{props.name}</h4>
                    <p style={{ width: "400px" }}>{props.desc}</p>
                </div>
                <div className="add-minus">
                    <button onClick={minusHandler} > <i className="fa-solid fa-circle-minus" style={{ fontSize: "25px" }} ></i></button>
                    <input type="text" placeholder={props.qty} />
                    <button onClick={plusHandler}><i className="fa-solid fa-circle-plus" style={{ fontSize: "25px" }} ></i></button>
                </div>
                <div className="price">
                    <p>&#8377;{props.price}</p>

                </div>
                {/* <div className="remove-item">
                    <i
                        className="fas fa-trash-alt remove"
                        style={{ fontSize: "25px" }} onClick={deleteHandler}></i>
                </div> */}
            </div>
            <hr />
        </>
    )
}

export default Citem