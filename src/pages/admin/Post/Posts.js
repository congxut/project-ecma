import { deletePost, getPosts } from "@/api/post";
import { useEffect, useState } from "@/utilities";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setPosts(await getPosts());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", async function () {
        const id = this.dataset.id;
        const confirm = window.confirm("Bạn chắc chứ?");
        if (confirm) {
          try {
            await deletePost(id);
            const newPosts = posts.filter((post) => post.id !== +id);
            setPosts(newPosts);
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
  });
  return /*html*/ `
    <div class="container">
    <a href="/admin/posts/add">Add product</a>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Title</th>
            <th>Img</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${posts
            .map(
              (post, index) => /*html */ `
          <tr>
            <td>${index + 1}</td>
            <td>${post.title}</td>
            <td>${post.img}</td>
            <td>${post.contetn}</td>
            <td></td>
            <td>
              <button
                data-id="${post.id}"
                class="btn btn-danger btn-remove"
              >
                Delete
              </button>
              <a href="/admin/posts/${post.id}/edit">Update</a>
            </td>
          </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    </div>
    `;
};

export default Posts;
