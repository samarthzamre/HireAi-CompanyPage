import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const StatsSection = () => {
  const stats = [
    {
      icon: "bi bi-emoji-smile color-blue",
      count: 232,
      label: "Happy Clients",
      color: "",
    },
    {
      icon: "bi bi-journal-richtext color-orange",
      count: 1321,
      label: "Happy Aspirants",
      color: "#ee6c20",
    },
    {
      icon: "bi bi-headset color-green",
      count: '24/7',
      label: "Hours Of Support",
      color: "#15be56",
    },
    {
      icon: "bi bi-people color-pink",
      count: 5,
      label: "Hard Workers",
      color: "#bb0852",
    },
  ];

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i
                  className={stat.icon}
                  style={{ color: stat.color }}
                ></i>
                <div>
                  <span className="purecounter">{stat.count}</span>
                  <p>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
