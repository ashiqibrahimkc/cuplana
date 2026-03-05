import Image from "next/image";

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>
            Strategic culinary and business consulting designed to elevate
            Indian restaurant brands worldwide.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="services-title">
          <h2>Our Consulting Services</h2>
          <p>
            Strategic culinary and business solutions designed to build
            profitable and scalable restaurant brands.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🍽</div>
            <h3>Restaurant Consulting</h3>
            <p>
              Improve kitchen efficiency, reduce operational costs,
              and implement structured systems that increase profitability.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Menu Engineering</h3>
            <p>
              Design high-performing menus that balance authenticity,
              customer demand, and strategic pricing.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3>Concept Development</h3>
            <p>
              Create strong restaurant concepts with clear positioning,
              branding identity, and scalable operations.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚙</div>
            <h3>Kitchen Optimization</h3>
            <p>
              Streamline kitchen workflow, staff organization,
              and equipment layout for maximum efficiency.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">📖</div>
            <h3>Recipe Standardization</h3>
            <p>
              Build standardized recipes and production systems
              to maintain quality consistency across locations.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🌍</div>
            <h3>Global Indian Cuisine Strategy</h3>
            <p>
              Develop modern Indian cuisine concepts tailored
              for international restaurant markets.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients">
        <h2>Our Proud Clients</h2>
        <p>Restaurants and food businesses worldwide trust Chef Sali.</p>
        <div className="client-slider">
          <div className="slide-track">
            <div className="slide">
              <Image src="/images/basheer coolbar.jpg" alt="Spice Garden" width={140} height={100} />
              <h4>Spice Garden</h4>
              <span>Dubai, UAE</span>
            </div>
            <div className="slide">
              <Image src="/images/chaiwala.jpg" alt="Royal Tandoor" width={140} height={100} />
              <h4>Royal Tandoor</h4>
              <span>London, UK</span>
            </div>
            <div className="slide">
              <Image src="/images/basheer coolbar.jpg" alt="Bombay Kitchen" width={140} height={100} />
              <h4>Bombay Kitchen</h4>
              <span>Toronto, Canada</span>
            </div>
            <div className="slide">
              <Image src="/images/chaiwala.jpg" alt="Masala Street" width={140} height={100} />
              <h4>Masala Street</h4>
              <span>Kochi, India</span>
            </div>
            <div className="slide">
              <Image src="/images/basheer coolbar.jpg" alt="Saffron Palace" width={140} height={100} />
              <h4>Saffron Palace</h4>
              <span>Doha, Qatar</span>
            </div>
            {/* Duplicates for smooth scrolling */}
            <div className="slide">
              <Image src="/images/chaiwala.jpg" alt="Spice Garden" width={140} height={100} />
              <h4>Spice Garden</h4>
              <span>Dubai, UAE</span>
            </div>
            <div className="slide">
              <Image src="/images/basheer coolbar.jpg" alt="Royal Tandoor" width={140} height={100} />
              <h4>Royal Tandoor</h4>
              <span>London, UK</span>
            </div>
            <div className="slide">
              <Image src="/images/chaiwala.jpg" alt="Bombay Kitchen" width={140} height={100} />
              <h4>Bombay Kitchen</h4>
              <span>Toronto, Canada</span>
            </div>
            <div className="slide">
              <Image src="/images/basheer coolbar.jpg" alt="Masala Street" width={140} height={100} />
              <h4>Masala Street</h4>
              <span>Kochi, India</span>
            </div>
            <div className="slide">
              <Image src="/images/chaiwala.jpg" alt="Saffron Palace" width={140} height={100} />
              <h4>Saffron Palace</h4>
              <span>Doha, Qatar</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-container">
          <h2>Ready to Transform Your Restaurant?</h2>
          <p>
            Work with Chef Sali to build profitable,
            scalable, and high-performing food businesses.
          </p>
          <a href="https://wa.me/919746199108" target="_blank" rel="noopener noreferrer" className="cta-btn">
            <i className="fab fa-whatsapp"></i> Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
