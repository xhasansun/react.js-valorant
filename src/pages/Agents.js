import { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Button } from 'react-bootstrap';
import "../Css/Agents.css"
import { ScrollToTop } from 'react-simple-scroll-up'


function Agents() {

    const [agents, setAgents] = useState([]);

    const [fiterAgents, setFilterAgents] = useState("");


    const getAgents = async () => {
        const res = await axios("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
        setAgents(res.data.data)
        console.log(res.data.data)
    }


    /* SEARCH BAR FİLTER */
    const filtered = agents.filter((agent) => {
        return agent.displayName.toString().toLowerCase().includes(fiterAgents.toLocaleLowerCase())
    });


    useEffect(() => {
        getAgents();
    }, [fiterAgents])

    return (
        <div className='container agents-wrapper'>
            <div className="search">
                <input
                    placeholder='Search Agents'
                    value={fiterAgents}
                    onChange={(e) => setFilterAgents(e.target.value)}
                />
            </div>
            
            <div className="row">
                {
                    filtered.map((agent, index) =>
                        <div key={agent.uuid} className="col-lg-4 col-sm-6 col-xs-12 d-flex justify-content-center">
                            <div className="card">
                            <ScrollToTop/>
                                <div className="head">
                                        <h1> {agent.displayName} </h1>
                                        <h4> {agent.shopData?.category} </h4>
                                        <div className="line"></div>
                                        <img style={{ width: "250px" }} src={agent.displayIcon} alt="" />
                                </div>

                                <div className="body">
                                    <h3> {agent.role?.displayName} </h3>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Agents