import instance from "./instance";

const getPersions = () => {
  return instance.get("/persions");
};

const getPersion = (id) => {
  return instance.get(`/persions/${id}`);
};
const addPersion = (persion) => {
  return instance.post(`/persions`, persion);
};
const updatePersion = (persion) => {
  return instance.put(`/persions/${persion.id}`, persion);
};
const deletePersion = (id) => {
  return instance.delete(`/persions/${id}`);
};

export { getPersions, getPersion, addPersion, updatePersion, deletePersion };
