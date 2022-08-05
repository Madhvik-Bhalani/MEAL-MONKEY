import React, { useRef, useState } from 'react'
import refcontext from './Refcontext'
import reloadcontext from './Reloadcontext'
import dbcon from './Dbcon.js'


function Contextprovider(props) {
  const refin = useRef(null)
  const refup = useRef(null)
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
        localStorage.setItem("name",jsondata.name.toString())
      }
    } catch (e) {
      console.log("getcontact data err" + e);
    }
  }

  return (
    <>
      <refcontext.Provider value={{ refin, refup }}>
        <reloadcontext.Provider value={{ reload, setreload }}>
          <dbcon.Provider value={{ getcontact, condata }}>
            {props.children}
          </dbcon.Provider>
        </reloadcontext.Provider>
      </refcontext.Provider>
    </>
  )
}

export default Contextprovider
