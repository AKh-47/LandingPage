import React from "react";
import "./Projects.scss";

import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__top">
        <Link to="/">
          <div className="projects__home">
            <i class="fas fa-home"></i>
          </div>
        </Link>
      </div>
      <div className="projects__mid"></div>
      <div className="projects__bottom">Landing Bottom</div>
    </div>
  );
}
