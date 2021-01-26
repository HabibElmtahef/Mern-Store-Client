import React, {useContext} from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../GlobalState'
import ProductItem from './ProductItem'
import { motion } from 'framer-motion'


const ProductDetails = () => {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    //const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])
    console.log(detailProduct)

    if(detailProduct.length === 0) return null;
    

    return (
        <div>
        <div className="row py-5">
            <div className="col-md-5">
                <motion.img className="detail__img pr-5" src={detailProduct.images} alt="" style={{borderRadius: "15px"}} initial={{
                    x:-200
                }} 
                    animate={{
                        x:0
                    }}
                    transition={{
                        duration:0.5
                    }}
                />
            </div>
            <motion.div className="col-md-7 pl-5" initial={{
                //x: 200
                opacity: 0
            }}
              animate={{
                  //x: 0
                  opacity: 1
              }}
              transition={{
                  duration: 1
              }}
             >
                <h2> {detailProduct.title} </h2>
                <h5 className="py-2"> {detailProduct.description} </h5>
                <h5 className="py-2">Solde: {detailProduct.sold}</h5>
                <h3 className="py-2"> {detailProduct.price} MAD </h3>
                <div className="d-flex py-3" style={{alignItems: "center"}}>
                    <button className="btn btn-block btn-danger mr-3" style={{width:"200px"}} ><i className='bx bxs-cart-add'></i> Add To Cart</button>
                    <button className="btn btn-block btn-warning" style={{width:"200px", marginTop:"-1px"}}><i class='bx bx-star'></i>Add To WishList</button>
                </div>
            </motion.div>
        </div>
            <h2>Related Products</h2>
            <motion.div className="row py-4" initial={{
                opacity: 0
            }} 
              animate={{
                  opacity: 1
              }}
              transition={{
                  duration: 1
              }}
            >
            {products.map(item => {
                return item.category === detailProduct.category ? <ProductItem key={item._id} product={item} />
                : null
            })}
        </motion.div>
        </div>
    )
}

export default ProductDetails
