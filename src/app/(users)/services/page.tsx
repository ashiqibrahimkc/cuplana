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
      Professional culinary and restaurant consulting solutions designed
      to help you build efficient, profitable, and scalable food businesses.
    </p>
  </div>

  <div className="services-grid">

    <div className="service-card">
      <div className="service-icon">🍳</div>
      <h3>Kitchen Layout Planning</h3>
      <p>
        We design efficient kitchen layouts based on your menu, workflow,
        and investment budget to ensure smooth operations and maximum
        productivity.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">🛒</div>
      <h3>Purchase Support</h3>
      <p>
        Complete guidance in purchasing kitchen equipment, raw materials,
        crockery, cutlery, and other essential items required for your restaurant.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">📋</div>
      <h3>Menu Training</h3>
      <p>
        Hands-on training for all menu items including preparation methods,
        presentation standards, and cooking techniques to ensure consistency
        and quality.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">💰</div>
      <h3>Cost Counseling</h3>
      <p>
        Detailed food cost calculation based on current market prices,
        helping you set the right selling price while maintaining
        profitable margins.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">🍽</div>
      <h3>Dining Layout Design</h3>
      <p>
        Professional dining space planning to maximize seating capacity,
        enhance customer comfort, and improve overall restaurant experience.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">👨‍🍳</div>
      <h3>Staff Training</h3>
      <p>
        Training programs for kitchen and service staff to improve
        operational efficiency, food preparation standards, and
        customer service quality.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">📦</div>
      <h3>Initial Purchase Support</h3>
      <p>
        Assistance in sourcing and purchasing the initial inventory,
        kitchen equipment, and operational supplies required to start
        your restaurant smoothly.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">🌍</div>
      <h3>Food Concept & Consulting</h3>
      <p>
        Development of unique food concepts, menu planning, cuisine
        selection, and brand positioning to create a competitive and
        successful restaurant identity.
      </p>
    </div>
    <div className="service-card">
  <div className="service-icon">📊</div>
  <h3>Menu Development</h3>
  <p>
    Creation of balanced menus that combine customer demand,
    food cost control, and modern culinary trends.
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
