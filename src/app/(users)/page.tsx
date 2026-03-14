"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


interface Restaurant {
  id: string;
  name: string;
  location: string;
  image: string;
}

export default function Home() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetchRestaurants();
    }, []);
  
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('/api/restaurants');
        const data = await response.json();
        
        if (response.ok) {
          setRestaurants(data.restaurants);
        } else {
          console.error('Failed to fetch restaurants:', data.error);
        }
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setIsLoading(false);
      }
    };
  return (
    <>
      {/* HERO SECTION */}
      <section className="s-section">
        <div className="s-left">
  <h2>Cuplana – Food Consulting for Modern Restaurant Brands</h2>
  <p>
    We help restaurants build profitable and scalable food brands through
    expert consulting in menu development, kitchen systems, cost control,
    and operational strategy.
  </p>

  <p>
    <span className="counter" data-target="4">0</span>+ Years Experience in
    Restaurant Consulting
  </p>

  <Link href="/contact" className="btn">Consult with Cuplana</Link>
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

  {/* ONE BUTTON FOR ALL SERVICES */}
  <div className="services-btn-wrapper">
  <Link href="/services" className="services-btn">
    Know More <span>→</span>
  </Link>
</div>

</section>

<div className="section-divider"></div>


      {/* CLIENTS */}
      <section className="clients-section">
        <span className="section-tag">GLOBAL CLIENTS</span>
        <h2>Restaurants We&apos;ve Worked With</h2>
        <p className="section-subtitle">
          Restaurants and food businesses across different regions trust
          Cuplana consulting for operational systems, menu engineering,
          and concept development.
        </p>
        
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
            Loading restaurants...
          </div>
        ) : restaurants.length > 0 ? (
          <div className="client-slider">
            <div 
              className={restaurants.length > 4 ? "slide-track" : "slide-track-static"}
              style={{
                
                justifyContent: restaurants.length > 4 ? 'flex-start' : 'center'
              }}
            >
              {/* Display actual restaurants from Firestore */}
              {restaurants.map((restaurant) => (
                <div className="slide" key={restaurant.id}>
                  <Image 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    width={340} 
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="slide-content">
                    <h4>{restaurant.name}</h4>
                    <span>📍 {restaurant.location}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate for infinite scroll effect - only if more than 4 */}
              {restaurants.length > 4 && restaurants.map((restaurant) => (
                <div className="slide" key={`duplicate-${restaurant.id}`}>
                  <Image 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    width={340} 
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="slide-content">
                    <h4>{restaurant.name}</h4>
                    <span>📍 {restaurant.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
            No restaurants to display yet.
          </div>
        )}
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
        <div className="services-btn-wrapper">
  <Link href="/about" className="services-btn">
    Know More <span>→</span>
  </Link>
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
