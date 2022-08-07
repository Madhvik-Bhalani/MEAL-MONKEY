import React, { useRef, useState } from 'react'
import refcontext from './Refcontext'
import reloadcontext from './Reloadcontext'
import alertcontext from './Alertcontext'
import dbcon from './Dbcon.js'


function Contextprovider(props) {
  const refin = useRef(null)
  const refup = useRef(null)
  const refpass = useRef(null)
  const refclosepass = useRef(null)
  const refopass = useRef(null)
  const refnpass = useRef(null)
  const refrpass = useRef(null)
  const [reload, setreload] = useState({})
  const [condata, setcondata] = useState({})


  // 1.get use details for contact page
  const getcontact = async () => {
    try {
      const res = await fetch("http://localhost:5000/details/getcontact", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      })
      const jsondata = await res.json()
      if (res.status === 200) {
        console.log("run stTE");
        setcondata(jsondata)
        localStorage.setItem("name", jsondata.name.toString())
      }
    } catch (e) {
      console.log("getcontact data err" + e);
    }
  }

  // 2.change password
  const changepass = async (opass, npass, rpass) => {

    const res = await fetch("http://localhost:5000/auth/changepass", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ opass, npass, rpass })
    })
    const msg = await res.json()
    if (res.status === 200) {
      refclosepass.current.click();
      console.log(msg);
      refopass.current.value = "";
      refnpass.current.value = "";
      refrpass.current.value = "";
      disalert("change password","your password has been changed.!")
    }
    else{
      disalert("change password",msg)


    }
  }


  // alert 
  const [alert, setalert] = useState(false )
  const disalert = (page, msg) => {
    setalert({
      page: page,
      msg: msg
    })

    setTimeout(() => {
      setalert(false)
    }, 4000);

  }
  return (
    <>
      <refcontext.Provider value={{ refin, refup, refpass, refclosepass, refopass, refnpass, refrpass }}>
        <reloadcontext.Provider value={{ reload, setreload }}>
          <dbcon.Provider value={{ getcontact, condata, changepass }}>
            <alertcontext.Provider value={{ alert, disalert }}>
              {props.children}
            </alertcontext.Provider>
          </dbcon.Provider>
        </reloadcontext.Provider>
      </refcontext.Provider>
    </>
  )
}

export default Contextprovider
