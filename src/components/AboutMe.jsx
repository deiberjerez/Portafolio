import React from "react";
import "../styles/App.css";

const AboutMe = () => {
  return (
    <main className="AboutMe" id="about">
      <section className="photo">
        <img
          src="https://i.postimg.cc/Pxg6bw4v/recortada-removebg-preview.png"
          alt="Una foto de Deiber"
        />
      </section>
      <article className="about">
        <h2 className="h2">About me</h2>
        <p>I started without knowing what programming was and now I'm passionate about it, I've seen backend but I prefer frontend. I like to investigate what I don't understand, it doesn't matter. how simple or complicated it is. I leave you a button where you will find my CV</p>
        <button className="buttonD">Download CV</button>
      </article>
    </main>
  );
};

export default AboutMe;