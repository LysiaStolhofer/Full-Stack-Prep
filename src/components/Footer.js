import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <img
      src="/logo192.png"
      alt="logo"
      style={{ height: "50px" }}
    />
    <p>
      Copyright <FontAwesomeIcon icon={faCopyright} /> 2020 Team FSP
        </p>
  </footer>
);

export default Footer;
