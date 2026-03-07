"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { uploadToCloudinary } from "@/lib/cloudinary";

interface Restaurant {
  id: string;
  name: string;
  location: string;
  image: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  // Check authentication with Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (!user) {
        router.push("/login");
      } else {
        setIsLoading(false);
        fetchRestaurants();
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Fetch restaurants from Firestore
  const fetchRestaurants = async () => {
    setIsFetching(true);
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
      setIsFetching(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addRestaurant = async () => {
    if (!name || !location || !imageFile) {
      alert("Please fill all fields and select an image");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Upload image to Cloudinary
      const imageUrl = await uploadToCloudinary(imageFile);

      // 2. Save restaurant data to Firestore via API
      const response = await fetch('/api/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          location,
          image: imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add restaurant');
      }

      const newRestaurant = await response.json();
      
      // 3. Update local state
      setRestaurants([newRestaurant, ...restaurants]);

      // 4. Reset form
      setName("");
      setLocation("");
      setImageFile(null);
      setImagePreview("");
      
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      alert("Restaurant added successfully!");
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert("Failed to add restaurant. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteRestaurant = async (id: string) => {
    if (!confirm("Are you sure you want to delete this restaurant?")) {
      return;
    }

    try {
      const response = await fetch(`/api/restaurants?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete restaurant');
      }

      // Update local state
      setRestaurants(restaurants.filter(r => r.id !== id));
      alert("Restaurant deleted successfully!");
    } catch (error) {
      console.error('Error deleting restaurant:', error);
      alert("Failed to delete restaurant. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        background: '#f8fafc',
        color: '#718096'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid #e2e8f0',
          borderTop: '4px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ marginTop: '20px', fontWeight: 600 }}>Loading Dashboard...</p>
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Restaurant Dashboard</h1>
          <p>Manage your client restaurants and projects</p>
        </div>

          <div className="stats-cards">
            <div className="stat-card stat-card-single">
              <div className="stat-icon">🏢</div>
              <div>
                <div className="stat-number">
                  {isFetching ? <span className="skeleton-text" style={{ width: '30px', height: '28px', display: 'inline-block', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', animation: 'shimmer 1.5s infinite' }} /> : restaurants.length}
                </div>
                <div className="stat-label">Total Restaurants</div>
              </div>
            </div>
          </div>

        {/* ADD FORM */}
        <div className="form-section">
          <h2>Add New Restaurant</h2>
          <div className="form">
            <input
              placeholder="Restaurant name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
            />

            <button onClick={addRestaurant} className="add-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Restaurant'}
            </button>
          </div>
        </div>

        {/* RESTAURANT GRID */}
        <div className="restaurants-section">
          <h2>Client Restaurants</h2>
          {isFetching ? (
            <div className="grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card skeleton-card">
                  <div className="card-image" style={{ background: 'rgba(255,255,255,0.07)', height: '200px', animation: 'shimmer 1.5s infinite' }} />
                  <div className="card-content">
                    <div style={{ height: '20px', borderRadius: '6px', background: 'rgba(255,255,255,0.07)', marginBottom: '10px', animation: 'shimmer 1.5s infinite' }} />
                    <div style={{ height: '14px', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', width: '60%', animation: 'shimmer 1.5s infinite' }} />
                  </div>
                </div>
              ))}
            </div>
          ) : restaurants.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#718096',
              fontSize: '16px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🏪</div>
              <p style={{ fontWeight: 600, marginBottom: '8px' }}>Currently no restaurants</p>
              <p>Start by adding your first restaurant above</p>
            </div>
          ) : (
            <div className="grid">
              {restaurants.map((r) => (
                <div key={r.id} className="card">
                  <div className="card-image">
                    <Image 
                      src={r.image} 
                      alt={r.name} 
                      width={300}
                      height={200}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div className="card-content">
                    <h3>{r.name}</h3>
                    <p>📍 {r.location}</p>

                    <button
                      className="delete"
                      onClick={() => deleteRestaurant(r.id)}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
