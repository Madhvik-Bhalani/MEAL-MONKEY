import React, { useContext, useEffect, useState } from 'react'
import './Contact.css'
import dbcon from '../Context/Dbcon'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const condb = useContext(dbcon)
    let { getcontact, condata } = condb;
    useEffect(() => {
        getcontact()
        // eslint-disable-next-line
    }, [])



    let navigate = useNavigate()
    const [data, setdata] = useState({ name: "", email: "", mno: "", msg: "" })
    const changeHandler = (e) => {
        setdata({ ...data, msg: e.target.value, name: condata.name, email: condata.email, mno: condata.mno })
    }
    const subHandler = async (e) => {
        e.preventDefault();
        let { name, email, mno, msg } = data;
        const res = await fetch("http://localhost:5000/auth/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")

            },
            body: JSON.stringify({ name, email, mno, msg })
        })
        const cdata = await res.json();
        if (res.status === 201) {

            console.log("ok" + cdata.ok);
            setdata({ name: "", email: "", mno: "", msg: "" })
            navigate("/")

            toast.success(`Your Message Has Been Sent`, {
                position: "top-right",
                autoClose: 2300,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    textTransform: "capitalize"
                }
            })

        }

    }


    document.title="Meal Monkey-Get In Touch"

    return (
        <>
            <div className="container-fluid contactbox  p-3" style={{ height: "730px", padding: "35px 15px", }}>

                <h2 className='text-center' style={{ color: "#540640",textShadow:".5px .5px .5px #e99f27" }}>Get In Touch</h2>
                <h5 className='text-center' style={{marginTop:"-11px"}}><span style={{fontSize:"30px",color:"#540640"}}>————</span> <span style={{color:"#e99f27",fontSize:"21px"}}>X</span> <span style={{fontSize:"30px",color:"#540640"}}>————</span></h5>
                 <div className="container px-4 mt-2 text-center">
                    <div className="row gx-5" >
                        <div className="col mt-4 ">
                            <div className="p-3 colbox "><h6><i style={{ color: "#540640" }} className="fa-solid fa-mobile-screen-button"></i> </h6><span>Phone:+91 7490812260</span></div>
                        </div>
                        <div className="col mt-4 ">
                            <div className="p-3  colbox "><h6><i style={{ color: "#540640" }} className="fa-solid fa-envelope-circle-check"></i> </h6><span>Email:mealmonkey@gmail.com</span></div>
                        </div>
                        <div className="col mt-4 ">
                            <div className="p-3 colbox "><h6><i style={{ color: "#540640" }} className="fa-solid fa-map-location"></i> </h6><span>Address:Galaxy Height,Surat-395006</span></div>
                        </div>
                    </div>
                </div>

                <div className="container p-5" style={{
                    width: "900px", height: "410px", boxShadow: "0.6px 0.6px 2rem rgba(35, 52, 53, 0.15)",
                    backgroundColor: "white",
                    borderRadius: "15px", marginTop: "40px"
                }}>

                    <form method="post" onSubmit={subHandler}>
                        <h2 style={{ color: "#540640",textShadow:".5px .5px .5px #e99f27"}}>Contact Us</h2>
                        <div className="row gx-5" >
                            <div className="col mt-4">
                                <input type="text" style={{ color: "#540640", fontWeight: "500" }} className='form-control' name="name" placeholder='Your Name' readOnly value={condata.name || ""} />
                            </div>
                            <div className="col mt-4">
                                <input type="email" style={{ color: "#540640", fontWeight: "500" }} className='form-control' name="email" placeholder='Your Email' readOnly value={condata.email || ""} />
                            </div>
                            <div className="col mt-4">
                                <input type="number" style={{ color: "#540640", fontWeight: "500" }} className='form-control' name="mno" placeholder='Your Mobile Number' readOnly value={condata.mno || ""} />
                            </div>
                        </div>
                        <textarea className="form-control" rows="5" style={{ marginTop: "30px" }} placeholder="Enter Your Message" name="msg" onChange={changeHandler}  ></textarea>

                        <input type="submit" className='btn  fs-5 text-light mt-3' value="Send Now" style={{ width: "120px", color: "white", backgroundColor: "#540640" }} />
                    </form>
                </div>


            </div>
        </>
    )
}

export default Contact