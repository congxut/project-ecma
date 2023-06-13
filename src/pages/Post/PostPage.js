import Header from "@/components/Header";

const PostPage = () => {
  return /*html */ `
  ${Header()}
    <div class="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <div class="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div class="py-12">
          <h2 class="after-effect after:left-32 mt-12 lg:mt-0">Blogs</h2>
          <div
            class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] grid gap-x-10 gap-y-7 mb-6"
          >
            <!-- blog items one start -->

            <div
              class="p-5 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:bg-transparent dark:border-[#212425] dark:border-2"
            >
              <div class="overflow-hidden rounded-lg">
                <a href="#ex1" rel="modal:open">
                  <img
                    class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                    src="./images/blog_images/small/1.jpg"
                    alt="blog image"
                  />
                </a>
              </div>
              <div
                class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]"
              >
                <span>17 April</span>
                <span class="dot-icon">Inspiration</span>
              </div>
              <h3
                class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]"
              >
                <a href="#ex1" rel="modal:open"
                  >How to Own Your Audience by Creating an Email List.</a
                >
              </h3>
            </div>
            <!-- blog items one end -->
          </div>
        </div>
      </div>
      <!-- footer start -->
      <footer
        class="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]"
      >
        <p class="text-center py-6 text-gray-lite dark:text-color-910">
          © 2022 All Rights Reserved by
          <a
            class="hover:text-[#FA5252] duration-300 transition"
            href="https://themeforest.net/user/ib-themes"
            target="_blank"
            rel="noopener noreferrer"
            >ib-themes</a
          >.
        </p>
      </footer>
      <!-- footer ends -->
    </div>
  `;
};

export default PostPage;
