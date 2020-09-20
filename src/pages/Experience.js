import React from 'react'
import '../components/style.css'

const Experience = () => {
    return (
        <section className="resume-section p-3 p-lg-5 " id="experience">
          <div className="row my-auto">
              <div className="col-12">
                <h2 className="  text-center">Experience</h2>
                <div className="mb-5 heading-border"></div>
              </div>
              <div className="resume-item col-md-6 col-sm-12 " > 
                <div className="card mx-0 p-4 mb-5">
                  <div className=" resume-content mr-auto">
                      <h4 className="mb-3"><i className="fa fa-globe mr-3 text-info"></i>Peternak Dan Petani</h4>
                      <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  </div>
                  <div className="resume-date text-md-right">
                      <span className="text-primary">Sejak Kelas 3 SD Sampai 2015</span>
                  </div>
                </div>  
              </div>
              <div className="resume-item col-md-6 col-sm-12">
                <div className="card mx-0 p-4 mb-5">
                  <div className="resume-content mr-auto">
                      <h4 className="mb-3"><i className="fa fa-laptop mr-3 text-warning"></i>  IT Support di SMKN1 Setia Janji</h4>
                      <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  </div>
                  <div className="resume-date text-md-right">
                      <span className="text-primary">2014 - 2015</span>
                  </div>
                </div>  
              </div>
              <div className="resume-item col-md-6 col-sm-12">
                <div className="card mx-0 p-4 mb-5">
                  <div className="resume-content mr-auto">
                      <h4 className="mb-3"><i className="fa fa-camera mr-3 text-success"></i> Tenaga Pengajar Honorer</h4>
                      <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  </div>
                  <div className="resume-date text-md-right">
                      <span className="text-primary">2014 - 2016</span>
                  </div>
                </div>  
              </div>
              <div className="resume-item col-md-6 col-sm-12">
                <div className="card mx-0 p-4 mb-5">
                  <div className="resume-content mr-auto">
                      <h4 className="mb-3"><i class="fa fa-area-chart mr-3 text-primary"></i> Clerk bidang IT di PT INALUM (Persero)</h4>
                      <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                  </div>
                  <div className="resume-date text-md-right">
                      <span className="text-primary">Desember 2016 - Sekarang</span>
                  </div>
                </div>  
              </div>
          </div>
      </section>
    )
};

export default Experience

