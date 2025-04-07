import { Container, Row, Col, Card } from "react-bootstrap";
import "aos/dist/aos.css";

const HowToUseSection = () => {
  const stepIconStyle = {
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    borderRadius: "50%", // Ensures perfect circle
    marginTop: "20px", // Adds margin from the top
  };

  return (
    <section id="howtouse" className="how-to-use section">
      {/* Section Title */}
      <Container className="section-title text-center" data-aos="fade-up">
        <h2 className="fw-bold">How to Use</h2>
        <p className="text-muted">Simple steps to get started</p>
      </Container>

      {/* Aspirants Steps */}
      <Container data-aos="fade-up" data-aos-delay="100">
        <h3 className="fw-bold text-primary text-center mb-5">For Aspirants</h3>
        <Row className="gy-4">
          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-primary mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">1</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Sign Up</h5>
                <Card.Text>
                  • Create your free account by providing your email and setting up a password.<br />
                  • Complete your profile by uploading your resume and adding your skills, preferences, and job interests.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-success mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">2</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Explore Job Opportunities</h5>
                <Card.Text>
                  • Use our AI-powered job search engine to find roles that match your qualifications and interests.<br />
                  • Save and track your favourite opportunities for quick access.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-warning mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">3</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Prepare with AI Tools</h5>
                <Card.Text>
                  • Enhance your readiness with mock interviews tailored to your desired role.<br />
                  • Take skill-based tests to improve your profile visibility to employers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-danger mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">4</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Apply Seamlessly</h5>
                <Card.Text>
                  • Submit applications directly through the platform.<br />
                  • Track the status of your applications in real time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-info mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">5</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Stay Updated</h5>
                <Card.Text>
                  • Receive notifications about new job openings and interview updates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Enterprises Steps */}
      <Container data-aos="fade-up" data-aos-delay="100">
        <h3 className="fw-bold text-primary text-center mb-5 mt-4">For Enterprises</h3>
        <Row className="gy-4">
          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-primary mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">1</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Create Your Account</h5>
                <Card.Text>
                  • Register your organisation with basic details.<br />
                  • Set up your company profile to attract top talent.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-success mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">2</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Post Job Openings</h5>
                <Card.Text>
                  • Use intuitive templates to create detailed job descriptions.<br />
                  • Customise postings to include required skills, experience levels, and job locations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-warning mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">3</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Leverage AI Resume Sorting</h5>
                <Card.Text>
                  • Let our AI analyse and rank resumes based on your requirements.<br />
                  • Save time by focusing only on the best-matched candidates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-danger mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">4</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Manage the Recruitment Process</h5>
                <Card.Text>
                  • Schedule interviews and send invites directly through the platform.<br />
                  • Collaborate with your team by sharing candidate feedback and interview notes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} md={6}>
            <Card className="how-to-card text-center shadow h-100">
              <div
                className="step-icon bg-light text-info mx-auto mb-4 shadow-sm"
                style={stepIconStyle}
              >
                <span className="fw-bold fs-4">5</span>
              </div>
              <Card.Body>
                <h5 className="fw-bold">Make Data-Driven Decisions</h5>
                <Card.Text>
                  • Access analytics to evaluate recruitment performance and improve hiring outcomes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowToUseSection;
