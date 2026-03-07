"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Restaurant {
  id: string;
  name: string;
  location: string;
  image: string;
}

export default function Services() {
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
            <h3>Global Multi cuisine Strategy</h3>
            <p>
              Develop modern Multi cuisine concepts tailored
              for international restaurant markets.
            </p>
          </div>
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
                width: restaurants.length > 4 
                  ? `calc(260px * ${restaurants.length * 2})` 
                  : 'auto',
                justifyContent: restaurants.length > 4 ? 'flex-start' : 'center'
              }}
            >
              {/* Display actual restaurants from Firestore */}
              {restaurants.map((restaurant) => (
                <div className="slide" key={restaurant.id}>
                  <Image 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    width={120} 
                    height={80}
                    style={{ objectFit: 'cover' }}
                  />
                  <h4>{restaurant.name}</h4>
                  <span>{restaurant.location}</span>
                </div>
              ))}
              {/* Duplicate for infinite scroll effect - only if more than 4 */}
              {restaurants.length > 4 && restaurants.map((restaurant) => (
                <div className="slide" key={`duplicate-${restaurant.id}`}>
                  <Image 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    width={120} 
                    height={80}
                    style={{ objectFit: 'cover' }}
                  />
                  <h4>{restaurant.name}</h4>
                  <span>{restaurant.location}</span>
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
