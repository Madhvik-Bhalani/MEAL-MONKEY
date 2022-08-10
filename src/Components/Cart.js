import React, { useContext, useEffect } from 'react'
import './Cart.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import dbcon from '../Context/Dbcon';
import Citem from './Citem';
import img from '../Assets/notem.jpg'
function Cart() {
    const condb = useContext(dbcon)
    let { getcartproducts, cdata } = condb
    
    useEffect(() => {
        getcartproducts()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="contairner">
                {cdata.length!==0?<h4 className='text-center text-capitalize mt-3' style={{ fontSize: "28px", color: "#540640", textShadow: ".5px .5px .5px #e99f27" }}>your food cart</h4>:<h4 className='text-center text-capitalize mt-3' style={{ fontSize: "28px", color: "#540640", textShadow: ".5px .5px .5px #e99f27" }}>your cart is empty</h4>}

                <h5 className='text-center' style={{ marginTop: "-5px" }}><span style={{ fontSize: "30px", color: "#540640" }}>————</span> <span style={{ color: "#e99f27", fontSize: "25px" }}>X</span> <span style={{ fontSize: "30px", color: "#540640" }}>————</span></h5>

                {cdata.length !== 0 ? <div className="itemcontainer container mt-4 mb-5 p-3">
                    <Scrollbars>
                        {
                            cdata.map((elem) => {
                                return (
                                    <Citem key={elem._id} img={elem.img} name={elem.name} desc={elem.description} price={elem.price} product={elem} qty={elem.quantity}/>

                                )
                            })
                        }


                    </Scrollbars>
                </div> : <div className='errimg'>
                    <img src={img} alt="" />
                </div>}
            </div>
        </>
    )
}

export default Cart