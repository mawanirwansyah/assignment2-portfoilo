import React from 'react'

import Facebook from '../components/avatar/Facebook'
import Twitter from '../components/avatar/Twitter'
import Instagram from '../components/avatar/Instagram'
import Whatsapp from '../components/avatar/IT'
import '../components/style.css'

const About = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto" >
            <div className="row featurette">
                <p className="text-left ml-4">  
                <h1>MAWAN
                <span className="text-primary">IRWANSYAH</span>
              </h1>
                    <br></br>
                    <div className="col-md-8">
                    <p className="text-left text-dark">
                        <h5><b><span className="text-success">WORK WITH THE INTENTION OF WORSHIP</span>, THE WORLD AND THE HEREAFTER THAT YOU WILL DEFINITELY ACHIEVE TOGETHER, BISMILLAH
                          </b></h5>
                          <p align="justify"><br /><br />
                            <b>I am experienced in farming, because since childhood I was trained and raised by a family of farmers, besides that farming is my hobby. 
                            I grow ornamental plants in my house <br />
                            I also have a little expertise in programming, including HTML, CSS, and PHP. well, I will combine my expertise with my hobby, 
                            which is to create a marketing system for ornamental plants that I am involved in</b></p>  
                    </p>

                <div className="col-md-10 col-sm-12 mt-5">
                    <div className="row">
                     <div className="col-md-5">
                       <div className="contact-cont3"> 
                         <div className="contact-add contact-box-desc">
                          <h3><i className="fa fa-map-marker cl-atlantis fa-2x"></i> Address</h3>
                          <p>Komplek Perumahan Tanjung Gading, U29-11<br />
                           Sei Suka, Batubara <br /></p>
                         </div>
                        </div>
                     </div>
                     <div className="col-md-5">
                       <div className="contact-cont2"> 
                        <div className="contact-add contact-box-desc">
                         <h3><i className="fa fa-map-marker cl-atlantis fa-2x"></i> Phone & Email</h3>
                         <p>081370807953<br />
                         mawanirwansyah88@gmail.com<br /></p>
                        </div>
                       </div>
                     </div>
                    </div> 
                </div> 

                    <div><Facebook src={Facebook} alt={Facebook}/>
                         <Twitter src={Twitter} alt={Twitter}/>
                         <Instagram src={Instagram} alt={Instagram}/>
                         <Whatsapp src={Whatsapp} alt={Whatsapp}/></div>
                  </div>
                  </p>
                </div>
            </div>
        </section>
    )
};

export default About
