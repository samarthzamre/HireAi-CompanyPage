import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Header = () => {
  return (
    <header
      className={`header d-flex align-items-center fixed-top w-100 shadow-sm`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a
          href="index.html"
          className="logo d-flex align-items-center text-decoration-none"
        >
          <img
            src="/src/assets/logo/logo.png"
            alt="Logo"
            id="logo"
            className="rounded-circle"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
          />
          <h1 className="sitename ms-2">HireAi</h1>
        </a>

        {/* Navigation Menu */}
        <div className="mx-auto">
          <NavMenu />
        </div>

        {/* Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
          <button
            className="btn btn-primary rounded-pill shadow-lg px-4 py-2 me-3 mb-3"
            id="btnAspirant"
            onClick={() =>
              window.open(
                "https://niharika-hireai.github.io/Hire.AI-Aspirants/"
              )
            }
            style={{
              background: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)", // Gradient background for Aspirant button
              color: "#fff", // White text
              fontWeight: "bold", // Bold text
              border: "2px solid transparent", // Border for hover effect
              transition: "all 0.3s ease", // Smooth transition for effects
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              minWidth: "200px", // Ensure button is wide enough for the text
              textAlign: "center", // Center the text
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)"; // Scale effect on hover
              e.target.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
              e.target.style.border = "2px solid #feb47b"; // Add border on hover
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)"; // Reset scale
              e.target.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.1)";
              e.target.style.border = "2px solid transparent"; // Remove border on hover out
            }}
          >
            <i className="bi bi-rocket me-2"></i> {/* Updated icon for Aspirant button */}
            Get Started as an Aspirant
          </button>

          <button
            className="btn btn-secondary rounded-pill shadow-lg px-4 py-2 me-3 mb-3"
            id="btnEnterprise"
            onClick={() => window.open("http://127.0.0.1:5500/enterpriseside/enterprise/index.html")}
            style={{
              background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // Gradient background for Enterprise button
              color: "#fff", // White text
              fontWeight: "bold", // Bold text
              border: "2px solid transparent", // Border for hover effect
              transition: "all 0.3s ease", // Smooth transition for effects
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
              minWidth: "220px", // Ensure button is wide enough for the longer text
              textAlign: "center", // Center the text
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)"; // Scale effect on hover
              e.target.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.2)";
              e.target.style.border = "2px solid #2575fc"; // Add border on hover
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)"; // Reset scale
              e.target.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.1)";
              e.target.style.border = "2px solid transparent"; // Remove border on hover out
            }}
          >
            <i className="bi bi-briefcase me-2"></i> {/* Updated icon for Enterprise button */}
            Get Started as an Enterprise
          </button>
        </div>
      </div>
    </header>
  );
};

const NavMenu = () => {
  return (
    <nav id="navmenu" className="navmenu">
      <ul className="navbar-nav d-flex flex-row gap-3">
        <NavItem label="Home" link="#hero" isActive={true} />
        <NavItem label="About" link="#about" />
        <NavItem label="Features" link="#features" />
        <NavItem label="Services" link="#services" />
        <NavItem label="Pricing" link="#pricing" />
        <NavItem label="How to use" link="#howtouse" />
        <NavItem label="Contact" link="#contact" />
      </ul>
      <button
        className="mobile-nav-toggle d-xl-none bi bi-list"
        aria-label="Toggle navigation"
      />
    </nav>
  );
};

const NavItem = ({ label, link, isActive }) => (
  <li>
    <a
      href={link}
      className={`nav-link ${isActive ? "active" : ""}`}
      aria-current={isActive ? "page" : undefined}
      onClick={(e) => handleNavClick(e, link)}
    >
      {label}
    </a>
  </li>
);

const handleNavClick = (event, link) => {
  event.preventDefault();

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });

  const clickedLink = event.target;
  clickedLink.classList.add("active");

  // Smooth scroll to the section
  document.querySelector(link).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default Header;
