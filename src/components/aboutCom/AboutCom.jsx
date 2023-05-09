import React from 'react'
import "./aboutCom.scss"

import group from "../../assests/group.jpg"

const AboutCom = () => {
    return (
        <>
            <div className='aboutCom container-fluid'>
                <div className='row'>
                    <div className='col-6 imageSection'>

                      <img src={group} alt="" />

                    </div>
                    <div className='col-6 aboutText'>
                       <section>About</section>

                        <p>
                            <strong>'' For those who wish to build the future of their dreams.''</strong> <br /><br />
                            The Entrepreneurship Cell of Jabalpur Engineering College is here to cater to your needs, and help you create a way to pursue your dreams.
                            Your will and the proper guidance together will help you build a better future for yourself and society. Entrepreneurship is not just the creation or extraction of economic values but a pathway to India's socioeconomic development.
                            We are the future, we have crazy ideas to solve the problems of our society.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCom