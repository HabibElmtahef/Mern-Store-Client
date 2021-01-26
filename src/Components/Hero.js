import {motion} from 'framer-motion'
import React from 'react'

const Hero = () => {
    return (
        <div className="row py-4 align-items-center">
            <motion.div className="col-md-6"
            initial = {{ x: -200 }}
            animate = {{ x:0 }}
            transition = {{duration: 1}}
            >
                <h2 style={{fontWeight: "900"}} >One Of The Best Shops In Morocco</h2>
                <div className="d-flex">
                    <button className="hero-btn btn btn-block btn-danger">Hb</button>
                    <button className="hero-btn btn btn-block btn-warning">Hb</button>
                </div>
            </motion.div>
            <motion.div className="col-md-6"
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition= {{duration: 1}}
            >
                <img src="https://kit8.net/images/thumbnails/580/435/detailed/1/Online_store_1@2x.png" alt="" style={{height: "500px"}} />
            </motion.div>
        </div>
    )
}

export default Hero
