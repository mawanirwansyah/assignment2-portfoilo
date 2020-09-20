import React from 'react'

import '../components/style.css'
import BALL from '../components/img/ball'
import BADMINTON from '../components/img/badminton'

const Interest = () => {
    return (
<div className="wrapper">
    <div className="row my-4">&nbsp;</div>
     <div className="row">
        <div className="container-fluid">
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-sm-6 col-xs-6 animated fadeInDown">
                      <center><BALL src={BALL} alt={BALL}/></center> 
                    </div>
                    <div className="col-sm-6 col-xs-6 text-justify animated fadeInRight">
                        <h5>Foot Ball</h5>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="container">
                    <br /><br /><br />
                </div>
                <div className="row">
                    <div className="col-sm-6 col-xs-6 text-justify animated fadeInLeft">
                        <h5>Badminton</h5>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="col-sm-6 col-xs-6 animated fadeInUp">
                      <center><BADMINTON src={BADMINTON} alt={BADMINTON}/></center> 
                    </div>
                </div>

            </div>
        </div>

        
    </div>


  </div>
    )
};

export default Interest

