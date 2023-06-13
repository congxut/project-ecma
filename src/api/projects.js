import instance from "./instance";

const getAll = () => {
  return instance.get("/projects");
};
const getOne = (id) => {
  return instance.get(`/projects/${id}`);
};
const remove = (id) => {
  return instance.delete(`/projects/${id}`);
};
const add = (project) => {
  return instance.post(`/projects`, project);
};
const update = (project) => {
  //{id: 1, title: 'abc'}
  return instance.put(`/projects/${project.id}`, project);
};
export { getAll, remove, add, update };
