import React from 'react'
import './Offeres.css'
import img1 from '../Assets/1.png'
import img2 from '../Assets/2.png'
import img3 from '../Assets/3.png'
import img4 from '../Assets/4.png'
import img5 from '../Assets/5.png'
import img6 from '../Assets/6.png'
import img7 from '../Assets/7.png'
import img8 from '../Assets/8.png'
import img9 from '../Assets/9.png'
import img10 from '../Assets/10.png'
import img11 from '../Assets/11.png'
import img12 from '../Assets/12.png'
import img13 from '../Assets/13.webp'
import img14 from '../Assets/14.webp'
import img15 from '../Assets/15.webp'

function Offeres() {
    return (
        <>

            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" ride="true" pause="hover">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className='container-fluid d-flex justify-content-center divHome text-light g-0'>
                            <div className="container row mx-3 d-flex justify-content-center">
                                <img className='col-md-3 homeimg mx-3 my-5' src={img1} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img2} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img11} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className='container-fluid d-flex justify-content-center divHome text-light g-0'>
                            <div className="container row mx-3 d-flex justify-content-center">
                                <img className='col-md-3 homeimg mx-3 my-5' src={img5} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img6} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img15} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img8} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className='container-fluid d-flex justify-content-center divHome text-light g-0'>
                            <div className="container row mx-3 d-flex justify-content-center">
                                <img className='col-md-3 homeimg mx-3 my-5' src={img13} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img10} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img3} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img12} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className='container-fluid d-flex justify-content-center divHome text-light g-0'>
                            <div className="container row mx-3 d-flex justify-content-center">
                                <img className='col-md-3 homeimg mx-3 my-5' src={img9} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img14} alt="" />
                                <img className='col-md-3 homeimg mx-3 my-5' src={img7} alt="" />
                            
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Offeres