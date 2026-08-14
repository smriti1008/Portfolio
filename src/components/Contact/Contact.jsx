import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    // Mock API Submit Delay
    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: "success",
        message: "Thank you, Smriti will get back to you shortly!",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Let's Connect</div>
          <h2 className={styles.title}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Have an exciting project idea, looking for a developer, or just want to say hi? Send a message!
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Details Card */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3>Reach Out Directly</h3>
              <p className={styles.cardInfoDesc}>
                I'm always open to discussing new software development opportunities, creative projects, or web design systems.
              </p>

              <div className={styles.detailList}>
                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}>
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4>Email Me</h4>
                    <a href="mailto:smritisingh9118@gmail.com" className={styles.detailLink}>
                     smritisingh9118@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}>
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p className={styles.detailText}>Lucknow,Uttar Pradesh(Open to Remote)</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialWrapper}>
                <h4>Find Me Online</h4>
                <div className={styles.socialRow}>
                  <a href="https://github.com/smriti1008" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/smriti-singh040705/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`${styles.statusMessage} ${
                    status.type === "success" ? styles.success : styles.error
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
