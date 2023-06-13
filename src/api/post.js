import instance from "./instance";

const getAll = () => {
  return instance.get("/posts");
};
const getOne = (id) => {
  return instance.get(`/posts/${id}`);
};
const remove = (id) => {
  return instance.delete(`/posts/${id}`);
};
const add = (post) => {
  return instance.post(`/posts`, post);
};
const update = (post) => {
  //{id: 1, title: 'abc'}
  return instance.put(`/posts/${post.id}`, post);
};
export { getAll, remove, add, update };
