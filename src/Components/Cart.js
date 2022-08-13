import React, { useContext, useEffect } from 'react'
import './Cart.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import dbcon from '../Context/Dbcon';
import Citem from './Citem';
import img from '../Assets/notem.jpg'
import refcontext from '../Context/Refcontext';
import Dellocation from './Dellocation';
function Cart() {
    const condb = useContext(dbcon)
    let { getcartproducts, cdata, deleteall } = condb

    const refcon=useContext(refcontext)
    useEffect(() => {
        getcartproducts()
        // eslint-disable-next-line
    }, [])

    const clearcartHandler = () => {
        deleteall()
    }

    const checkoutHandler=()=>{
        refcon.refloc.current.click()
    }
    return (
        <>
        <Dellocation/>
            <div className="container">
                {cdata.length !== 0 ? <h4 className='text-center text-capitalize mt-3' style={{ fontSize: "28px", color: "#540640", textShadow: ".5px .5px .5px #e99f27" }}>your food cart</h4> : <h4 className='text-center text-capitalize mt-3' style={{ fontSize: "28px", color: "#540640", textShadow: ".5px .5px .5px #e99f27" }}>your cart is empty</h4>}
                

                <h5 className='text-center' style={{ marginTop: "-5px" }}><span style={{ fontSize: "30px", color: "#540640" }}>————</span> <span style={{ color: "#e99f27", fontSize: "25px" }}>X</span> <span style={{ fontSize: "30px", color: "#540640" }}>————</span></h5>

                {cdata.length !== 0 ? <><div className="itemcontainer container mt-4 mb-2 p-3">
                    <Scrollbars>
                        {
                            cdata.map((elem) => {
                                return (
                                    <Citem key={elem._id} img={elem.img} name={elem.name} desc={elem.description} price={elem.price} product={elem} qty={elem.quantity} />

                                )
                            })
                        }


                    </Scrollbars>
                </div>
                    <div className="total container d-flex justify-content-between px-2 mb-5 mt-3">

                        <h3 className='text-capitalize' style={{ color: "#540640", fontSize: "25px" }}> <span style={{ textShadow: ".6px .6px .6px #e99f27", fontSize: "25px" }}>Total</span>: &#8377; {localStorage.getItem("cartamt")} [{localStorage.getItem("count")} items]</h3>
                        <div className="btntotal">
                            <button className="btn btncheckout text-light  text-capitalizemx-1" style={{ backgroundColor: "#e99f27", fontSize: "18px" }} onClick={checkoutHandler}>CheckOut <i className="fa-solid fa-arrow-right-long bottomicons1" style={{ fontSize: "17px" }} ></i></button>

                            <button className="btn btndeleteall text-light text-capitalize mx-1" onClick={clearcartHandler} style={{ backgroundColor: "#540640", fontSize: "18px" }}>Clear Cart <i className="fa-solid fa-trash-can bottomicons2" style={{ fontSize: "17px" }}></i></button>
                        </div>
                    </div>
                </>
                    : <div className='errimg'>
                        <img src={img} alt="" />
                    </div>}
            </div>
        </>
    )
}

export default Cart