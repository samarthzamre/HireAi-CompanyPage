import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "aos/dist/aos.css";

const FooterSection = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={6}>
              <h4>Join Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <Form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form d-flex">
                  <Form.Control type="email" name="email" placeholder="Your Email" required />
                  <Button type="submit">Subscribe</Button>
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="footer-top">
        <Row className="gy-4">
          <Col lg={4} md={6} className="footer-about">
            <a href="#hero" className="d-flex align-items-center">
              <span className="sitename">HireAi</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Krish</p>
              <p>Shegaon, 444203</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+91 91986 8765</span></p>
              <p><strong>Email:</strong> <span>hireai@example.com</span></p>
            </div>
          </Col>

          <Col lg={2} md={3} className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#about">About</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#features">Features</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
            </ul>
          </Col>

          <Col lg={2} md={3} className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#pricing">Pricing</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#howtouse">How to use</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#contact">Contact</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#terms">Terms of service</a></li>
            </ul>
          </Col>

          <Col lg={4} md={12}>
            <h4>Follow Us</h4>
            <p>Get valuable insights from us</p>
            <div className="social-links d-flex">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">HireAi</strong> <span>All Rights Reserved</span></p>
      </div>
    </footer>
  );
};

export default FooterSection;
