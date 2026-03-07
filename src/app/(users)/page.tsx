import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="s-section">
        <div className="s-left">
          <h2>Cuplana – Helping Restaurants Increase Profit &amp; Build Strong Food Brands</h2>
          <p>Food &amp; Restaurant Growth Specialist | <span className="counter" data-target="4">0</span>+ Years Industry Experience</p>
          <Link href="/contact" className="btn">Book with Cuplana</Link>
        </div>
        <div className="s-right">
          <Image src="/images/Cuplana Brandmark.png" alt="Cuplana Logo" width={250} height={250} />
        </div>
      </section>
      <div className="section-divider"></div>

      {/* INTRO SECTION */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-image">
            <Image src="/images/Sali Chef .png" alt="Chef Sali" width={350} height={350} />
          </div>
          <div className="intro-content">
            <h2>Chef Sali</h2>
            <p>
              With 4+ years of experience, Chef Sali is a global Multi cuisine consultant
              helping restaurants elevate their culinary standards and business performance.
              Through strategic menu engineering and operational excellence,
              he transforms concepts into profitable ventures.
            </p>
            <Link href="/about" className="btn">Learn More</Link>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>

      {/* SERVICES */}
      <section className="services-section">
        <h2>Our Services</h2>
        <p>
          Strategic culinary and business solutions designed to elevate Multi cuisine food brands worldwide.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-utensils"></i>
            </div>
            <h3>Restaurant Consulting</h3>
            <p>
              Improve operational efficiency, reduce food costs, and increase profitability
              with structured kitchen systems and expert guidance.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <h3>Menu Engineering</h3>
            <p>
              Develop high-performing, authentic Multi cuisine menus optimized for pricing strategy,
              customer appeal, and maximum margins.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Concept Development</h3>
            <p>
              Build scalable Indian restaurant concepts with strong branding, positioning,
              and operational clarity for global markets.
            </p>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>

      {/* WHY CHOOSE */}
      <section className="why-section">
        <h2>The Cuplana Advantage</h2>
        <p className="subtitle">
          Combining authentic Multi cuisine culinary expertise with strategic business insight to deliver measurable global results.
        </p>
        <div className="why-grid">
          <div className="why-card">
            <div className="icon">🌍</div>
            <h3>Worldwide Consulting</h3>
            <p>Supporting restaurants globally with scalable systems tailored to local markets.</p>
          </div>
          <div className="why-card">
            <div className="icon">📈</div>
            <h3>Profit-Focused Strategy</h3>
            <p>Every solution is designed to improve efficiency, reduce waste, and increase profitability.</p>
          </div>
          <div className="why-card">
            <div className="icon">🍛</div>
            <h3>Authentic &amp; Modern</h3>
            <p>Blending traditional Multi cuisineflavors with modern presentation and global trends.</p>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Elevate Your Worldwide Food Business?</h2>
          <p>
            Partner with Chef Sali and transform your restaurant with
            profitable strategies, optimized menus, and scalable systems.
          </p>
          <a href="https://wa.me/919746199108" target="_blank" rel="noopener noreferrer" className="cta-btn">
            <i className="fab fa-whatsapp"></i> Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
