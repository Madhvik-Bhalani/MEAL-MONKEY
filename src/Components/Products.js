import React, { useContext, useEffect } from 'react'
import dbcon from '../Context/Dbcon'
import Item from './Item'

function Products() {
    const condb = useContext(dbcon)
    let { getproducts, pdata } = condb
    useEffect(() => {
        getproducts()
        // eslint-disable-next-line
    }, [])

    document.title="Meal Monkey-Make Your Meals Delightful"

    return (
        <>
            <div className="container-fluid  mt-3 mb-4">
                <h4 className='text-center text-capitalize mt-5' style={{fontSize:"28px",color:"#540640",textShadow:".5px .5px .5px #e99f27"}}>make your meals delightful</h4>
            
                <h5 className='text-center' style={{marginTop:"-7px"}}><span style={{fontSize:"30px",color:"#540640"}}>————</span> <span style={{color:"#e99f27",fontSize:"21px"}}>X</span> <span style={{fontSize:"30px",color:"#540640"}}>————</span></h5>
                <div className="row px-4 py-1">

                    {
                        pdata.map((elem) => {
                            return (
                                
                                <Item key={elem._id} img={elem.img} name={elem.name} desc={elem.description} seller={elem.seller} price={elem.price} product={elem}/>
                            )
                        })

                    }

                </div>
            </div>
        </>
    )
}

export default Products