import { Icon } from "@iconify/react";
import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <section className="skillsContainer">
        <article className="containerSkill">
          <h4 className="titleSkill">Front-end</h4>
          <div className="itensSkill">
            <Icon icon="vscode-icons:file-type-html" width="60" height="60" />
            <Icon icon="vscode-icons:file-type-css" width="60" height="60" />
            <Icon icon="logos:javascript" width="60" height="60" />
            <Icon icon="logos:react" width="60" height="60" />
          </div>
        </article>
        <article className="containerSkill">
          <h4 className="titleSkill">Back-end</h4>
          <div className="itensSkill">
          <Icon icon="vscode-icons:file-type-node" width="60" height="60" />
              <Icon icon="simple-icons:express" width="60" height="60" />
              <Icon icon="logos:graphql" width="60" height="60" />
              <Icon icon="devicon:java" width="60" height="60" />
              <Icon icon="logos:postgresql" width="60" height="60" />
              <Icon icon="logos:mongodb-icon" width="60" height="60" />
          </div>
        </article>
        <article className="containerSkill">
          <h4 className="titleSkill">Tools</h4>
          <div className="itensSkill">
          <Icon icon="devicon:git" width="60" height="60" />
          <Icon icon="mdi:github" width="60" height="60" />
          <Icon icon="vscode-icons:file-type-vscode2" width="60" height="60" />
          <Icon icon="logos:intellij-idea" width="60" height="60" />
          <Icon icon="logos:trello" width="60" height="60" />
          <Icon icon="logos:npm" width="60" height="60" />
          <Icon icon="logos:jira" width="60" height="60" />
          <Icon icon="codicon:terminal-bash" width="60" height="60" />
          </div>
        </article>
      </section>
    </section>
  );
};

export default Skills;
