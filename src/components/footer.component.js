import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";


const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 fixed-bottom bg-dark text-secondary">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h7 className="title text-white">About Us</h7>
            <p>
              Beauty Appointment Booking Service - provides the fastest services to customer
              in dire need of hair makeover!
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h7 className="title text-white">Associating Links</h7>
            <ul>
                <li className="list-unstyled">
                <a href="https://github.com/ics499-capstone/">Github</a>
              </li>
              <li className="list-unstyled">
                <a href="https://travis-ci.org/github/ics499-capstone/hair-service-scheduler">Continnuous Integration</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 text-white">
        <MDBContainer fluid>
          Tangle &copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;