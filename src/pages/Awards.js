import React from 'react'
import '../components/style.css'

const Awards = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="experience">
            <div className="row my-auto">
                <div className="col-12">
                    <h2 className="text-center">Awards</h2>
                    <div className="mb-5 heading-border"></div>
                </div>
                <div className="main-experience" id="experience-box">
                    <div className="experience">
                      <div className="experience-icon"></div>
                      <div className="experience-content">
                          <span className="date">Tahun 2012 & 2013 </span>
                          <h5 className="title">Juara 2 Web Design Tingkat Kabupaten</h5>
                          <p className="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                          </p>
                     </div>
                    </div>

                    <div className="experience">
                      <div className="experience-icon"></div>
                      <div className="experience-content">
                          <span className="date">November 2018</span>
                          <h5 className="title">Android Programing (Android Studio)</h5>
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

