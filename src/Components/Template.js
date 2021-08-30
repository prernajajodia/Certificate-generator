import React from "react";
import "../App.css";

function Template() {
  return (
    <div>
      <h1 id="cert-title">Certificate of Proficiency</h1>
      <br />
      <br />
      <br />
      <br />

      <p className="smaller" id="cert-declaration">
        THIS IS TO CERTIFY THAT
      </p>

      <h1 id="cert-holder">Firstname Surname</h1>

      <p className="smaller" id="cert-completed-line">
        has successfully completed the
      </p>

      <h2 id="cert-course">Course in Question</h2>

      <div id="cert-desc">
        <p className="smaller" id="cert-details">
          which includes the knowledge of English for Technical Conversations,
          Applied Mathematics, General Robotics Science, Basic Computing, Web
          Mobile Development and Basic User Interface Design.
        </p>
      </div>

      <br />
      <p id="cert-from" className="smaller">
        &nbsp; from www.companywebsite.com
      </p>

      <br />
      <p className="smaller" id="cert-issued">
        {/* <b>Issued on:</b> {{ date }}. */}
      </p>

      <div id="cert-footer">
        <div id="cert-issued-by">
          <img
            id="cert-stamp"
            src="https://i7.pngguru.com/preview/585/794/452/paper-rubber-stamp-postage-stamps-company-seal-seal-thumbnail.jpg"
          />
          <hr />
          <p>
            Issued by
            <br />
            THE COMPANY S.L.
          </p>
        </div>
        <div id="cert-ceo-design">
          <img
            id="cert-ceo-sign"
            src="https://i7.pngguru.com/preview/585/794/452/paper-rubber-stamp-postage-stamps-company-seal-seal-thumbnail.jpg"
          />
          <hr />
          <p>
            Company Ceo
            <br />
            CEO of The Company
          </p>
        </div>
      </div>

      <div id="cert-verify">
        Verify at companywebsite.ai/verify/XYZ12ER56129F. <br />
        Company has confirmed the participation of this individual in the
        course.
      </div>
    </div>
  );
}

export default Template;
