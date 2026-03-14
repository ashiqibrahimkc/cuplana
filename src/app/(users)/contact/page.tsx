"use client";

import { useState } from "react";
export default function Contact() {
  const [showChat, setShowChat] = useState(false);
const [message, setMessage] = useState("");
  return (
    <>
      {/* HERO */}
      <section className="contacthero">
        <div className="contacthero-content">
          <h1>Contact Cuplana</h1>
          <p>Let&apos;s build your restaurant success together.</p>
          <a href="https://wa.me/919746199108" className="contact-btn">Start Your Project</a>
        </div>
      </section>
      <div className="section-divider"></div>
      {/* INSTAGRAM CONTACT */}

<section className="instagram-contact">

  <div className="instagram-container">

    <div className="instagram-content">
      <span className="section-tag">INSTAGRAM</span>

      <h2>Connect With Us on Instagram</h2>

      <p>
        Follow our journey, explore restaurant projects, culinary ideas,
        and send us a direct message on Instagram for quick inquiries.
      </p>

     <button
  className="instagram-btn"
  onClick={() => setShowChat(true)}
>
  <i className="fab fa-instagram"></i> Service Chat
</button>

    </div>

  </div>

</section>
{showChat && (
  <div className="service-chat-modal">

    <div className="service-chat-box">

      <h3>Service Inquiry</h3>

      <textarea
        placeholder="Type the service you are interested in..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="chat-buttons">

        <button
          className="send-btn"
          onClick={() => {
            navigator.clipboard.writeText(message);
            window.open(
              "https://www.instagram.com/sali_chef_/",
              "_blank"
            );
            setShowChat(false);
          }}
        >
          Send on Instagram
        </button>

        <button
          className="close-btn"
          onClick={() => setShowChat(false)}
        >
          Cancel
        </button>

      </div>

    </div>

  </div>
)}

<div className="section-divider"></div>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
  <div className="contact-container">

    <div className="contact-info">
      <span className="contact-tag">CONTACT</span>
      <h2>Let's Build Your Restaurant Success</h2>

      <p className="contact-intro">
        Chef Sali provides professional multi cuisine consulting,
        menu engineering, and restaurant growth strategies
        for food businesses worldwide.
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> cuplanafoodconsultingcompany@gmail.com</p>
        <p><strong>Phone:</strong> +91 97461 99108</p>
        <p><strong>Location:</strong> Chemmad, India</p>
        <p><strong>Consulting:</strong> Worldwide</p>
      </div>
    </div>

    <div className="contact-form">
      <h3>Send a Message</h3>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Restaurant Name" />
        <textarea placeholder="Tell us about your project"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>

  </div>
</section>

<div className="section-divider"></div>

      {/* SERVICES */}
      <section className="services">
        <div className="services-title">
          <h2>Consulting Services</h2>
          <p>
            Strategic culinary consulting designed to help restaurants
            grow, scale, and operate with maximum profitability.
          </p>
        </div>
        <div className="service-grid">
          <div className="service">
            <span className="icon">🍽</span>
            <h3>Restaurant Concept Development</h3>
          </div>
          <div className="service">
            <span className="icon">📊</span>
            <h3>Menu Engineering</h3>
          </div>
          <div className="service">
            <span className="icon">⚙</span>
            <h3>Kitchen Optimization</h3>
          </div>
          <div className="service">
            <span className="icon">📖</span>
            <h3>Recipe Standardization</h3>
          </div>
          <div className="service">
            <span className="icon">👨‍🍳</span>
            <h3>Multi cuisine Training</h3>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>

      {/* REGIONS */}
      <section className="regions">
        <div className="regions-title">
          <h2>Working With Clients Worldwide</h2>
          <p>
            Chef Sali collaborates with restaurants and food entrepreneurs
            across multiple international markets.
          </p>
        </div>
        <div className="region-list">
          <div className="region">🇮🇳 India</div>
          <div className="region">🇦🇪 UAE</div>
          <div className="region">🌍 Worldwide</div>
        </div>
      </section>
      <div className="section-divider"></div>

      {/* FAQ */}
      <section className="faq">
        <div className="faq-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Answers to common questions about restaurant consulting
            and working with Chef Sali.
          </p>
        </div>
        <div className="faq-container">
          <div className="faq-item">
            <button className="faq-question">
              Do you provide international consulting?
              <span>+</span>
            </button>
            <div className="faq-answer">
              <p>
                Yes. Chef Sali works with restaurants globally through both
                onsite and remote consulting programs.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              Do you help new restaurant startups?
              <span>+</span>
            </button>
            <div className="faq-answer">
              <p>
                Yes. Services include restaurant concept development,
                menu engineering, and kitchen workflow planning.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              Do you specialize in Multi cuisine?
              <span>+</span>
            </button>
            <div className="faq-answer">
              <p>
                Yes. Chef Sali focuses on authentic and modern
                Multi cuisine concepts tailored for global markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>

      {/* CTA */}
      <section className="cta">
        <div className="cta-container">
          <h2>Start Your Restaurant Transformation</h2>
          <p>
            Partner with Chef Sali to build a profitable,
            scalable and high-performing food business.
          </p>
          <a href="https://wa.me/919746199108" target="_blank" rel="noopener noreferrer" className="cta-btn">
            <i className="fab fa-whatsapp"></i> Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
