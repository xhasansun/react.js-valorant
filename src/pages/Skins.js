import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Button } from 'react-bootstrap';
import "../Css/Skins.css"
import { ScrollToTop } from 'react-simple-scroll-up'

function Skins() {

    const [skins, setSkins] = useState([]);

    const getSkins = async (weapon_id) => {
        const res = await axios(`https://valorant-api.com/v1/weapons/${weapon_id}`)
        setSkins(res.data.data.skins)
        console.log("skin weapon veri geldi", res.data.data); // bu gelen veri
    }


    const params = useParams();
    const { uuId } = params;

    useEffect(() => {
        // console.log("parametre degisti", params)
        getSkins(uuId);
    }, [params])

    return (
        <div className='container skins'>
            <div className="row justify-content-center">
                            {
                skins?.map((skin) =>
                    <div key={skin.uuid} className="col-md-7 col-sm-12 d-flex justify-content-center">
                        <div className="card">
                        <ScrollToTop />
                            <div className="head">
                                <img src={skin.displayIcon} alt="" />
                            </div>
                            <div className="body">
                                <h1> {skin.displayName} </h1>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Skins