import { useState } from "react";

const FAQSection = () => {
  // State to track which FAQ is active
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Handler to toggle active FAQ
  const toggleFAQ = (index) => {
    // If clicked FAQ is already active, close it; otherwise, open it
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is HireAi?",
      answer:
        "HireAi is a comprehensive, AI-driven recruitment platform designed to revolutionize hiring processes for both job seekers and enterprises. It uses cutting-edge technologies, including a Large Language Model (LLM), to streamline recruitment and provide personalized experiences.",
    },
    {
      question: "How does HireAi help job seekers?",
      answer:
        "For job seekers, HireAi offers tools such as personalized job recommendations, mock interviews, and skill assessments. These tools help candidates prepare effectively and align with industry standards, enhancing their chances of success.",
    },
    {
      question: "What features does HireAi provide for enterprises?",
      answer:
        "HireAi simplifies recruitment workflows for enterprises with features like job creation, resume sorting, and candidate ranking. Its AI-driven tools automate repetitive tasks, provide data-driven insights, and reduce biases in the hiring process.",
    },
    {
      question: "How does HireAi ensure effective talent matching?",
      answer:
        "HireAi leverages AI technologies like natural language understanding, predictive analytics, and generative AI to match candidates precisely with job opportunities.",
    },
    {
      question: "How does HireAi improve the fairness of the hiring process?",
      answer:
        "By automating repetitive tasks and utilizing data-driven decision-making, HireAi reduces biases, ensuring a more equitable and efficient recruitment process.",
    },
    {
      question: "What are the benefits of using HireAi for recruiters?",
      answer: "Recruiters benefit from streamlined workflows, automated tasks, improved decision-making through insights, and reduced inefficiencies, allowing them to focus on strategic aspects of recruitment.",
    },
    {
      question: "Does HireAi provide real-world evidence of its effectiveness?",
      answer: "Yes, real-world application scenarios and evaluations demonstrate how HireAi achieves greater efficiency, fairness, and accuracy in talent acquisition.",
    },
    {
      question: " How does HireAi set itself apart in the recruitment industry?",
      answer: "By combining cutting-edge technology, user-centric design, and a focus on scalability, HireAi offers a modern solution that sets a new standard for recruitment ecosystems.",
    },
  ];

  return (
    <section id="faq" className="faq section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>F.A.Q</h2>
        <p>Frequently Asked Questions</p>
      </div>

      <div className="container">
        <div className="row">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="faq-container">
                <div
                  className={`faq-item ${activeFAQ === index ? "faq-active" : ""}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <div
                    className="faq-content"
                    style={{
                      display: activeFAQ === index ? "block" : "none",
                    }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                  <i
                    className={`faq-toggle bi ${
                      activeFAQ === index
                        ? "bi-chevron-down"
                        : "bi-chevron-right"
                    }`}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
