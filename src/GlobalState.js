import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import {createContext} from "react";
import ProductsAPI from "./api/ProductsAPI";
import UserAPI from "./api/UserAPI";


export const GlobalState = createContext()

export const DataProvider = ({children}) => {

   const [token, setToken] = useState(false)
    
   const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            
            refreshToken()
        }
    },[])


    
    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        userAPI: UserAPI(token),
    }
    

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}