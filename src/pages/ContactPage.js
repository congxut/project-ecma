import Header from "@/components/Header";

const ContactPage = () => {
  return /*html */ `
  <div class="bg-homeBg z-50 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
  <div class="container">
  ${Header()}
    <div class="bg-white lg:rounded-2xl ">
      <div data-aos="fade" class="aos-init aos-animate">
        <div class="container px-4 sm:px-5 md:px-10 lg:px-20">
          <div class="py-12 px-10">
            <h2 class="after-effect after:left-40 mb-[40px] mt-12 lg:mt-0">
              Contact
            </h2>
            <div class="lg:flex gap-x-20">
              <!-- personal contact information -->
              <div class="w-full lg:w-[40%] xl:w-[30%] space-y-6">
                <div
                  class="flex flex-wrap bg-[#fcf4ff] :bg-transparent p-[30px] gap-2 rounded-xl"
                >
                  <span class="w-8 mt-2">
                    <img
                      src="https://bostamihtml.ibthemespro.com/images/contact/phone-call.png"
                      alt="icon"
                      class="text-4xl"
                    />
                  </span>
                  <div class="space-y-2">
                    <p class="text-xl font-semibold">Phone :</p>
                    <p class="text-gray-lite text-lg">
                      +452 666 386
                    </p>
                    <p class="text-gray-lite text-lg ">
                      +452 666 386
                    </p>
                  </div>
                </div>

                <div
                  class="flex flex-wrap  bg-[#eefbff] p-[30px] gap-2 rounded-xl"
                >
                  <span class="w-8 mt-2">
                    <img
                      src="https://bostamihtml.ibthemespro.com/images/contact/email.png"
                      alt="icon"
                      class="text-4xl"
                    />
                  </span>
                  <div class="space-y-2">
                    <p class="text-xl font-semibold">Email :</p>
                    <p class="text-gray-lite text-lg ">
                      support@gmail.com
                    </p>
                    <p class="text-gray-lite text-lg">
                      example@gmail.com
                    </p>
                  </div>
                </div>

                <div
                  class="flex flex-wrap bg-[#f2f4ff] p-[30px] gap-2 rounded-xl"
                >
                  <span class="w-8 mt-2">
                    <img
                      src="https://bostamihtml.ibthemespro.com/images/contact/map.png"
                      alt="icon"
                      class="text-4xl"
                    />
                  </span>
                  <div class="space-y-2">
                    <p class="text-xl font-semibold">
                      Address :
                    </p>
                    <p class="text-gray-lite text-lg">
                      Maount View, Oval
                    </p>
                    <p class="text-gray-lite text-lg">
                      Road, New York, USA
                    </p>
                  </div>
                </div>
              </div>

              <div class="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                <div
                  data-aos="fade"
                  class=" mb-16 md:p-[48px] p-4 bg-color-810 rounded-xl mb-[30px] md:mb-[60px] aos-init aos-animate"
                >
                  <h3 class="text-4xl">
                    <span class="text-gray-lite"
                      >I'm always open to discussing product</span
                    >
                    <br />
                    <span class="font-semibold"
                      >design work or partnerships.</span
                    >
                  </h3>

                  <form
                    id="myForm"
                    action="https://formspree.io/f/xoqrgaab"
                    method="POST"
                  >
                    <!-- name input -->
                    <div class="relative z-0 w-full mt-[40px] mb-8 group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none  focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                        placeholder=" "
                        required=""
                      />
                      <label
                        for="name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                        >Name *</label
                      >
                    </div>

                    <!-- email input  -->
                    <div class="relative z-0 w-full mb-8 group">
                      <input
                        type="email"
                        name="user_email"
                        class="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                        placeholder=" "
                        id="user_email"
                        required=""
                      />
                      <label
                        for="user_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                        >Email *</label
                      >
                    </div>

                    <!-- massage input -->
                    <div class="relative z-0 w-full mb-8 group">
                      <input
                        type="text"
                        name="message"
                        class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                        placeholder=" "
                        id="message"
                        required=""
                      />
                      <label
                        for="message"
                        class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                        >Message *</label
                      >
                    </div>

                    <div
                      class="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3"
                    >
                      <!-- submit buttons -->
                      <input
                        type="submit"
                        class="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- footer  start-->
        <footer
          class="overflow-hidden bg-[#f8fbfb] rounded-b-2xl"
        >
          <p class="text-center py-6 text-gray-lite ">
            © 2022 All Rights Reserved by
            ncx</>
            
          </p>
        </footer>
        <!-- footer ends -->
      </div>
    </div>
    </div>
    </div>
  </body>
  `;
};

export default ContactPage;
