import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "aos/dist/aos.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <Container className="section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-4">

          <Col lg={6}>
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="200">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>SBI Colony</p>
                  <p>Shegaon, 444203</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="300">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+91 98675 45367</p>
                  <p>+91 92345 76587</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="400">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>hireai@example.com</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="500">
                  <i className="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00AM - 05:00PM</p>
                </div>
              </div>

            </div>
          </Col>

          <Col lg={6}>
            <Form action="" data-aos="fade-up" data-aos-delay="200">
              <Row className="gy-4">
                <Col md={6}>
                  <Form.Control type="text" name="name" placeholder="Your Name" required />
                </Col>

                <Col md={6}>
                  <Form.Control type="email" name="email" placeholder="Your Email" required />
                </Col>

                <Col md={12}>
                  <Form.Control type="text" name="subject" placeholder="Subject" required />
                </Col>

                <Col md={12}>
                  <Form.Control as="textarea" name="message" rows={6} placeholder="Message" required />
                </Col>

                <Col md={12} className="text-center">
                  <Button type="submit" className="mt-2">Send Message</Button>
                </Col>
              </Row>
            </Form>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
