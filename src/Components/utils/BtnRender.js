import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'

const BtnRender = ({product, deleteProduct}) => {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
    return (
        <div className="d-flex">
        {
            isAdmin ?
            <> 
            <Link to='#!' onClick= { () => deleteProduct(product._id)}> <button className="card__btn btn btn-block btn-danger">Delete</button> </Link>
                    <Link to={`/edit_product/${product._id}`}> <button className="card__btn btn btn-block btn-warning">Buy</button> </Link>
            </> :
            <> 
            <Link to={`/details/${product._id}`}> <button className="card__btn btn btn-block btn-success">Check</button> </Link>
                    <Link to="#!" onClick={() => addCart(product)} > <button className="card__btn btn btn-block btn-warning">Buy</button> </Link>
            </> 
        }
                    

                   </div>
    )
}

export default BtnRender
