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
            <p>
              El todo list es una aplicacion sencilla que sirve para hacer una
              listas de tareas en la cual se puede consultar tareas por filtro,
              editar, borrar y agregar.
            </p>
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
            <p>
              Esta es una aplicacion hecha para buscar paises con detallada
              informacion sobre ellos, tambien se pueden agregar paises en caso
              de que no existan o eliminarlos o editar su informacion
            </p>
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
