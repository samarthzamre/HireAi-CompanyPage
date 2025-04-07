const PricingSection = () => {
  return (
    <section id="pricing" className="pricing section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Choose a Plan Tailored to Your Needs</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Aspirant Free Plan */}
          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-tem">
              <h3 style={{ color: "#20c997" }}>Free Plan{" "}(for Aspirants)</h3>
              <div className="price"><sup>$</sup>0<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-box" style={{ color: "#20c997" }}></i>
              </div>
              <ul>
                <li>Job Search</li>
                <li>Basic Skill Assessments</li>
                <li>Email Support</li>
                <li>Mock Interviews</li>
                <li>Career Insights</li>
              </ul>
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>

          {/* Enterprise Basic Plan */}
          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-tem">
              <h3 style={{ color: "#0dcaf0" }}>Basic Enterprise Plan</h3>
              <div className="price"><sup>$</sup>500<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-briefcase" style={{ color: "#0dcaf0" }}></i>
              </div>
              <ul>
                <li>5 Job Postings</li>
                <li>Resume Screening</li>
                <li>Email Support</li>
                <li className="na">Advanced Analytics</li>
                <li className="na">Custom Reports</li>
              </ul>
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>

          {/* Enterprise Pro Plan */}
          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="pricing-tem">
              <h3 style={{ color: "#fd7e14" }}>Pro Enterprise Plan</h3>
              <div className="price"><sup>$</sup>1000<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-bar-chart" style={{ color: "#fd7e14" }}></i>
              </div>
              <ul>
                <li>Unlimited Job Postings</li>
                <li>Advanced Screening Tools</li>
                <li>Priority Support</li>
                <li>AI Recommendations</li>
                <li>Custom Reports</li>
              </ul>
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
