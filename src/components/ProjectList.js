const ProjectList = ({ projects }) => {
  return `
    ${projects
      .map((project) => {
        return /*html */ `
            <div class="col">
            <h3><a href="/projects/${project.id}">${project.name}</a></h3>
            <span>${project.image}</span>
        </div>
        `;
      })
      .join("")}
    `;
};

export default ProjectList;
