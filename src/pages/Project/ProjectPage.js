import Header from "@/components/Header";

const ProjectPage = () => {
  return /*html */ `
  ${Header()}
    <section class="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <div class="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div class="py-12">
          <h2 class="after-effect after:left-48 mt-12 lg:mt-0">Portfolio</h2>

          <!-- fillter group buttons -->
          <ul
            class="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium"
          >
            <li class="fillter-btn mr-4 md:mx-4 is-checked" data-filter="*">
              All
            </li>
            <li class="fillter-btn mr-4 md:mx-4" data-filter=".dev">Video</li>
            <li class="fillter-btn mr-4 md:mx-4" data-filter=".plugin">
              Web Design
            </li>
            <li class="fillter-btn mr-4 md:mx-4" data-filter=".branding">
              Logo
            </li>
            <li class="fillter-btn mr-4 md:mx-4" data-filter=".custom">
              Graphic Design
            </li>
          </ul>
        </div>
        <!-- End py-12 -->

        <div
          id="isotop-gallery-wrapper"
          class="mymix portfolio_list-two three-col"
          style="position: relative; height: 1225.87px"
        >
          <div class="grid-sizer"></div>
          <!-- portfolio items one start -->
           ${ProjectList
             .map((project) => {
               return /*html */ `
          <div
            class="portfolio_list-two-items isotop-item plugin custom"
            style="position: absolute; left: 0%; top: 0px"
          >
            <div
              class="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]"
            >
              <div class="overflow-hidden rounded-lg">
                <a href="#portfiloOne" rel="modal:open">
                  <img
                    class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                    src="/projects/"
                    alt="portfolio image"
                  />
                </a>
              </div>
              <span
                class="pt-5 text-[14px] font-normal text-gray-lite block"
                >UI/UX</span
              >
              <h2
                class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] mt-2"
              >
                <a href=""> ${project.name} </a>
              </h2>
            </div>
          </div>
`;
             })
             .join("")}

          <!-- modal start for item one  -->
        </div>
      </div>

      <!-- footer start -->
      <footer
        class="overflow-hidden rounded-b-2xl bg-[#f8fbfb]"
      >
        <p class="text-center py-6 text-gray-lite">
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
    </section>
  `;
};

export default ProjectPage;
