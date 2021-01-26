import Axios from 'axios'
import React from 'react'
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

const Signin = () => {
    const [user, setUser] = useState({
        email:'', password:''
    })


    const onChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }

    const history = useHistory()

    const loginSubmit = async e => {
        e.preventDefault();
        try {
            await Axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            //history.push('/')
            window.location.href = "/"

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
                <form onSubmit={loginSubmit} >
                    <label className='pr-2'>Email :</label>
                    <div className="form-group">
                        <input type="text" value={user.email} name="email" placeholder="Email" className="form-control" onChange={onChangeInput} />
                    </div>
                
                    <label className='pr-2'>Password :</label>
                    <div className="form-group">
                        <input type="password" value={user.password} name="password" placeholder="Password" className="form-control" onChange={ onChangeInput } />
                    </div>
             
                    <button className="btn btn-block bg-dark text-white h4 font-weight-bold">Sign In</button>
                    <h5 className="py-4">If you don't have Acount,You can <Link to='/register'><a style= {{color : 'gold', fontWeight: 'bold'}} >Sign Up</a></Link></h5>
              </form>  
            </div>
        </div>
        </div>
        </div>
    )
}

export default Signin
