import "bootstrap/dist/css/bootstrap.min.css";
import heroImg from "../assets/Hero/hero.png"; // Import the hero image

const HeroSection = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4">
          {/* Text Content */}
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              Revolutionizing Hiring with AI-Powered Solutions
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              HireAI is a cutting-edge platform that bridges the gap between job
              seekers and employers using advanced AI technologies
            </p>
            <div
              className="d-flex flex-column flex-md-row"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button
                className="btn-get-started"
                onClick={() =>
                  window.open("https://hireai-enterpriseside.onrender.com/enterprise/index.html")
                }
              >
                Enterprise<i className="bi bi-arrow-right"></i>
              </button>

              <button
                className="ms-2 btn-get-started"
                onClick={() =>
                  window.open(
                    "https://niharika-hireai.github.io/Hire.AI-Aspirants/"
                  )
                }
              >
                Aspirant<i className="bi bi-arrow-right"></i>
              </button>
              <a
                href=""
                className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"
              >
                <i className="bi bi-play-circle" />
                <span>Watch Video</span>
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            style={{ textAlign: "center" }}
          >
            <img
              src={heroImg} // Use the imported hero image
              className="img-fluid animated"
              alt="Hero"
              style={{
                width: "400%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
