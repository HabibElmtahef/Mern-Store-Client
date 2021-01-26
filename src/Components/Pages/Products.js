import React, {useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import ProductItem from '../ProductItem'
import Hero from '../Hero'
const Products = () => {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    console.log(state)
    return (
        <>
        <Hero/>
        <h2 className="text-center">Our Products</h2>
        <div className="row py-5">
            {products.map(item => (
                <ProductItem product={item} key={item._id}/>
            ))}
        </div>
        </>
    )
}

export default Products
