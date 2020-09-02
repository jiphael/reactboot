import React from 'react';
import { Col, Container, Row} from 'reactstrap';

const Footer = () => {
  return (
    <div color="indigo" className="site-footer border-top">
      <Container>
        <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">About us</a>
            </h6>
          </Col>
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Products</a>
            </h6>
          </Col>
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Awards</a>
            </h6>
          </Col>
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Help</a>
            </h6>
          </Col>
          <Col md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Contact</a>
            </h6>
          </Col>
        </Row>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <Col md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              
            </p>
          </Col>
        </Row>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <Row className="pb-3">
          <Col md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-4">

                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text"> </i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:

        </Container>
      </div>
    </div>
  );
}

export default Footer;