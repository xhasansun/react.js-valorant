import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Button } from 'react-bootstrap';
import "../Css/Home.css"
import {FaTwitter,FaGithub,FaLinkedinIn} from 'react-icons/fa'

function Home() {
    return (
        <div className="container-fluid">
            <div className="row h-100">
                <div className="content-wrapper">
                    <div className="main">
                        <img src={"https://img.icons8.com/ios/500/valorant.png"} alt="" />
                        <h1>VALORANT</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="contact">
                    <div className="twitter">
                        <a href="https://twitter.com/xhasansun" target={'_blank'}>
                            <FaTwitter/>
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/xhasansun" target={'_blank'}>
                            <FaGithub/>
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/xhasansun/" target={'_blank'} > 
                            <FaLinkedinIn/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home