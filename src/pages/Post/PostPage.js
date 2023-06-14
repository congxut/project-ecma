import Header from "@/components/Header";
import { posts } from "../../data";
import PostList from "@/components/PostList";

const PostPage = () => {
  return /*html */ `
  <div class="bg-homeBg z-50 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
    <div class="container">
      ${Header()}
      <div class="bg-white lg:rounded-2xl">
      <div class="container px-4 sm:px-5 md:px-10 lg:px-20">
      <div class="py-12 px-10">
      <h2 class="after-effect after:left-32 mt-12 lg:mt-0">Blogs</h2>
          <div
            class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] grid gap-x-10 gap-y-7 mb-6"
          >
          ${PostList({ posts })}
            
            
            <!-- blog items one end -->
          </div>
        </div>
      </div>
      <!-- footer start -->
      <footer
        class="overflow-hidden rounded-b-2xl bg-[#f8fbfb]"
      >
        <p class="text-center py-6 text-gray-lite">
          © 2022 All Rights Reserved by
          ncx
        </p>
      </footer>
      <!-- footer ends -->
    </div>
    </div>
    </div>
  `;
};

export default PostPage;
