import Image from "next/image";

export default function About() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">ABOUT</span>
          <h1>About Chef Sali</h1>
          <div className="hero-line"></div>
          <p>
            Transforming Indian culinary excellence into scalable global
            restaurant businesses through strategic consulting, menu engineering,
            and operational expertise.
          </p>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="timeline-section">
        <div className="container">
          <span className="section-tag">CAREER JOURNEY</span>
          <h2>From Kitchen Worker to Consultant</h2>
          <p className="section-subtitle">
            The journey of Chef Sali — built through dedication, resilience,
            and years of real-world restaurant experience.
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Early Kitchen Career</h3>
                <p>
                  Started working in restaurants for small salaries, learning the
                  fundamentals of kitchen operations, discipline, and teamwork.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Hotel Experience</h3>
                <p>
                  Worked with respected hospitality brands including KPM Tripenta,
                  Kochi Marriott, Hilton Chennai, and The Elephant Court.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>COVID Service</h3>
                <p>
                  During the pandemic, served the community as an ambulance driver,
                  helping people in difficult times while continuing to pursue
                  professional growth.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Restaurant Consultant</h3>
                <p>
                  Transitioned from kitchen operations to restaurant consulting,
                  helping businesses improve menus, systems, and profitability.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Founded Cuplana</h3>
                <p>
                  Built Cuplana Consulting to help restaurants create profitable,
                  scalable, and efficient food businesses worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="about-tag">MY JOURNEY</span>
              <h2>From Kitchen Worker to Global Food Consultant</h2>
              <div className="about-line"></div>
              <p>
                Every successful journey begins with humble beginnings.
                Chef Sali started his culinary career working in restaurants
                for very small salaries, learning the real foundations of
                kitchen operations, discipline, and hard work.
              </p>
              <p>
                Through years of experience in restaurant kitchens, he mastered
                menu engineering, kitchen systems, food costing, and team management.
                But his journey was never easy. During the difficult COVID period,
                he even worked as an ambulance driver, helping people in crisis
                while continuing to fight for his dream of building a better future.
              </p>
              <p>
                These experiences shaped his mindset — resilience, discipline,
                and leadership. With over <strong>7+ years of industry experience</strong>,
                Chef Sali transformed his knowledge into strategic restaurant consulting.
              </p>
              <p>
                This vision led to the creation of <strong>Cuplana Consulting</strong>,
                a consulting brand focused on helping restaurants build profitable
                systems, scalable operations, and strong food brands across the world.
              </p>
            </div>
            <div className="about-image">
              <div className="image-frame">
                <Image src="/images/chefmain2.png" alt="Chef Sali" width={420} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience-section">
        <div className="container">
          <span className="section-tag">CAREER EXPERIENCE</span>
          <h2>Professional Experience</h2>
          <p className="section-subtitle">
            Leading hospitality brands and restaurants where Chef Sali built
            his culinary expertise and operational knowledge.
          </p>
          <div className="experience-grid">
            <div className="exp-card">
              <div className="exp-icon">🏨</div>
              <h3>KPM Tripenta Hotel</h3>
              <p>Luxury hospitality experience in premium dining operations.</p>
            </div>
            <div className="exp-card">
              <div className="exp-icon">⭐</div>
              <h3>Kochi Marriott Hotel</h3>
              <p>Five-star hotel kitchen operations and international cuisine exposure.</p>
            </div>
            <div className="exp-card">
              <div className="exp-icon">🌍</div>
              <h3>Hilton Chennai</h3>
              <p>Global hospitality standards and high-volume service management.</p>
            </div>
            <div className="exp-card">
              <div className="exp-icon">🍃</div>
              <h3>The Elephant Court</h3>
              <p>Luxury resort culinary operations and authentic Kerala cuisine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="expertise-section">
        <div className="container">
          <span className="section-tag">CORE EXPERTISE</span>
          <h2>Experience &amp; Expertise</h2>
          <p className="section-subtitle">
            Strategic culinary and operational expertise developed through years of
            hands-on restaurant experience and consulting projects.
          </p>
          <div className="expertise-grid">
            <div className="expertise-item">
              <div className="exp-icon">🍛</div>
              <h3>Indian Cuisine Development</h3>
            </div>
            <div className="expertise-item">
              <div className="exp-icon">📊</div>
              <h3>Menu Engineering &amp; Pricing Strategy</h3>
            </div>
            <div className="expertise-item">
              <div className="exp-icon">⚙️</div>
              <h3>Kitchen Workflow Optimization</h3>
            </div>
            <div className="expertise-item">
              <div className="exp-icon">🏢</div>
              <h3>Restaurant Concept Creation</h3>
            </div>
            <div className="expertise-item">
              <div className="exp-icon">📈</div>
              <h3>Profit-Focused Operational Systems</h3>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="philosophy-section">
        <div className="container">
          <span className="section-tag">OUR APPROACH</span>
          <h2>Our Philosophy</h2>
          <p className="section-subtitle">
            Successful restaurants are not built only on great food —
            they require structure, strategy, and authenticity.
          </p>
          <div className="philosophy-grid">
            <div className="pillar">
              <span className="pillar-number">01</span>
              <div className="pillar-icon">🍛</div>
              <h3>Authenticity</h3>
              <p>
                Preserving the true essence of Indian cuisine while adapting
                presentation and menus for modern global markets.
              </p>
            </div>
            <div className="pillar">
              <span className="pillar-number">02</span>
              <div className="pillar-icon">⚙️</div>
              <h3>Operational Discipline</h3>
              <p>
                Efficient kitchen systems, workflow optimization, and structured
                processes ensure consistent quality and team productivity.
              </p>
            </div>
            <div className="pillar">
              <span className="pillar-number">03</span>
              <div className="pillar-icon">📈</div>
              <h3>Strategic Profit Planning</h3>
              <p>
                Smart menu engineering, pricing strategy, and cost control
                transform restaurants into sustainable and profitable businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CUPLANA */}
      <section className="cuplana-section">
        <div className="cuplana-grid">
          <div className="cuplana-left">
            <span className="section-tag">THE IDEA BEHIND THE BRAND</span>
            <h2>What is Cuplana?</h2>
            <p>
              <strong>Cuplana</strong> is derived from the concept of
              <strong>&quot;Cup + Plan A.&quot;</strong>
            </p>
            <p>
              In restaurant consulting, success is never accidental. It comes from
              precise planning, structured systems, and strategic execution.
              Cuplana represents the philosophy that every successful restaurant
              begins with a clear and measurable <strong>Plan A</strong>.
            </p>
            <p>
              The word <strong>Cup</strong> symbolizes precision — measuring,
              balancing, and perfecting recipes and kitchen systems.
              <strong>Plan A</strong> represents priority — the first and most
              important strategy required to build a profitable restaurant.
            </p>
            <p>
              Through Cuplana Consulting, Chef Sali helps restaurants transform
              culinary creativity into structured business systems that deliver
              consistency, efficiency, and long-term profitability.
            </p>
          </div>
          <div className="cuplana-right">
            <div className="cuplana-box">
              <h3>CUP</h3>
              <p>
                Precision in recipes, ingredient balance,
                kitchen workflow, and culinary consistency.
              </p>
            </div>
            <div className="cuplana-box highlight">
              <h3>PLAN A</h3>
              <p>
                The first priority strategy that ensures restaurant
                profitability, operational clarity, and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <div className="container">
          <span className="section-tag">OUR PURPOSE</span>
          <h2>Mission &amp; Vision</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Mission</h3>
              <p>
                Our mission is to help restaurant owners transform their culinary
                passion into profitable and sustainable food businesses. Through
                strategic menu engineering, efficient kitchen systems, and
                data-driven operational planning, Cuplana empowers restaurants to
                improve performance, reduce waste, and achieve long-term growth.
              </p>
            </div>
            <div className="mission-card">
              <h3>Vision</h3>
              <p>
                Our vision is to become a globally trusted restaurant consulting
                brand known for combining authentic Indian culinary expertise with
                modern business strategy. Cuplana aims to guide restaurants
                worldwide in building strong food brands, scalable systems, and
                sustainable profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Elevate Your Restaurant?</h2>
          <p>
            Let&apos;s build a profitable, scalable food business together.
          </p>
          <a href="https://wa.me/919746199108" target="_blank" rel="noopener noreferrer" className="cta-btn">
            <i className="fab fa-whatsapp"></i> Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
