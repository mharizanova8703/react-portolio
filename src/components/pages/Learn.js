import React from "react";
import ResumePNG from "../../assets/resume.png"



function Learn() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+6784382224" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="mailto:mharizanova@yahoo.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com/in/mariya-harizanova-a9651b219/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com/mharizanova8703" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="https://onedrive.live.com/view.aspx?resid=4354D16D7A94E264!138&ithint=file%2cdocx&authkey=!AP6SUoPZ4i2klgI"><h1 className="text-center mt-2">View Here</h1></a>

        </div>
      </div>
    </div >
  );
}
export default Learn;