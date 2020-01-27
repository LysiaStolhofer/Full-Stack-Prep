import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    <p>
      Copyright <FontAwesomeIcon icon={faCopyright} /> 2020 Team FSP
        </p>
  </footer>
);

export default Footer;
