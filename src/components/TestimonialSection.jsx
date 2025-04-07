import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/testimonial/image1.png";
import image2 from "../assets/testimonial/image2.png";
import image3 from "../assets/testimonial/image3.png";
import image4 from "../assets/testimonial/image4.png";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What our users are saying about us</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>

          {/* Carousel Content */}
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial-item p-3">
                    <div className="stars mb-3">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="testimonial-text">
                      Using this platform, we streamlined our hiring process and
                      connected with top talent effortlessly. It has made
                      recruitment faster and more efficient for our team.
                    </p>
                    <div className="profile mt-4 text-center">
                      <img
                        src={image1}
                        className="testimonial-img img-fluid rounded-circle shadow"
                        alt="Ankit Sharma"
                      />
                      <h3 className="mt-3">Ankit Sharma</h3>
                      <h4 className="text-muted">HR Manager, TechCorp</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-item p-3">
                    <div className="stars mb-3">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="testimonial-text">
                      This platform helped me land my dream job in just a few
                      weeks! The personalized job recommendations and mock
                      interviews were a game changer.
                    </p>
                    <div className="profile mt-4 text-center">
                      <img
                        src={image3}
                        className="testimonial-img img-fluid rounded-circle shadow"
                        alt="Priya Mehta"
                      />
                      <h3 className="mt-3">Priya Mehta</h3>
                      <h4 className="text-muted">Software Engineer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item" data-bs-interval="10000">
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial-item p-3">
                    <div className="stars mb-3">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="testimonial-text">
                      As a small business owner, I needed a platform that could
                      simplify hiring. This platform provided the tools I needed
                      to connect with skilled candidates effortlessly.
                    </p>
                    <div className="profile mt-4 text-center">
                      <img
                        src={image2}
                        className="testimonial-img img-fluid rounded-circle shadow"
                        alt="Ravi Kumar"
                      />
                      <h3 className="mt-3">Ravi Kumar</h3>
                      <h4 className="text-muted">Entrepreneur</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-item p-3">
                    <div className="stars mb-3">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="testimonial-text">
                      The skill assessment tools on this platform helped me
                      identify my strengths and prepare for interviews
                      effectively. I highly recommend it to all job seekers!
                    </p>
                    <div className="profile mt-4 text-center">
                      <img
                        src={image4}
                        className="testimonial-img img-fluid rounded-circle shadow"
                        alt="Neha Verma"
                      />
                      <h3 className="mt-3">Neha Verma</h3>
                      <h4 className="text-muted">Data Analyst</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
