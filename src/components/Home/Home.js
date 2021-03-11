import React, { useEffect, useState } from 'react';
import ClubList from '../ClubList/ClubList';
import img from '../../images/sportsfullgroup.jpg';
import './Home.css';

const Home = () => {
    const [clubs , setClub]= useState([]);
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setClub(data.teams));
    },[])
    
    return (
        <div>
            
            <div className="home-benar">
                <img src={img} alt=""/>
            </div>
       
            {
                clubs.map(club=><ClubList club={club}></ClubList>)
            }
        
        </div>
    );
};

export default Home;