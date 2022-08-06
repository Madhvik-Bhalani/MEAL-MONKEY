import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>

      <footer className="bg-light text-center text-white footbox">
        <div className="container-fluid p-2">

          <section className="m-1">
            <a className="btn " style={{ border: "none" }} rel="noreferrer" href="https://www.facebook.com/facebook/" target={"_blank"} role="button"
            ><i className="fa-brands fa-facebook-f" style={{ color: "#1974ec" }}></i></a>

            <a className="btn   m-1" style={{ border: "none" }} rel="noreferrer" href="https://www.youtube.com/" target={"_blank"} role="button"
            ><i className="fa-brands fa-youtube" style={{ color: "#ef0000" }}></i></a>



            <a className="btn   m-1" style={{ border: "none" }} rel="noreferrer" href="https://about.instagram.com/" target={"_blank"} role="button"
            ><i className="fa-brands fa-instagram" style={{ color: "#E1306C" }}></i></a>

            <a className="btn   m-1" style={{ border: "none" }} rel="noreferrer" href="https://www.linkedin.com/in/madhvik-bhalani-a6b473230/" target={"_blank"} role="button"
            ><i className="fa-brands fa-linkedin-in" style={{ color: "#006fab" }}></i></a>


          </section>
          <h5 className='text-dark text-capitalize' > <span style={{ color: "black" }}>  designed and developed by</span> <span > <a style={{ color: "#540640", textShadow: ".5px .5px .5px black" }}  role="button" rel="noreferrer" href="https://github.com/" target={"_blank"}> &lt;&#x2f;Madhvik Bhalani&gt; </a></span></h5>

        </div>

      </footer>


    </>
  )
}

export default Footer