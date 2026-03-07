"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate a slight delay for better UX
    setTimeout(() => {
      // Simple login validation (replace with actual authentication)
      if (email === "admin@cuplana.com" && password === "admin123") {
        // Store authentication state (in production, use proper auth like NextAuth)
        if (typeof window !== 'undefined') {
          localStorage.setItem("isAuthenticated", "true");
        }
        router.push("/dashboard");
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h2>Cuplana</h2>
          <p className="login-sub">Admin Portal Login</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="admin@cuplana.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <span style={{
                  width: '18px',
                  height: '18px',
                  border: '3px solid rgba(255,255,255,0.3)',
                  borderTop: '3px solid white',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }}></span>
                Signing In...
              </span>
            ) : (
              'Sign In'
            )}
          </button>

          <style jsx>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
            .login-btn:disabled {
              opacity: 0.7;
              cursor: not-allowed;
            }
          `}</style>

        </form>

        <div className="login-footer">
          <Link href="/">← Back to Website</Link>
        </div>

      </div>

    </div>
  );
}
