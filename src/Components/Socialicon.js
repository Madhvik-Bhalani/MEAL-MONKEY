import React from 'react'
import './Socialicon.css'

function Socialicon() {
    return (
        <>
            <div className="icons">
                <a href="https://www.facebook.com/" className="fb">click to visit <i className="fab fa-facebook fb"></i> </a>
                <a href="https://telegram.org/" className="tele">click to visit <i className="fab fa-telegram-plane tele"></i></a>
                <a href="https://www.instagram.com/accounts/login/" className="insta">click to visit <i className="fab fa-instagram insta"></i></a>
                <a href="http://surl.li/ayaxp" className="link">click to visit <i className="fab fa-linkedin link"></i></a>

            </div>
        </>
    )
}

export default Socialicon