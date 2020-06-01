import React from "react";
import { Link } from "react-router-dom";

import { FootContainer, FootButton } from "./Footer.style";

const Footer = () => (
  <FootContainer>
    <FootButton>
      <Link to="/contato">Get in touch / Support</Link>
    </FootButton>
    <a
      href="https://www.cesarcorregiari.com"
      target="blank"
      rel="noopener noreferrer"
    >
      Website built by Cesar. Click here to access my personal page.
    </a>
  </FootContainer>
);

export default Footer;
