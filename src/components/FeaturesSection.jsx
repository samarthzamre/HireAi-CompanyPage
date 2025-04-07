import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import featureImg from "../assets/feature/nfeature.png"; // Import the image

const FeaturesSection = () => {
  const features = [
    { title: "Intelligent Job Search", delay: 200 },
    { title: "Mock Interviews", delay: 300 },
    { title: "Skill Assessment Tests", delay: 400 },
    { title: "Personalized Insights", delay: 500 },
    { title: "AI-Powered Resume Sorting", delay: 600 },
    { title: "Effortless Job Creation", delay: 700 },
    { title: "Candidate Shortlisting", delay: 800 },
    { title: "Advanced Analytics", delay: 900 },
  ];

  return (
    <section id="features" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Our Advanced Features</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {/* Image */}
          <div className="col-xl-6" data-aos="zoom-out" data-aos-delay="100">
            <img
              src={featureImg}
              className="img-fluid"
              alt="Features"
            />
          </div>

          {/* Features List */}
          <div className="col-xl-6 d-flex">
            <div className="row align-self-center gy-4">
              {features.map((feature, index) => (
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={feature.delay}
                  key={index}
                >
                  <div className="feature-box d-flex align-items-center">
                    <h3>{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
