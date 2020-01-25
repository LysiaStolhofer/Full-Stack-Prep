import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="bg-light pt-2 text-center">
    <img
      src="/FullStackPrep.png"
      alt="logo"
      style={{ height: "50px" }}
    />
    <p>
      Copyright <FontAwesomeIcon icon={faCopyright} /> 2020 Team FSP
        </p>
  </footer>
);

export default Footer;
