import instance from "./instance";

const getProjects = () => {
  return instance.get("/projects");
};
const getProject = (id) => {
  return instance.get(`/projects/${id}`);
};
const deleteProject = (id) => {
  return instance.delete(`/projects/${id}`);
};
const addProject = (project) => {
  return instance.post(`/projects`, project);
};
const updateProject = (project) => {
  return instance.put(`/projects/${project.id}`, project);
};
export { getProjects, deleteProject, addProject, updateProject };
