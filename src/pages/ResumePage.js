import Header from "@/components/Header";
import { resumes } from "../data";
import ResumeList from "@/components/ResumeList";

const ResumePage = () => {
  return /*html */ `
    <div class="bg-homeBg z-50 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <div class="">
      ${Header()}
      <div class="container bg-white lg:rounded-2xl">
        <div class="sm:px-5 md:px-10 lg:px-20">
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
                  <i class="fas text-3xl text-[#F95054] fa-graduation-cap"></i>
                  <h4 class="text-2.5xl font-medium">Education</h4>
                </div>
                ${ResumeList({ resumes })}
                
                <!-- Experience contain -->
                <div class="flex items-center space-x-2 mb-4">
                  <i class="fas text-3xl text-[#F95054] fa-briefcase"></i>
                  <h4 class="text-2.5xl font-medium">Experience</h4>
                </div>
                <div
                  class="py-4 bg-[#eef5fa] pl-5 pr-3 space-y-2 mb-6 rounded-lg"
                >
                  <span class="text-tiny text-gray-lite "
                    >2017-2021</span
                  >
                  <h3 class="text-xl">Computer Science</h3>
                  <p class="">Imperialize Technical Institute</p>
                </div>
              </div>
              <div>
                <!-- award content -->
                <div class="flex items-center space-x-2 mb-4">
                  <i class="fas fa-award text-3xl text-[#F95054]"></i>
                  <h4 class="text-2.5xl font-medium">Awards</h4>
                </div>
                <div
                  class="py-4  bg-[#fcf4ff] pl-5 pr-3 space-y-2 mb-6 rounded-lg"
                >
                  <span class="text-tiny text-gray-lite"
                    >2015-2017</span
                  >
                  <h3 class="text-xl">Graphic Designer</h3>
                  <p class="">Web Graphy, Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  `;
};

export default ResumePage;
