// import { posts } from "../data";

const PostList = ({ posts }) => {
  return /*html */ `
    ${posts
      .map((post) => {
        return /*html */ `
        <!-- blog items one start -->
              <div class="p-4 rounded-lg mb-2 h-full bg-[#fcf4ff]">
              <div class="overflow-hidden rounded-lg">
                <a href="/posts/${post.id}" >
                  <img
                    class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                    src="${post.img}"
                    alt="blog image"
                  />
                </a>
              </div>
              <div
                class="flex mt-4 text-tiny text-gray-lite"
              >
                <span>ẻwrwrwr</span>
                <span class="dot-icon">Inspiration</span>
              </div>
              <h3
                class="text-lg font-medium  duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252]"
              >
                <a href="/posts/${post.id}"
                  >${post.title}</a
                >
              </h3>
            </div>
        `;
      })
      .join("")}
    `;
};

export default PostList;
