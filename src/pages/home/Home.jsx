import React from 'react'
import "./home.scss"

import logo from "../../assests/logo.png"
import bg from  "../../assests/ecellBg.jpeg"
import AboutCom from '../../components/aboutCom/AboutCom'

const Home = () => {
    return (
        <>
            <div className='home'>

            <img id='bg' src={bg} alt="" />

                <div className='textCon'>
                    <img src={logo} alt="" />
                    <h1><span>E</span>-cell</h1>
                    <h1>JEC Jabalpur</h1>
                    <h2>Onwards, Creating Economy Drivers</h2>
                </div>


            </div>
                <AboutCom/>
        </>
    )
}

export default Home