import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import about from '../assets/about/about.png'

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          {/* Text Content */}
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="ms-2 fw-bold text-primary">Why choose HireAi</h1>

            <div className="content">
              <p className="h5 m-2">
                HireAI provides end-to-end solutions for hiring and job
                applications by integrating advanced AI capabilities. Whether
                you’re searching for your dream job or hiring top talent, HireAI
                makes the process smarter, faster, and more efficient.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src={about}
              className="img-fluid"
              alt="About"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
