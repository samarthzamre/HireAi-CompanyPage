import React from "react";

const ServicesSection = () => {
  const serviceItemStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease, background-color 0.3s ease, color 0.3s ease",
    borderRadius: "8px", // Slightly round corners for a modern look
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow
    zIndex: 1, // Ensure the non-hovered items stay behind
    backgroundColor: "#ffffff", // Default background color
    color: "#333333", // Default text color
  };

  const serviceItemHoverStyle = (color) => ({
    transform: "scale(1.05)", // Slightly increase the size on hover
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)", // Enhance shadow on hover
    filter: "brightness(1.05)", // Slightly brighten the box on hover
    zIndex: 2, // Ensure the hovered item is on top
    backgroundColor: color, // Change background color on hover
    color: "#ffffff", // Change text color to white
  });

  return (
    <section id="services" className="services section py-5">
      {/* Section Title */}
      <div className="container text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold">Our Services</h2>
        <p className="text-muted">Explore What We Offer</p>
      </div>

      <div className="container">
        {/* Enterprise Services */}
        <div className="sub-section mb-5" data-aos="fade-up">
          <h3 className="fw-bold text-primary mb-4 text-center">Enterprise Services</h3>
          <div className="row gy-4">
            {[
              {
                title: "Smart Sourcing",
                description:
                  "Streamline talent acquisition with advanced AI that identifies top candidates efficiently, saving time and resources.",
                icon: "bi bi-activity",
                color: "#20c997",
              },
              {
                title: "Bias-Free Hiring",
                description:
                  "Ensure fair recruitment by eliminating biases with data-driven candidate evaluations for equitable decisions.",
                icon: "bi bi-broadcast",
                color: "#fd7e14",
              },
              {
                title: "Effortless Automation",
                description:
                  "Automate repetitive recruitment tasks and focus on strategic decision-making with AI-driven solutions.",
                icon: "bi bi-easel",
                color: "#6610f2",
              },
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index} style={{ marginBottom: "20px" }}>
                <div
                  className="service-item text-center rounded p-4 h-100 shadow-sm position-relative"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                  style={serviceItemStyle}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, serviceItemHoverStyle(service.color))
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, serviceItemStyle)
                  }
                >
                  <i
                    className={`${service.icon} icon display-4 mb-3`}
                    style={{ color: service.color }}
                  ></i>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-muted">{service.description}</p>
                  <a
                    href="#"
                    className="stretched-link text-decoration-none text-primary"
                  >
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aspirant Services */}
        <div className="sub-section" data-aos="fade-up">
          <h3 className="fw-bold text-primary mb-4 text-center">Aspirant Services</h3>
          <div className="row gy-4">
            {[
              {
                title: "Personalized Job Search",
                description:
                  "Discover jobs tailored to your skills and interests with AI-powered recommendations that boost your career.",
                icon: "bi bi-bounding-box-circles",
                color: "#dc3545",
              },
              {
                title: "Skill Assessment",
                description:
                  "Evaluate your abilities with industry-standard assessments to prepare for the roles you aspire to achieve.",
                icon: "bi bi-calendar4-week",
                color: "#6f42c1",
              },
              {
                title: "Mock Interviews",
                description:
                  "Build confidence and improve your chances with realistic interview simulations and expert feedback.",
                icon: "bi bi-chat-square-text",
                color: "#e83e8c",
              },
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index} style={{ marginBottom: "20px" }}>
                <div
                  className="service-item text-center rounded p-4 h-100 shadow-sm position-relative"
                  data-aos="fade-up"
                  data-aos-delay={400 + 100 * index}
                  style={serviceItemStyle}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, serviceItemHoverStyle(service.color))
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, serviceItemStyle)
                  }
                >
                  <i
                    className={`${service.icon} icon display-4 mb-3`}
                    style={{ color: service.color }}
                  ></i>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-muted">{service.description}</p>
                  <a
                    href="#"
                    className="stretched-link text-decoration-none text-primary"
                  >
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
