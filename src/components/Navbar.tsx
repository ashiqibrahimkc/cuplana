"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    const hamburger1 = document.querySelector(".hamburger1");
    const menu = document.querySelector(".menu");

    const handleClick = () => {
      menu?.classList.toggle("active");
    };

    hamburger1?.addEventListener("click", handleClick);
    return () => hamburger1?.removeEventListener("click", handleClick);
  }, []);

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    const menu = document.querySelector(".menu");
    menu?.classList.remove("active");
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h3>Cuplana</h3>
          </div>
          <div className="nav-right">
            <ul className="menu">
              <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
              <li><Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link></li>
              <li><Link href="/services" className={pathname === "/services" ? "active" : ""}>Services</Link></li>
              <li><Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link></li>
            </ul>
            <div className="hamburger1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <div className="menu-overlay"></div>
    </>
  );
}
