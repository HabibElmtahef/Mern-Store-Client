import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../GlobalState'
import BtnRender from './utils/BtnRender'

const ProductItem = ({product, isAdmin, deleteProduct, handleCheck}) => {
    return (
        <div className="col-md-4 pb-4">
          <div className="card" style={{ borderRadius: '20px' }}>
          {
              isAdmin && <input type="checkbox" checked={product.checked}
              onChange = { () => handleCheck(product._id)} />
          }
              <img src={product.images} alt="" className="card-img-top" style={{height: "180px", objectFit: "contain"}} />
              <div className="card-body">
                  <h4 className="card-title"> {product.title} </h4>
                  <h5> {product.price} MAD</h5>
                   <BtnRender product={product} />
              </div>
          </div>
        </div>
    )
}

export default ProductItem
