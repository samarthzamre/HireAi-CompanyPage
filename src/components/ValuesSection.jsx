import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const ValuesSection = () => {
  const values = [
    {
      imgSrc: "/src/assets/Values/image1.png",
      title: "Innovation at the Forefront",
      description:
        "We harness the power of cutting-edge AI technologies, including Large Language Models (LLMs), to create transformative solutions that enhance recruitment processes and job-seeking experiences.",
      delay: 100,
    },
    {
      imgSrc: "/src/assets/Values/image2.png",
      title: "Candidate Empowerment",
      description:
        "We are committed to equipping aspirants with the tools they need to succeed. From mock interviews to skill assessments, we ensure every candidate is prepared for their dream role.",
      delay: 200,
    },
    {
      imgSrc: "/src/assets/Values/image3.png",
      title: "Streamlined Recruitment for Enterprises",
      description:
        "For businesses, we simplify hiring with intelligent resume sorting, job creation tools, and actionable analytics, helping enterprises find the perfect candidates efficiently.",
      delay: 300,
    },
    {
      imgSrc: "/src/assets/Values/image4.png",
      title: "Transparency and Ethical Practices",
      description:
        "We uphold the highest standards of transparency and data privacy, ensuring all interactions on our platform are secure, fair, and trustworthy.",
      delay: 400,
    },
    {
      imgSrc: "/src/assets/Values/image5.png",
      title: "Inclusivity and Diversity",
      description:
        "We champion a bias-free hiring environment. Our AI is designed to promote diversity and foster inclusivity, helping enterprises build balanced and equitable teams.",
      delay: 500,
    },
    {
      imgSrc: "/src/assets/Values/image6.png",
      title: "Continuous Improvement",
      description:
        "We believe in constant growth—both for our platform and our users. By embracing feedback and staying ahead of industry trends, we aim to deliver the best solutions for evolving hiring needs.",
      delay: 600,
    },
  ];

  return (
    <section id="values" className="values section py-5">
      {/* Section Title */}
      <div className="container section-title text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold">Our Values</h2>
        <p className="text-muted">What we value most</p>
      </div>

      {/* Cards */}
      <div className="container">
        <div className="row gy-4">
          {values.map((value, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={value.delay}
              key={index}
            >
              <div className="card shadow-lg rounded-4 p-4 h-100 d-flex flex-column align-items-center justify-content-between"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, {
                    transform: "scale(1.05)",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  })
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, {
                    transform: "scale(1)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  })
                }
              >
                <img
                  src={value.imgSrc}
                  className="img-fluid rounded-3 mb-3"
                  alt={value.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h3 className="fw-bold mb-3 text-center">{value.title}</h3>
                <p className="text-muted text-center">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
