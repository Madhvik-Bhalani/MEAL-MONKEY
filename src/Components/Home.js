import React, { useContext } from 'react'
import reloadcontext from '../Context/Reloadcontext'
import Changepass from './Changepass'
import Footer from './Footer'
import Hero from './Hero'
import Signin from './Signin'
import Signup from './Signup'
// import Socialicon from './Socialicon'
import Speciality from './Speciality'

function Home() {
    const reloadcon = useContext(reloadcontext)
    // eslint-disable-next-line
    let { reload } = reloadcon
    return (
        <>
            <Hero />
            <Signin />
            <Signup />
            <Speciality />
            {/* <Socialicon/> */}
            <Changepass/>
            <Footer />
        </>
    )
}

export default Home