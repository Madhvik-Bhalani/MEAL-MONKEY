import React, { useContext } from 'react'
import reloadcontext from '../Context/Reloadcontext'
import Hero from './Hero'
import Offeres from './Offeres'
import Products from './Products'
import Signin from './Signin'
import Signup from './Signup'
// import Socialicon from './Socialicon'
import Speciality from './Speciality'

function Home() {
    const reloadcon=useContext(reloadcontext)
    // eslint-disable-next-line 
    let {reload}=reloadcon
    return (
        <>
            {!localStorage.getItem("token")&&<Hero />}
            {localStorage.getItem("token")&&<Offeres/>}
            <Signin />
            <Signup />
            {!localStorage.getItem("token")&&<Speciality />}
            {localStorage.getItem("token")&& <Products/> }
            
            {/* <Socialicon/> */}
            
        </>
    )
}

export default Home