import { Icon } from "@iconify/react";
import React from "react";

const Projects = () => {
  return (
    <main className="Projects" id="projects">
      <h2>Projects</h2>
      <section className="projectsContainer">
        <article className="project">
          <picture>
            <img
              src="https://i.postimg.cc/Kj5mBDrY/Captura-de-pantalla-2024-02-29-192807.png"
              alt="Screenchot de el todo list"
            />
          </picture>
          <div className="projectInfo">
            <h3>Todo List</h3>
            <p>The todo list is a simple application that is used to make a task list in which you can see tasks to filter, edit, delete and add.</p>
            <span>
              <Icon icon="vscode-icons:file-type-html" width="42" height="42" />
              <Icon icon="vscode-icons:file-type-css" width="42" height="42" />
              <Icon icon="logos:javascript" width="42" height="42" />
            </span>
            <div className="buttons">
              <a
                href="https://github.com/IsaacBerri/To-Do-list-RetoFinal.git"
                target="_blank"
              >
                Code
              </a>
              <a
                href="https://to-do-list-reto-final.vercel.app/"
                target="_blank"
              >
                View
              </a>
            </div>
          </div>
        </article>
        <article className="project">
          <picture>
            <img
              src="https://i.postimg.cc/PrkLD6hd/Captura-de-pantalla-world.webp"
              alt="Screenchot de world planet"
            />
          </picture>
          <div className="projectInfo">
            <h3>World Planet</h3>
            <p>This is an application made to search for countries with detailed information about them, you can also add countries if they do not exist or delete them or edit their information.</p>
            <span>
              <Icon icon="vscode-icons:file-type-html" width="42" height="42" />
              <Icon icon="vscode-icons:file-type-css" width="42" height="42" />
              <Icon icon="logos:javascript" width="42" height="42" />
              <Icon icon="logos:react" width="42" height="42" />
              <Icon icon="vscode-icons:file-type-node" width="42" height="42" />
              <Icon icon="simple-icons:express" width="42" height="42" />
              <Icon icon="logos:graphql" width="42" height="42" />
            </span>
            <div className="buttons">
              <a
                href="https://github.com/deiberjerez/apipaises.git"
                target="_blank"
              >
                Code
              </a>
              <a href="https://app-countries2.vercel.app/" target="_blank">
                View
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Projects;
