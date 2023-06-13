import { deleteProduct, getProducts } from "@/api/product";
import { useEffect, useState } from "@/utilities";
import axios from "axios";

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setProducts(await getProducts());
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
            await deleteProduct(id);
            const newProducts = products.filter(
              (product) => product.id !== +id
            );
            setProducts(newProducts);
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
  });
  return /*html*/ `
    <div class="container">
    <a href="/admin/products/add">Add product</a>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${products
            .map(
              (product, index) => /*html */ `
          <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td></td>
            <td>${product.price}</td>
            <td></td>
            <td>
              <button
                data-id="${product.id}"
                class="btn btn-danger btn-remove"
              >
                Delete
              </button>
              <a href="/admin/products/${product.id}/edit">Update</a>
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

export default AdminProductsPage;
