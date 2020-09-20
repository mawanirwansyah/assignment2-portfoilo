import React from 'react'
import {
    Link
  } from 'react-router-dom'

import Profile from '../components/avatar/Profile'
import '../components/style.css';
import Button from '../components/Button/Button';

const Home = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="home">
        <div className="my-auto" >
            <div className="row featurette">
                <p className="text-left ml-4">
                <Profile src={Profile} alt={Profile}/>  
                <h1><span className="text-success">MAWAN </span>
                <span className="text-primary">IRWANSYAH</span></h1>
                </p>
                
            </div>
            <div className="row featurette">
            <p className="text-left ml-4">
                <h3 className="text-info">Welcome To My Portfolio</h3></p>
            </div>
           
            <div className="row featurette">
            <p className="text-left ml-4">
            <Link to="/about"><Button primary="primary" text="About Me"></Button></Link>
            </p>
            </div>

        </div>
        </section>
    )
};
export default Home