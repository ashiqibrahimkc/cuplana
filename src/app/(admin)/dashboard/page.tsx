"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "Basheer Coolbar", location: "Kochi, India", image: "/images/basheer coolbar.jpg" },
    { id: 2, name: "Chaiwala", location: "Kerala, India", image: "/images/chaiwala.jpg" },
  ]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    // Check authentication
    if (typeof window !== 'undefined') {
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      if (!isAuthenticated) {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("isAuthenticated");
    }
    router.push("/login");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Convert to base64 for preview and storage
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addRestaurant = () => {
    if (!name || !location || !image) {
      alert("Please fill all fields");
      return;
    }

    const newRestaurant = {
      id: Date.now(),
      name,
      location,
      image,
    };

    setRestaurants([...restaurants, newRestaurant]);

    setName("");
    setLocation("");
    setImage("");
    setImageFile(null);
    
    // Reset file input
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const deleteRestaurant = (id: number) => {
    if (confirm("Are you sure you want to delete this restaurant?")) {
      setRestaurants(restaurants.filter(r => r.id !== id));
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
            <div className="stat-card">
              <div className="stat-icon">🏢</div>
              <div>
                <div className="stat-number">{restaurants.length}</div>
                <div className="stat-label">Total Restaurants</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div>
                <div className="stat-number">12</div>
                <div className="stat-label">Active Projects</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div>
                <div className="stat-number">24</div>
                <div className="stat-label">Total Clients</div>
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

            <button onClick={addRestaurant} className="add-btn">Add Restaurant</button>
          </div>
        </div>

        {/* RESTAURANT GRID */}
        <div className="restaurants-section">
          <h2>Client Restaurants</h2>
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
        </div>
      </div>

    </div>
  );
}
