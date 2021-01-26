import Axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'

function ProductsAPI () {
    const [products, setProducts] = useState([])
    
    const getProducts = async () => {
        const res = await Axios.get(`/API/products`)
        
        setProducts(res.data.products)
    }
    useEffect(() => {
        getProducts()
    }, [])
    
    return {
    products: [products, setProducts]    
    }
}

export default ProductsAPI
