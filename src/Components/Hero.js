import React, { useContext } from 'react'
import './Hero.css'
import hero from '../Assets/hero4.jpg'
import refcontext from '../Context/Refcontext'

function Hero() {

    document.title="Meal Monkey-Order Food Online"

    const refcon=useContext(refcontext)
    let {refup}=refcon
    const clickHandler=()=>{
        refup.current.click()
    }

    return (
        <>
            <div className="hero">
                <div className="left">
                    <h1 className='text-center text-capitalize'>do you feel <span style={{fontWeight:"400",textShadow:"1px 1px 1px #540640"}}>hungry.?</span></h1>
                    <div className="para">

                        <p style={{ width: "80%" }} className='fs-3 text-center text-capitalize'>don't worry meal monkey is availabel 24&times;7 for you.! sign in first to order from your favourite restaurant now.!!</p>
                    </div>
                    <div className="btns">
                        <button className=" text-capitalize btn" style={{
                            backgroundColor: "#540640",
                            color: "white",width:"120px",fontSize:"19px"
                        }} onClick={clickHandler}>Order Now</button>
                    </div>
                </div>
                <div className="right">
                    <img src={hero} alt="Home Page.." />
                </div>
            </div>
        </>
    )
}

export default Hero