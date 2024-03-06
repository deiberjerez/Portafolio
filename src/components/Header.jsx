import React from "react";
import "../styles/App.css";
import { Icon } from "@iconify/react";

function Header() {
  return (
    <main className="Header" id="home">
      <div className="leftSide">
        <h1 className="h1 animate__animated animate__fadeInUp">Welcome to my portfolio</h1>
        <article className="titles">
          <h2 className="animate__animated animate__fadeInUp">My name is Deiber</h2>
          <h2 className="animate__animated animate__fadeInUp">I'm a web developer</h2>
        </article>
        <article className="icons animate__animated animate__fadeInUp">
          <a href="https://www.linkedin.com/in/deiber-jerez/" target="_blank">
            <Icon icon="mdi:linkedin" width="48" height="48" color="white" />
          </a>
          <a href="mailto:deiber22cora@gmail.com" target="_blank">
            <Icon icon="mdi:gmail" width="48" height="48" color="white" />
          </a>
          <a href="https://github.com/deiberjerez" target="_blank">
            <Icon icon="mdi:github" width="48" height="48" color="white" />
          </a>
        </article>
      </div>
    </main>
  );
}

export default Header;
