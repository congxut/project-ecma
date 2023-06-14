import Header from "@/components/Header";
import { posts } from "../../data";

const PostDetail = ({ id }) => {
  // const externalLink = document.getElementById("external-link");
  // externalLink.addEventListener("click", function (event) {
  //   event.preventDefault();
  //   const url = externalLink.getAttribute("href");
  //   window.location.assign(url);
  // });

  const post = posts.find((post) => post.id === +id);
  console.log("post", post);
  if (!post) return null;

  return /*html */ `
   <div class="bg-homeBg z-50 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
    <div class="container">
      ${Header()}
    <div class="blocker current bg-white">
      <div id="ex1" class="container">
        <div
          class="pt-6 rounded-full"
        >
          <div class="pr-6 pb-2">
            <img
              class="w-full md:h-[450px] object-cover rounded-xl pt-6 rounded-full"
              src="${post.img}"
              alt="blog image"
            />
            <div class="flex mt-4 text-tiny text-black">
              <span>177 April</span>
              <span class="dot-icon">Inspiration</span>
            </div>
            <h2 class=" sm:text-3xl mt-2 font-medium">
              ${post.title}
            </h2>
            <p class=" font-normal text-[15px] sm:text-sm my-4">
              ${post.content}
            </p>
            <p class=" font-normal text-[15px] sm:text-sm my-4">
              <a id="external-link" href="${post.link}">link github</a>
            </p>
          </div>

          <div
            class="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3"
          >
            <div class=" bg-[#ffffff] flex p-4 rounded-lg">
              <div>
                <img
                  class="md:w-[125px] rounded-xl"
                  src="./images/about/about.jpg"
                  alt="about image"
                />
              </div>
              <div class="pl-5">
                <div class="flex justify-between items-center">
                  <h3 class=" text-[22px] font-medium">
                    Rafia Ana
                  </h3>
                  <span class=" text-tiny">15 min ago</span>
                </div>
                <p class=" md:pr-16">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi nam ad, unde vel aut soluta atque consequatur. Omnis,
                  debitis nihil?
                </p>
                <button
                  class=" text-tiny hover:text-[#FA5252] "
                >
                  Reply
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center md:justify-end space-x-4 mt-8 mr-3">
            <h6 class=" text-[20px]">Login with:</h6>
            <div class="flex space-x-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="socialbtn text-[#1773EA]">
                  <i class="fa-brands fa-facebook-f"></i>
                </span>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="socialbtn text-[#1C9CEA]">
                  <i class="fa-brands fa-twitter"></i>
                </span>
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="socialbtn text-[#e14a84]">
                  <i class="fa-brands fa-dribbble"></i>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="socialbtn text-[#0072b1]">
                  <i class="fa-brands fa-linkedin-in"></i>
                </span>
              </a>
            </div>
          </div>

          <div class="pt-3">
            <div class="pr-3 pb-4">
              <form class="w-full">
                <label class="block mb-2">
                  <span class=" text-[25px] font-medium"
                    >Leave a Reply</span
                  >
                  <textarea
                    class="block w-full mt-3 p-3  hover:outline-none hover:border-0 focus:outline-none rounded bg-gray"
                    rows="3"
                  ></textarea>
                </label>
                <button class="comment-btn">Comment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  `;
};

export default PostDetail;
