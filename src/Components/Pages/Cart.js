import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from '../../GlobalState'

const Cart = () => {
  const state = useContext(GlobalState)
  const [cart, setCart] = state.userAPI.cart
  const [token] = state.token
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + (item.price * item.quantity)
      },0)
      setTotal(total)
    }
    getTotal()
  }, [cart])

  const addToCart = async (cart) => {
    await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
  }

  const increment = (id) => {
    cart.forEach(item => {
      if(item._id === id){
        item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
      }
    })
    setCart([...cart])
    addToCart(cart)
  }

   const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }
  
  const removeProduct = id => {
    if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
  }

  if(cart.length === 0)
  return <h2 className="text-center py-5">Cart Is Empty !</h2>

  
    return (
      <>
        <div className="row py-5">
          {
            cart.map(product => (
              <div className="col-md-12 pb-3">
                <div className="card" key={product._id}>
                  <div className="d-flex align-items center">
                    <img src={product.images} alt="" style= {{height: "250px", objectFit: "cover", width: "220px"}} />
                    <div className="row">
                      <div className="col-md-12 py-5 pl-5">
                        <h2> {product.title} </h2>
                      </div>
                      <div className="col-md-12 pl-5" style={{marginTop: "-50px"}}>
                        <p> {product.description} </p>
                      </div>
                      <div className="col-md-12 pl-5 d-flex justify-content-between">
                        <h3> {product.price} MAD</h3>
                        <button className="btn btn-block btn-danger" onClick={() => removeProduct(product._id)} style={{width:"200px", height:'50px', borderTopLeftRadius: '20px'}} >Delete</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          
        </div>
        <div className="row">
        <div className="col-md-12 pb-4 d-flex justify-content-between align-items-center">
            <h3>Total: {total} MAD</h3>
            <button className="btn btn-block btn-warning" style={{width:"300px", height:"60px"}} >to CkeckOut</button>
          </div>

        </div>
     </>   
    )
}

export default Cart
