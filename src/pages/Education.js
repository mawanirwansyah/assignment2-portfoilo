import React from 'react'
import '../components/style.css'

const Awards = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="experience">
            <div className="row my-auto">
                <div className="col-12">
                    <h2 className="text-center">Education</h2>
                    <div className="mb-5 heading-border"></div>
                </div>
                <div className="main-experience" id="experience-box">
                    <div className="experience">
                      <div className="experience-icon"></div>
                      <div className="experience-content">
                          <span className="date">Tahun 2011-2014</span>
                          <h5 className="title">Lulusan SMK Negeri 1 Setia Janji Jurusan Rekayasa Perangkat Lunak</h5>
                          <p className="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>  
                     </div>
                    </div>

                    <div className="experience">
                      <div className="experience-icon"></div>
                      <div className="experience-content">
                          <span className="date">Tahun 2014-2017</span>
                          <h5 className="title">Lulus dari STT Sinar Husni Jurusan Teknik Informatika (S1)</h5>
                          <p className="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>
                      </div>
                    </div>

                    <div className="experience">
                      <div className="experience-icon"></div>
                      <div className="experience-content">
                          <span className="date">April 2020 - Juli 2020</span>
                          <h5 className="title">Intro To Proraming</h5>
                          <p className="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>
                      </div>
                    </div>

                  </div>
            </div>
        </section>
    )
};

export default Awards

