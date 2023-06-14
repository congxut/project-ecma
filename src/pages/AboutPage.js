import Header from "@/components/Header";

const AboutPage = () => {
  return /*html */ `
  <div class="bg-homeBg z-50 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
  <div class="container">
  ${Header()}
      <div
        class="container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 lg:px-20"
      >
        <div class="aos-init aos-animate md:px-20">
          <div class="py-12">
            <!-- about page title -->
            <h2 class="after-effect after:left-52 mt-12 lg:mt-0">About Me</h2>
            <div
              class="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center"
            >
              <div class="col-span-12 md:col-span-4">
                <!-- about me image -->
                <img
                  class="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                  src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/332577198_601695367985502_5771270881620518379_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=6d9402&_nc_ohc=Ez3NgDVnUzwAX92BGSx&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfD5NONnu1DUMv9TerNuiNAeJfnwfdqghtrBC5GQAWaFyA&oe=648CF02B"
                  alt="about image"
                />
              </div>
              <div class="col-span-12 md:col-span-8 space-y-2.5">
                <!-- who am i content  -->
                <div class="md:mr-12 xl:mr-16">
                  <h3 class="text-4xl font-medium mb-2.5">
                    Who am i?
                  </h3>
                  <p class="text-gray-lite leading-7">
                    I'm Creative Director and UI/UX Designer from Sydney,
                    Australia, working in web development and print media. I
                    enjoy turning complex problems into simple, beautiful and
                    intuitive designs.
                  </p>
                  <p
                    class="text-gray-lite leading-7 mt-2.5"
                  >
                    My aim is to bring across your message and identity in the
                    most creative way. I created web design for many famous
                    brand companies.
                  </p>
                </div>

                <!-- personal info -->
                <div>
                  <h3 class="text-4xl font-medium my-5 ">
                    Personal Info
                  </h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex">
                      <span
                        class="text-oriange shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"
                      >
                        <i class="fa fa-mobile" aria-hidden="true"></i>
                      </span>
                      <div class="space-y-1">
                        <p class="text-xs text-gray-lite">
                          Phone
                        </p>
                        <h6 class="font-medium">
                          +123 456 7890
                        </h6>
                      </div>
                    </div>

                    <div class="flex">
                      <span
                        class="text-oriange-lite shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"
                      >
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                      <div class="space-y-1">
                        <p class="text-xs text-gray-lite">
                          Location
                        </p>
                        <h6 class="font-medium">
                          Hong kong china
                        </h6>
                      </div>
                    </div>

                    <div class="flex">
                      <span
                        class="text-green shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"
                      >
                        <i class="fas fa-envelope-open-text"></i>
                      </span>
                      <div class="space-y-1">
                        <p class="text-xs text-gray-lite">
                          Email
                        </p>
                        <h6 class="font-medium">
                          example@mail.com
                        </h6>
                      </div>
                    </div>

                    <div class="flex">
                      <span
                        class="text-color-50 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"
                      >
                        <i class="fas fa-calendar-alt"></i>
                      </span>
                      <div class="space-y-1">
                        <p class="text-xs text-gray-lite">
                          Birthday
                        </p>
                        <h6 class="font-medium">
                          May 27, 1990
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- whai i do contain -->
          <div class="pb-12">
            <h3 class="text-[35px] font-medium pb-5">
              What I do!
            </h3>
            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

              <div class="about-box bg-[#fefaf0]">
                <img
                  class="w-10 h-10 object-contain block"
                  src="https://bostamihtml.ibthemespro.com/images/icons/icon5.svg"
                  alt="icon"
                />
                <div class="space-y-2">
                  <h3 class="text-2xl font-semibold">
                    Web Development
                  </h3>
                  <p class="leading-8 text-gray-lite">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat.
                  </p>
                </div>
              </div>

              

            </div>
          </div>

          <!-- what i do contain end -->
          <div>
            <div
              class="bg-[#F8FBFB] max-w-full h-auto py-10 rounded-xl"
            >
              <h3
                class="text-center text-6xl mb-3 font-semibold"
              >
                Clients
              </h3>
              <!-- slider and slider items start -->
              <div class=" px-2 pt-8 slick-initialized slick-slider">
                <div class="slick-list draggable">
                  <div
                    class="slick-track"
                    style="
                      opacity: 1;
                      width: 4199px;
                      transform: translate3d(-1105px, 0px, 0px);
                    "
                  >
                    <div
                      class="slick-slide slick-cloned"
                      data-slick-index="-5"
                      id=""
                      aria-hidden="true"
                      style="width: 221px"
                      tabindex="-1"
                    >
                      <img
                        class="overflow-hidden brand-img"
                        src=""
                        alt="brand"
                      />
                    </div>
                    <div
                      class="slick-slide slick-cloned"
                      data-slick-index="-4"
                      id=""
                      aria-hidden="true"
                      style="width: 221px"
                      tabindex="-1"
                    >
                      <img
                        class="overflow-hidden brand-img"
                        src=""
                        alt="brand"
                      />
                    </div>
                    <div
                      class="slick-slide slick-cloned"
                      data-slick-index="-3"
                      id=""
                      aria-hidden="true"
                      style="width: 221px"
                      tabindex="-1"
                    >
                      <img
                        class="overflow-hidden brand-img"
                        src=""
                        alt="brand"
                      />
                    </div>
                    <div
                      class="slick-slide slick-cloned"
                      data-slick-index="-2"
                      id=""
                      aria-hidden="true"
                      style="width: 221px"
                      tabindex="-1"
                    >
                      <img
                        class="overflow-hidden brand-img"
                        src=""
                        alt="brand"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- slider and slider items end -->
            </div>
          </div>

          <!-- footer section start -->
          <footer
            class="overflow-hidden rounded-b-2xl"
            style="background: transparent"
          >
            <p class="text-center py-6 text-gray-lite">
              © 2023 All Rights Reserved by ncx              
            </p>
          </footer>
          <!-- footer section end -->
        </div>
      </div>
      </div>
      </div>
    `;
};
export default AboutPage;
