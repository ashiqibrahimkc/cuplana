"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function AdminNavbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error('Logout error:', error);
      router.push("/login");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="admin-nav">
      <div className="admin-nav-container">
        <h2>{isAuthenticated ? "Admin Dashboard" : "Cuplana"}</h2>
        
        {isAuthenticated && (
          <>
            {/* Hamburger Icon */}
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Nav Actions */}
            <div className={`nav-actions ${isMenuOpen ? 'active' : ''}`}>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
