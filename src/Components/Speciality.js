import React from 'react'
import img1 from '../Assets/delivery.jpg'
import img2 from '../Assets/min order.jpg'
import img3 from '../Assets/free delivery.jpg'
import './Speciality.css'

function Speciality() {
    return (
        <>
            <div className='my-3 container-fluid' style={{height:"630px",backgroundColor:"rgb(250 255 255)",padding:"7px 0px"}}>

                <h1 className='text-center'><span style={{ color: "#e99f27" }}>⨳Our</span> <span style={{ color: "#540640" }}>Services⨳</span></h1>
                <div className="container my-5 d-flex justify-content-around">
                    <div className="card card1" style={{ width: "350px", border: "none"}} >
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center mt-2" style={{ textShadow: ".5px .5px .5px #540640" }}>⨰ Express Delivery ⨰</h4>
                            <h6 className="card-text text-center">Experience Meal Monkey's superfast delivery for food delivered fresh & on time.!</h6>
                        </div>
                    </div>
                    <div className="card card2" style={{ width: "350px", border: "none" }} >
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center mt-1" style={{ textShadow: ".5px .5px .5px #540640" }}>⨰ No Minimum Order ⨰</h4>
                            <h6 className="card-text text-center">Order in for yourself or for the group, with no restrictions on order value.!</h6>
                        </div>
                    </div>
                    <div className="card card3" style={{ width: "350px", border: "none"}} >
                        <img src={img3} className="card-img-top mt-3" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title text-center mt-2" style={{ textShadow: ".5px .5px .5px #540640" }}>⨰ Free Delivery ⨰</h4>
                            <h6 className="card-text text-center">Meal Monkey Provides Free And Contact Less Delivery Without Any Area Boundation!</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speciality