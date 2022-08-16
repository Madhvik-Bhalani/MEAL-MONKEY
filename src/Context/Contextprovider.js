import React, { useRef, useState } from 'react'
import refcontext from './Refcontext'
import reloadcontext from './Reloadcontext'
import dbcon from './Dbcon.js'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


function Contextprovider(props) {

  const refin = useRef(null)
  const refup = useRef(null)
  const refpass = useRef(null)
  const refclosepass = useRef(null)
  const refopass = useRef(null)
  const refnpass = useRef(null)
  const refrpass = useRef(null)
  const refloc = useRef(null)
  const reflocclose = useRef(null)
  const reflocsub = useRef(null)
  const [reload, setreload] = useState({})
  const [condata, setcondata] = useState({})
  const [pdata, setpdata] = useState([])
  const [cdata, setcdata] = useState([])
  const [odata, setodata] = useState([])
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
        // console.log(jsondata);
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
      // console.log(msg);
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


        toast.success(`item added to cart`, {
          position: "top-right",
          autoClose: 300,
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
        localStorage.setItem("cartamt", jsondata[0].cartamt) //for update cart amount
        // console.log(jsondata);


      }
    } catch (e) {
      // console.log("get cart product err" + e);
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
  const plusitem = async (id) => {
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
        let data2 = parseInt(localStorage.getItem("count"))
        localStorage.setItem("count", data2 + 1)
        setreload({}) //for nav re-render

        localStorage.setItem("cartamt", data.cartamt) //update cart

        let newobj = JSON.parse(JSON.stringify(cdata))
        for (let index = 0; index < newobj.length; index++) {
          const elem = newobj[index];
          if (elem._id === id) {
            newobj[index].quantity = data.quantity
            newobj[index].price = data.price

            break;
          }
        }
        setcdata(newobj)
      }
    }
    catch (error) {
      console.log("plus item" + error);
    }
  }
  // minus item
  const minusitem = async (id) => {
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
        let data2 = parseInt(localStorage.getItem("count"))
        localStorage.setItem("count", data2 - 1)
        setreload({})
        localStorage.setItem("cartamt", data.cartamt)//update cart amount

        if (data.quantity === 0) {
          deleteproduct(id) //delete product 

        }
        let newobj = JSON.parse(JSON.stringify(cdata))
        for (let index = 0; index < newobj.length; index++) {
          const elem = newobj[index];
          if (elem._id === id) {
            newobj[index].quantity = data.quantity
            newobj[index].price = data.price

            break;
          }
        }
        setcdata(newobj)
      }
    }
    catch (error) {
      console.log("minus item" + error);
    }
  }

  // empty cart
  const deleteall = async () => {
    try {
      const res = await fetch("http://localhost:5000/cart/deleteall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      })

      await res.json()
      if (res.status === 200) {
        localStorage.setItem("count", 0) //empty all
        setcdata([])
      }
    } catch (e) {
      console.log("delete all err" + e);
    }
  }
  // put quantity
  const putqty = async (qty) => {
    try {
      const res = await fetch("http://localhost:5000/cart/putqty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({ qty })
      })
      await res.json()
      if (res.status === 200) {
        // console.log("set qty");
      }
    } catch (e) {
      console.log("put qty err" + e);

    }
  }
  // get quantity
  const getqty = async (id) => {
    try {
      const res = await fetch("http://localhost:5000/cart/getqty", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      })
      const data = await res.json()
      if (res.status === 200) {

        if (data === null) { //jyare cart ma entery no padi hoy to user id na hoy to response null male

          localStorage.setItem("count", 0)
        } else {
          localStorage.setItem("count", data.totalqty) //if userid's data availabel then put updated qty from table

        }

      }
    } catch (e) {
      console.log("put qty err" + e);

    }
  }

  // post for transfer data cart to your order
  let navigate = useNavigate()
  const yourorder = async (hno, area, pin, cod, city) => {
    try {
      const res = await fetch("http://localhost:5000/yourorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({ hno, area, pin, cod, city })
      })
      await res.json()
      if (res.status === 201) {
        localStorage.setItem("count", 0)

        Swal.fire({
          title: 'Order Has Been placed!',
          text: 'Your order will be delivered in next 30 minutes',
          icon: 'success',
          confirmButtonColor: "#2ec780",
         
        })
        navigate('/yourorder');
      }
    } catch (e) {
      console.log(`your order err ${e}`);

    }
  }

  // getyourorder
  const getyourorder = async () => {
    try {
      const res = await fetch("http://localhost:5000/yourorder/getorders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      })
      const jsondata = await res.json()
      if (res.status === 200) {
        setodata(jsondata)
      }
    } catch (e) {

      console.log(`get your order err ${e}`);
    }
  }

  return (

    <>
      <refcontext.Provider value={{ refin, refup, refpass, refclosepass, refopass, refnpass, refrpass, refloc, reflocclose, reflocsub }}>
        <reloadcontext.Provider value={{ reload, setreload }}>
          <dbcon.Provider value={{ getcontact, condata, changepass, getproducts, pdata, addtocart, getcartproducts, cdata, deleteproduct, count, plusitem, minusitem, deleteall, putqty, getqty, yourorder, getyourorder, odata }}>

            {props.children}
          </dbcon.Provider>
        </reloadcontext.Provider>
      </refcontext.Provider>
    </>
  )
}

export default Contextprovider
