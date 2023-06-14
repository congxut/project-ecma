import { useEffect } from "@/utilities";
import axios from "axios";

const Register = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const email = document.getElementById("email");
    const pass = document.getElementById("password");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      axios
        .post("http://localhost:3000/login", {
          email: email.value,
          password: pass.value,
        })
        .then(({ data }) => console.log(data));
    });
  });
  return /*html*/`<div class="container">
        <h1>Login</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">email</label>
                <input type="text" class="form-control" id="email"/>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Pass</label>
                <input type="text" class="form-control" id="password"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>`;
};

export default Register;
