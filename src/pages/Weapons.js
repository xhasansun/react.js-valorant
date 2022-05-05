import { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Button } from 'react-bootstrap';
import "../Css/Weapons.css"
import { Link } from "react-router-dom";
import { ScrollToTop } from 'react-simple-scroll-up'



function Weapons() {

    const [weapons, setWeapons] = useState([]);

    const [fiterWeapons, setFilterWeapons] = useState("");


    const getWeapons = async () => {
        const res = await axios("https://valorant-api.com/v1/weapons")
        setWeapons(res.data.data)
        console.log(res.data.data)
    }


    /* SEARCH BAR FİLTER */
    const filtered = weapons.filter((weapon) => {
        return weapon.displayName.toString().toLowerCase().includes(fiterWeapons.toLocaleLowerCase())
    });


    useEffect(() => {
        getWeapons();
    }, [fiterWeapons])

    return (
        <div className='container weapons-wrapper'>
            <div className="search">
                <input
                    placeholder='Search Weapons'
                    value={fiterWeapons}
                    onChange={(e) => setFilterWeapons(e.target.value)}
                />
            </div>
            <div className="row">
                {
                    filtered.map((weapon, index) =>
                        <div key={weapon.uuid} className="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
                            <div className="card">
                            <ScrollToTop />
                                <div className="head">
                                    <Link className='link' to={`/weapons/${weapon.uuid}`}>
                                        <h1> {weapon.displayName} </h1>
                                        <h4> {weapon.shopData?.category} </h4>
                                        <div className="line"></div>
                                        <img style={{ width: "250px" }} src={weapon.displayIcon} alt="" />
                                    </Link>
                                </div>

                                <div className="body">
                                    <h3> {`Price ${weapon.shopData?.cost}$ `} </h3>

                                </div>
                            </div>
                        </div>
                    )
                }
                <scroll-to-top-wc activatewhen="400"></scroll-to-top-wc>
            </div>
        </div>
    )
}

export default Weapons