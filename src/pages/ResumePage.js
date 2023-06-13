import Header from "@/components/Header";

const ResumePage = () => {
  return /*html */ `
    ${Header()}
    <div class="container sm:px-5 md:px-10 lg:px-20">
      <div class="py-12 px-4">
        <h2 class="after-effect after:left-44 mb-[40px] mt-12 lg:mt-0">
          Resume
        </h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
        >
          <!-- eductation contain -->
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <i class="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
              <h4 class="text-5xl dark:text-white font-medium">Education</h4>
            </div>

            <div
              class="py-4 dark:bg-transparent bg-[#fff4f4] pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >2021-2023</span
              >
              <h3 class="text-xl dark:text-white">Ph.D in Horriblensess</h3>
              <p class="dark:text-[#b7b7b7]">ABC University, Los Angeles, CA</p>
            </div>

            <div
              class="py-4 dark:bg-transparent bg-[#fff1fb] pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >2019 - Present</span
              >
              <h3 class="text-xl dark:text-white">Sr. Software Tester</h3>
              <p class="dark:text-[#b7b7b7]">Google Inc.</p>
            </div>

            <div
              class="py-4 dark:bg-transparent bg-[#fff4f4] pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >2021</span
              >
              <h3 class="text-xl dark:text-white">Best Developer</h3>
              <p class="dark:text-[#b7b7b7]">University Of Melbourne, NA</p>
            </div>
          </div>

          <div>
            <!-- Experience contain -->
            <div class="flex items-center space-x-2 mb-4">
              <i class="fa-solid text-6xl text-[#F95054] fa-briefcase"></i>
              <h4 class="text-5xl dark:text-white font-medium">Experience</h4>
            </div>

            <div
              class="py-4 dark:bg-transparent bg-[#eef5fa] pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >2017-2021</span
              >
              <h3 class="text-xl dark:text-white">Computer Science</h3>
              <p class="dark:text-[#b7b7b7]">Imperialize Technical Institute</p>
            </div>

            <div
              class="py-4 dark:bg-transparent bg-[#f2f4ff] pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >2015-2017</span
              >
              <h3 class="text-xl dark:text-white">Cr. Web Developer</h3>
              <p class="dark:text-[#b7b7b7]">ib-themes ltd.</p>
            </div>

            <div
              class="py-4 dark:bg-transparent bg-[#eef5fa] pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >2008</span
              >
              <h3 class="text-xl dark:text-white">Best Writter</h3>
              <p class="dark:text-[#b7b7b7]">Online Typodev Soluation Ltd.</p>
            </div>
          </div>

          <div>
            <!-- award content -->
            <div class="flex items-center space-x-2 mb-4">
              <i class="fa-solid fa-award text-6xl text-[#F95054]"></i>
              <h4 class="text-5xl dark:text-white font-medium">Awards</h4>
            </div>

            <div
              class="py-4 dark:bg-transparent bg-[#fcf4ff] pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >2015-2017</span
              >
              <h3 class="text-xl dark:text-white">Graphic Designer</h3>
              <p class="dark:text-[#b7b7b7]">Web Graphy, Los Angeles, CA</p>
            </div>

            <div
              class="py-4 dark:bg-transparent bg-[#fcf9f2] pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >2014 - 2015</span
              >
              <h3 class="text-xl dark:text-white">Jr. Web Developer</h3>
              <p class="dark:text-[#b7b7b7]">Creative Gigs.</p>
            </div>

            <div
              class="py-4 dark:bg-transparent bg-[#fcf4ff] pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2"
            >
              <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]"
                >2015-2017</span
              >
              <h3 class="text-xl dark:text-white">Best Freelancer</h3>
              <p class="dark:text-[#b7b7b7]">
                Fiver &amp; Upwork Level 2 &amp; Top Rated
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default ResumePage;
