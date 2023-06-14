import instance from "./instance";

const getMenus = () => {
  return instance.get("/menus");
};

const getMenu = (id) => {
  return instance.get(`/menus/${id}`);
};
const addMenu = (product) => {
  return instance.post(`/menus`, menu);
};
const updateMenu = (menu) => {
  return instance.put(`/menus/${menu.id}`, menu);
};
const deleteMenu = (id) => {
  return instance.delete(`/menus/${id}`);
};

export { getMenus, getMenu, addMenu, updateMenu, deleteMenu };
