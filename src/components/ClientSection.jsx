import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCarousel from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";

const ClientsSection = () => {
  const slickSettings = {
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const clientImages = [
    "/src/assets/client/client1.jpg",
    "/src/assets/client/client2.jpg",
    "/src/assets/client/client3.jpg",
  ];

  // Duplicate the array to ensure a seamless loop
  const loopedClientImages = [...clientImages, ...clientImages];

  return (
    <section id="clients" className="clients section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Clients</h2>
        <p>We work with the best clients</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="slick-wrapper">
          <SlickCarousel {...slickSettings}>
            {loopedClientImages.map((imgSrc, index) => (
              <div key={index} className="swiper-slide">
                <img src={imgSrc} className="img-fluid" alt={`Client ${index + 1}`} />
              </div>
            ))}
          </SlickCarousel>
        </div>
      </div>

      <style jsx>{`
        .slick-wrapper {
          overflow: hidden;
        }
        .slick-slide {
          display: inline-block;
        }
        .slick-track {
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
