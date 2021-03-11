import React, {  useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import img from '../../../src/images/male.png';
import femel from '../../../src/images/female.png';
import './TemDetels.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee,} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const TemDetels = () => {
    const { idTeam } = useParams();
    const [temInfo,setTemInfo]=useState([{}]);
        useEffect(()=>{
            const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
            fetch(url)
            .then(res=>res.json())
            .then(data=>setTemInfo(data.teams[0]));
        },[idTeam])
        const{strLeague,intFormedYear,strStadiumDescription,strCountry,strSport,strGender,strYoutube,strFacebook,strTwitter}=temInfo;
    return (
        <div>
            <Card className="cad">
                <Card.Img variant="top" src={temInfo.strTeamBanner } />
            </Card>
            <Container className="detels-container">
                <Row>
                    <Col md={6} sm={12}>
                        <h1 className="league">{strLeague}</h1>
                        <h2>Founded: {intFormedYear}</h2>
                        <h2>Country: {strCountry}</h2>
                        <h2>sprot Type: {strSport}</h2>
                        <h2>Gander: {strGender}</h2>
                    </Col>
                    <Col md={6} sm={12}>
                  <div className="gender">
                  {
                    strGender === 'Male' ? <img src={img} alt=""/> : <img src={femel} alt=""/>
                }
                  </div>
            </Col>
                </Row>
                  <div className="social">
                  <a  href={strFacebook} target="_blank"> <FontAwesomeIcon icon={faFacebookF} /></a>
                     <a  href={strYoutube} target="_blank">  <FontAwesomeIcon icon={faYoutube} /></a>
                     <a  href={strTwitter} target="_blank">   <FontAwesomeIcon icon={faTwitter} /></a>
                  </div>
            </Container>
            <Container className="teminfo">
                    <Row>
                      <Col md={12} sm={12}>
                          <p>{strStadiumDescription}</p>
                      </Col>
                  </Row>
            </Container>
        </div>
    );
};

export default TemDetels;