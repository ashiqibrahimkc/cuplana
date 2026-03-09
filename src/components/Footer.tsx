import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-col">
          <h2 className="logo">Cuplana</h2>
          <p>
            Chef Sali is a global Multi cuisine consultant with 4+ years of experience,
            helping restaurants worldwide build profitable and scalable food businesses.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/sali_chef_?igsh=MXNuZW4yM3Z1dHBvNw=="><i className="fab fa-instagram"></i></a>
            <a href="https://www.instagram.com/cuplana.in?igsh=bHJpb281MHBibGYz"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://wa.me/919746199108"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Restaurant Consulting</a></li>
            <li><a href="#">Menu Engineering</a></li>
            <li><a href="#">Concept Development</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Email: cuplanafoodconsultingcompany@gmail.com</li>
            <li>Phone: +91 97461 99108</li>
            <li>Worldwide Consulting</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2026 Salichef | Cuplana Business Consulting. All Rights Reserved.
      </div>
    </footer>
  );
}
