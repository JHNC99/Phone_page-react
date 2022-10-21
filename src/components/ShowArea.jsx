import React from 'react'
import iphone from '../img/iphone.png';
const ShowArea = () => {

    return (
        <div className="showcase-area">
            <div className="container">
                <div className="left">
                    <div className="big-title">
                        <h1 className="animate__animated animate__backInLeft">
                            Future is here,
                        </h1>
                        <h1 className="animate__animated animate__backInRight">Start Exploring now.</h1>
                    </div>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Delectus eius distinctio odit, magni magnam qui ex perferendis
                        vitae!
                    </p>
                    <div className="cta">
                        <a href="#" className="btn">Get started</a>
                        <a href="#" className="btn btn-gost">
                            <i className="fa-sharp fa-solid fa-play"></i> Watch video
                        </a>
                    </div>
                </div>

                <div className="right">
                    <img src={iphone} alt="Iphone Image" className="person" />
                </div>
            </div>
        </div>
    )
}

export default ShowArea