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
      <div className="section-divider"></div>

      {/* CAREER TIMELINE */}
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2020 – 108 Ambulance Driver</h3>
            <p>
              During the COVID-19 pandemic, served the community as a 108 ambulance driver,
              supporting emergency healthcare services and helping people in critical situations.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2022 – Diploma in Hotel Management</h3>
            <p>
              Completed a Diploma in Hotel Management from Calicut Face Institution,
              gaining professional training in culinary techniques and hospitality operations.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2022 – Mozon Restaurant (Arabic Cuisine)</h3>
            <p>
              Began professional kitchen experience working with Arabic cuisine,
              learning international cooking styles and restaurant workflow.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2022 – KPM Tripenta Hotel, Calicut</h3>
            <p>
              Completed industrial training (OJT) in the multi-cuisine department,
              gaining hands-on experience in hotel kitchen operations.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2023 – Hilton Chennai</h3>
            <p>
              Worked in the Continental cuisine department as part of industrial training,
              developing skills in international culinary standards.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2023 – Kochi Marriott Hotel</h3>
            <p>
              Gained experience in the Pastry &amp; Bakery department,
              learning professional baking and dessert production techniques.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2023–2024 – The Elephant Court, Thekkady</h3>
            <p>
              Worked as North Indian Commis in a luxury resort environment,
              handling authentic North Multi cuisine production.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2024 – Chef de Partie, KPM Tripenta</h3>
            <p>
              Promoted to Chef de Partie (CDP) in the multi-cuisine department,
              managing kitchen operations, food quality, and team coordination.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2024 – Started Food Business Consulting</h3>
            <p>
              Transitioned into restaurant consulting, helping food businesses
              improve menus, kitchen systems, and profitability through the
              Cuplana consulting approach.
            </p>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>

      {/* JOURNEY SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="about-tag">MY JOURNEY</span>
              <h2>
              From Kitchen Worker <br /> to Global Food Consultant
              </h2>
              <div className="about-line"></div>
             <p>
              Chef Sali began his culinary journey working in restaurant kitchens for small salaries,
              learning discipline, kitchen systems, and the foundations of professional cooking.
              </p>

              <p>
              Through years of hands-on experience, he mastered menu engineering, food costing,
              team management, and operational efficiency across multi-cuisine kitchens.
              </p>

              <p>
              Today, with <strong>4+ years of industry experience</strong>, he helps restaurants build
              profitable systems and stronger food brands through
              <strong> Cuplana Consulting</strong>.
              </p>
            </div>
            <div className="about-image">
            <Image
              src="/images/chefmain2.png"
              alt="Chef Sali"
              width={800}
              height={1000}
              className="chef-image"
            />
          </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>

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
      <div className="section-divider"></div>

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
              <h3>Multi cuisine Development</h3>
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
      <div className="section-divider"></div>

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
                Preserving the true essence of Multi cuisine while adapting
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
      <div className="section-divider"></div>

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
      <div className="section-divider"></div>

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
      <div className="section-divider"></div>

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
