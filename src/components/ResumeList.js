const ResumeList = ({resumes}) => {
  return /*html */`
    ${resumes
      .map((resume) => {
        return /*html */ `
            <div class="col">
            <h3><a href="/resume/${resume.id}">${resume.title}</a></h3>
            <span>${resume.description}</span>
        </div>
        `;
      })
      .join("")}
    `;
};

export default ResumeList;
