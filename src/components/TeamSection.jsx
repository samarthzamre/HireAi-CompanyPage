import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TeamSection = () => {
  const teamData = [
    {
      name: "Krishna Kolekar",
      role: "AI Developer",
      imgSrc: "/src/assets/team/krishna.jpg",
      socialLinks: [{ icon: "bi bi-linkedin", href: "https://www.linkedin.com/in/krishna-kolekar-23300111k" }],
    },
    {
      name: "Samarth Zamre",
      role: "MERN Stack Developer",
      imgSrc: "/src/assets/team/samarth.png",
      socialLinks: [{ icon: "bi bi-linkedin", href: "https://www.linkedin.com/in/samarth-zamre-9b8498332/" }],
    },
    {
      name: "Aniket Gazalwar",
      role: "Data Analyst",
      imgSrc: "/src/assets/team/aniket.jpg",
      socialLinks: [{ icon: "bi bi-linkedin", href: "https://www.linkedin.com/in/aniket-gazalwar-13141b22b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }],
    },
    {
      name: "Niharika Gupta",
      role: "Frontend Developer and AI Developer",
      imgSrc: "/src/assets/team/niharika.jpg",
      socialLinks: [{ icon: "bi bi-linkedin", href: "https://www.linkedin.com/in/niharika-gupta-086ab0294" }],
    },
    {
      name: "Swastik Chaudhary",
      role: "MERN Stack Developer",
      imgSrc: "/src/assets/team/swastik.png",
      socialLinks: [{ icon: "bi bi-linkedin", href: " https://www.linkedin.com/in/swastik-chaudhary-1801/" }],
    },
  ];

  return (
    <section id="team" className="team section">
      <style jsx>{`
        .team.section {
          padding: 40px 15px;
          background-color: #ffffff;
          overflow: hidden;
        }
        .section-title h2 {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }
        .section-title p {
          font-size: 14px;
          color: #777;
          margin-bottom: 20px;
        }
        .team-carousel {
          display: flex;
          gap: 20px;
          animation: marquee 20s linear infinite;
        }
        .team-carousel:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .team-member {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-width: 300px;
        }
        .team-member:hover {
          transform: translateY(-8px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }
        .team-member .member-img {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 20px auto;
          border: 5px solid transparent;
          border-radius: 50%;
          overflow: hidden;
          transition: border-color 0.4s ease;
        }
        .team-member .member-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .team-member .member-img:hover {
          border-color: #00acee;
        }
        .team-member .social {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 10px;
        }
        .team-member .social a {
          color: #777;
          font-size: 18px;
          transition: color 0.3s ease;
        }
        .team-member .social a:hover {
          color: #00acee;
        }
        .team-member .member-info {
          text-align: center;
          padding: 10px 15px;
        }
        .team-member .member-info h4 {
          font-size: 18px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }
        .team-member .member-info span {
          font-size: 14px;
          color: #777;
        }
      `}</style>

      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Our hard-working team</p>
      </div>

      <div className="container">
        <div className="team-carousel">
          {teamData.concat(teamData).map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-img">
                <img
                  src={member.imgSrc}
                  className="img-fluid"
                  alt={`${member.name}`}
                />
              </div>
              <div className="social">
                {member.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
              <div className="member-info">
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
