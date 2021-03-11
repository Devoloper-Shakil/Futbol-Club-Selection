import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './ClubList.css';

const ClubList = (props) => {
    console.log(props)
    const{idTeam,strTeamBadge,strTeam,strSport}=props.club;
    return (
 
        <div className="club-list">  
            <Card  style={{ width: '18rem',float: 'left',margin:"39px", background:"gray",color:"wheat"}}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body style={{textAlign:"center",fontSize:"20px"}}>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                    sprot Type: {strSport}
                    </Card.Text>
                    <Link to={`/idTeam/${idTeam}`}><Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                </Card.Body>
            </Card>
        </div>
     
    );
};

export default ClubList;