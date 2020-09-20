import React from 'react'

import '../components/style.css';
import HTML  from '../components/Skills/html'
import CSS  from '../components/Skills/css'
import JS  from '../components/Skills/js'
import PHP  from '../components/Skills/php'

const Skills = () => {
    return (
        <section className="resume-section p-3 p-lg-5 " id="experience">
        <div className="row my-auto">
            <div className="col-12">
              <h2 className="  text-center">SKILLS</h2>
              <div className="mb-5 heading-border"></div>
            </div>
            <div className="resume-item col-md-3" > 
              <div>
                <div className=" resume-content mr-auto">
                    <p><HTML src={HTML} alt={HTML}/></p>
                </div>
              </div>  
            </div>

            <div className="resume-item col-md-3" > 
              <div>
                <div className=" resume-content mr-auto">
                    <p><CSS src={CSS} alt={CSS}/></p>
                </div>
              </div>  
            </div>

            <div className="resume-item col-md-3" > 
              <div>
                <div className=" resume-content mr-auto">
                    <p><JS src={JS} alt={JS}/></p>
                </div>
              </div>  
            </div>

            <div className="resume-item col-md-3" > 
              <div>
                <div className=" resume-content mr-auto">
                    <p><PHP src={PHP} alt={PHP}/></p>
                </div>
              </div>  
            </div>
            
        </div>
    </section>
    )
};

export default Skills;

