import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="copyright">
      <div class="container-fluid">
        <div class="row">
          <div class="col text-light text-center">
            <p class="m-3">
              <Link to="/" className="text-link">
                © 2020 - 2021 Copyright: <i class="fas fa-code"></i> Code Seribu
                Technology. Allright Reserved
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
