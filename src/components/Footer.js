import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              PESONA NUSANTARA
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <blockquote class="blockquote text-center">
            <p>
              Situs ini merupakan situs yang bertujuan untuk memberikan
              informasi dan bukan sebagai tujuan komersial. Informasi yang
              diberikan ialah seputar pariwisata yang ada di Indonesia.
            </p>
          </blockquote>
          <small class="website-rights">PESONA NUSANTARA © 2020</small>
          <div class="social-icons"></div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Pesona Nusantara by Kelompok13 -
            All rights reserved
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
