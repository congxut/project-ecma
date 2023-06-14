import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = document.querySelector("#app");
import AdminProductAddPage from "./pages/admin/Product-add";
import AdminProductEditPage from "./pages/admin/Product-edit";
import AdminProductsPage from "./pages/admin/Products";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import { render, router } from "./utilities";
import BaseLayout from "./components/layouts/BaseLayout";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectPage from "./pages/Project/ProjectPage";
import ProjectDetail from "./pages/Project/ProjectDetail";
import PostPage from "./pages/Post/PostPage";
import PostDetail from "./pages/Post/PostDetail";
import ContactPage from "./pages/ContactPage";
import ProjectList from "./components/ProjectList";
import ProjectAdd from "./pages/admin/Project/ProjectAdd";
import ProjectEdit from "./pages/admin/Project/ProjectEdit";
import SkillList from "./components/SkillList";
import PostList from "./components/PostList";
import PostAdd from "./pages/admin/Post/PostAdd";
import PostEdit from "./pages/admin/Post/PostEdit";
import skillAdd from "./pages/admin/Skill/SkillAdd";
import skillEdit from "./pages/admin/Skill/SkillEdit";
import Register from "./pages/register";

router.on("/", () => render(BaseLayout, app));
// router.on("/login", () => render(Register, app));
router.on("/about", () => render(AboutPage, app));
router.on("/resume", () => render(ResumePage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/posts", () => render(PostPage, app));
router.on("/posts/:id", ({ data }) => render(() => PostDetail(data), app));
router.on("/projects", () => render(ProjectPage, app));
router.on("/projects/:id", ({ data }) =>
  render(() => ProjectDetail(data), app)
);
router.on("/products", () => render(ProductsPage, app));
router.on("/product/:id", (params) =>
  render(() => ProductDetailPage(params), app)
);

// ADMIN MANAGER
router.on("/admin/products", () => render(AdminProductsPage, app));
router.on("/admin/products/add", () => render(AdminProductAddPage, app));
router.on("/admin/products/:id/edit", ({ data }) =>
  render(() => AdminProductEditPage(data), app)
);
router.on("/admin/projects", () => render(ProjectList, app));
router.on("/admin/projects/add", () => render(ProjectAdd, app));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => ProjectEdit(data), app)
);
router.on("/admin/posts", () => render(PostList, app));
router.on("/admin/posts/add", () => render(PostAdd, app));
router.on("/admin/posts/:id/edit", ({ data }) =>
  render(() => PostEdit(data), app)
);
router.on("/admin/skills", () => render(SkillList, app));
router.on("/admin/skills/add", () => render(skillAdd, app));
router.on("/admin/skills/:id/edit", ({ data }) =>
  render(() => skillEdit(data), app)
);

router.notFound(() => render(NotFoundPage, app));
router.resolve();
