import React from "react";
import "../Template.css";
import Paper from "@material-ui/core/Paper";

function Template(props) {
  return (
    // <div>
    //   <h1 id="cert-title">Certificate of Proficiency</h1>
    //   <br />
    //   <br />
    //   <br />
    //   <br />

    //   <p classNameName="smaller" id="cert-declaration">
    //     THIS IS TO CERTIFY THAT
    //   </p>

    //   <h1 id="cert-holder">Firstname Surname</h1>

    //   <p classNameName="smaller" id="cert-completed-line">
    //     has successfully completed the
    //   </p>

    //   <h2 id="cert-course">Course in Question</h2>

    //   <div id="cert-desc">
    //     <p classNameName="smaller" id="cert-details">
    //       which includes the knowledge of English for Technical Conversations,
    //       Applied Mathematics, General Robotics Science, Basic Computing, Web
    //       Mobile Development and Basic User Interface Design.
    //     </p>
    //   </div>

    //   <br />
    //   <p id="cert-from" classNameName="smaller">
    //     &nbsp; from www.companywebsite.com
    //   </p>

    //   <br />
    //   <p classNameName="smaller" id="cert-issued">
    //     {/* <b>Issued on:</b> {{ date }}. */}
    //   </p>

    //   <div id="cert-footer">
    //     <div id="cert-issued-by">
    //       <img
    //         id="cert-stamp"
    //         src="https://i7.pngguru.com/preview/585/794/452/paper-rubber-stamp-postage-stamps-company-seal-seal-thumbnail.jpg"
    //       />
    //       <hr />
    //       <p>
    //         Issued by
    //         <br />
    //         THE COMPANY S.L.
    //       </p>
    //     </div>
    //     <div id="cert-ceo-design">
    //       <img
    //         id="cert-ceo-sign"
    //         src="https://i7.pngguru.com/preview/585/794/452/paper-rubber-stamp-postage-stamps-company-seal-seal-thumbnail.jpg"
    //       />
    //       <hr />
    //       <p>
    //         Company Ceo
    //         <br />
    //         CEO of The Company
    //       </p>
    //     </div>
    //   </div>

    //   <div id="cert-verify">
    //     Verify at companywebsite.ai/verify/XYZ12ER56129F. <br />
    //     Company has confirmed the participation of this individual in the
    //     course.
    //   </div>
    // </div>
    <Paper style={{ width: "742px" }}>
      {/* <div className="container">
        <div className="logo">An Organization</div>

        <div className="marquee">Certificate of Completion</div>

        <div className="assignment">This certificate is presented to</div>

        <div className="person">Joe Nathan</div>

        <div className="reason">
          For deftly defying the laws of gravity
          <br />
          and flying high
        </div>
      </div> */}

      <div className="container pm-certificate-container">
        <div className="outer-border"></div>
        <div className="inner-border"></div>
        <h1>{props.title == "" ? "Certificate of Completion" : props.title}</h1>
        <div className="row pm-certificate-header">
          <div className="pm-certificate-title cursive col-xs-12 text-center">
            <h2>This is to Certify that </h2>
          </div>
        </div>

        <div className="pm-certificate-block">
          <div className="col-xs-12">
            <div className="row">
              <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                <span style={{ fontSize: "40px" }}>Prerna Jajodia</span>
              </div>
              <div className="col-xs-2"> </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-2"> </div>
            <div className="pm-earned col-xs-8 text-center">
              <span className="pm-earned-text padding-0 block cursive">
                has successfully completed
              </span>
              <span className="pm-credits-text block bold sans">
                3 months of
              </span>
            </div>
          </div>

          <div className="pm-course-title col-xs-8 text-center">
            <span className="pm-earned-text block cursive">
              web development internship at
            </span>
          </div>

          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2"> </div>
              <div className="pm-course-title underline col-xs-8 text-center">
                <span className="pm-credits-text block bold sans">
                  JP Morgan &amp; Chase Co.
                </span>
              </div>
              <div className="col-xs-2"> </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12">
          <div className="row">
            <div className="pm-certificate-footer">
              <div className="col-xs-4 pm-certified col-xs-4 text-center">
                <span className="pm-credits-text block sans">
                  with sincerity and integrity.
                </span>
                <span className="pm-empty-space block underline"></span>
                <span className="bold block">
                  Certificate by JP Morgan &amp; Chase Co.
                </span>
              </div>
              <div className="col-xs-4"></div>
              <div className="col-xs-4 pm-certified col-xs-4 text-center">
                <span className="pm-credits-text block sans">13-10-2020</span>
                <span className="pm-credits-text block sans">13-12-2020</span>
                <span className="pm-empty-space block underline"></span>
                <span className="bold block">Certificate No. </span>
                <span className="bold block">11100101010</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Template;
