import instance from "./instance";

const getSkills = () => {
  return instance.get("/skills");
};

const getSkill = (id) => {
  return instance.get(`/skills/${id}`);
};
const addSkill = (skill) => {
  return instance.post(`/skills`, skill);
};
const updateSkill = (product) => {
  return instance.put(`/skills/${skill.id}`, skill);
};
const deleteSkill = (id) => {
  return instance.delete(`/skills/${id}`);
};

export { getSkills, getSkill, addSkill, updateSkill, deleteSkill };
