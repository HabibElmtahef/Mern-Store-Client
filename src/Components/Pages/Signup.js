import Axios from 'axios'
import React from 'react'
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

const Signup = () => {
    const [user, setUser] = useState({
        name:'', email:'', password:''
    })

    const onChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }
    
    const history = useHistory()

    const registerSubmit = async e => {
        e.preventDefault();
        try {
            await Axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)
            history.push('/')
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="row py-5">
            <div className="col-md-8 m-auto">
        
        <div className="card ">
            <div className="card-body d-flex flex-column">
                <h1 className="m-auto">Sign In</h1>
                <form onSubmit={registerSubmit} >
                    <label className='pr-2'>Name :</label>
                    <div className="form-group">
                        <input type="text" value={user.name} name="name" placeholder="Name" className="form-control" onChange={onChangeInput} />
                    </div>
                     
                    <label className='pr-2'>Email :</label>
                    <div className="form-group">
                        <input type="text" value={user.email} name="email" placeholder="Email" className="form-control" onChange={onChangeInput} />
                    </div>
                
                    <label className='pr-2'>Password :</label>
                    <div className="form-group">
                        <input type="password" value={user.password} name="password" placeholder="Password" className="form-control" onChange={onChangeInput} />
                    </div>
             
                    <button className="btn btn-block bg-dark text-white h4 font-weight-bold">Sign In</button>
                    <h5 className="py-4">If you Already have Acount,You can <Link to='/login'><a style= {{color : 'gold', fontWeight: 'bold'}} >Sign In</a></Link></h5>
              </form>  
            </div>
        </div>
        </div>
        </div>
    )
}

export default Signup
