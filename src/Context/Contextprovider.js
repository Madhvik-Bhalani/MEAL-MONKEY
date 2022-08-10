import React, { useRef, useState } from 'react'
import refcontext from './Refcontext'
import reloadcontext from './Reloadcontext'
import dbcon from './Dbcon.js'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  const [pdata, setpdata] = useState([])
  const [cdata, setcdata] = useState([])
  // const [count, setcount] = useState(0)
  let count = 0;
  if (count === 0) {
    if (localStorage.getItem("count")) {

      let newcount = parseInt(localStorage.getItem("count"))
      localStorage.setItem("count", newcount)
    }
    else {
      localStorage.setItem("count", count)

    }


  }

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
      toast.success(`your passord has been changed`, {
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
      refclosepass.current.click();
      console.log(msg);
      refopass.current.value = "";
      refnpass.current.value = "";
      refrpass.current.value = "";
    }
    else {
      toast.warn(`${msg}`, {
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

  // get products
  const getproducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/food/getproducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      const jsondata = await res.json()
      if (res.status === 200) {
        setpdata(jsondata)
      }
    } catch (e) {
      console.log("getcontact data err" + e);
    }
  }

  // add to cart
  const addtocart = async (id) => {
    try {
      const res = await fetch("http://localhost:5000/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({ id })

      })
      await res.json()
      if (res.status === 201) {


        toast.success(`added to cart`, {
          position: "top-right",
          autoClose: 500,
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
    } catch (e) {
      console.log("add to cart err" + e);
    }
  }


  // get products
  const getcartproducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/cart/getcartproducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      })
      const jsondata = await res.json()
      if (res.status === 200) {
        setcdata(jsondata)
        // console.log(jsondata);


      }
    } catch (e) {
      console.log("get cart product err" + e);
    }
  }

  // delete product from cart
  const deleteproduct = async (id) => {
    try {
      const res = await fetch("http://localhost:5000/cart/deleteproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({ id })
      })

      await res.json()
      if (res.status === 200) {
        // setcdata(jsondata)
        const newdata = cdata.filter((elem) => {
          return elem._id !== id
        })
        setcdata(newdata)

      }
    } catch (e) {
      console.log("delete product err" + e);
    }
  }
  // plus item
  const plusitem = async(id) => {
    try {

      const res = await fetch("http://localhost:5000/cart/plus", {
        headers: {
          "auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json"

        },
        method: "POST",
        body: JSON.stringify({ id })

      })
      let data = await res.json()
      if (res.status === 200) {
        console.log(data);
        let data2 = parseInt(localStorage.getItem("count"))
        localStorage.setItem("count", data2 + 1)
        setreload({})

       let newobj=JSON.parse(JSON.stringify(cdata))
        for (let index = 0; index < newobj.length; index++) {
          const elem = newobj[index];
          if(elem._id===id){
            newobj[index].quantity=data.quantity
            newobj[index].price=data.price

            break;
          }
        }
        setcdata(newobj)
      }
    }
    catch (error) {
      console.log("plus item"+error);
    }
  }
  // minus item
  const minusitem = async(id) => {
    try {

      const res = await fetch("http://localhost:5000/cart/minus", {
        headers: {
          "auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json"

        },
        method: "POST",
        body: JSON.stringify({ id })

      })
      let data = await res.json()
      if (res.status === 200) {
        console.log(data);
        let data2 = parseInt(localStorage.getItem("count"))
        localStorage.setItem("count", data2 - 1)
        setreload({})
        let newobj=JSON.parse(JSON.stringify(cdata))
        for (let index = 0; index < newobj.length; index++) {
          const elem = newobj[index];
          if(elem._id===id){
            newobj[index].quantity=data.quantity
            newobj[index].price=data.price

            break;
          }
        }
        setcdata(newobj)
      }
    }
    catch (error) {
      console.log("minus item"+error);
    }
  }
  // localStorage.setItem("count",count)
  return (
    <>
      <refcontext.Provider value={{ refin, refup, refpass, refclosepass, refopass, refnpass, refrpass }}>
        <reloadcontext.Provider value={{ reload, setreload }}>
          <dbcon.Provider value={{ getcontact, condata, changepass, getproducts, pdata, addtocart, getcartproducts, cdata, deleteproduct, count, plusitem, minusitem }}>

            {props.children}
          </dbcon.Provider>
        </reloadcontext.Provider>
      </refcontext.Provider>
    </>
  )
}

export default Contextprovider
