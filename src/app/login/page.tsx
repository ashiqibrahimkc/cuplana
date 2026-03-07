"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(email,password);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Login</h2>
        <p className="login-sub">Access your account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>

        </form>

      </div>

    </div>
  );
}