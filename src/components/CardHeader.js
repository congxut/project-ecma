const CardHeader = () => {
  return /*html */ `
    <div
      class="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
      data-aos="fade"
    >
      <!-- personal image -->
      <img
        class="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
        src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/320331952_836082691002509_5558691899322755623_n.jpg?stp=dst-jpg_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Ab-wQYKB8LwAX-_Q4od&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDIfYVy7WQBAoPNAAqbWv_kr3emtuXk4zYMDjz5a0xzUA&oe=648BD22B"
        alt="about avatar"
      />
      <h3 class="mt-6 mb-1 text-5xl font-semibold">
        Nguyen Cong Xut
      </h3>
      <p class="mb-4 text-[#7B7B7B]">Web Developer</p>
      <!-- social link and social  buttons -->
      <div class="flex space-x-3">
        <!-- facebook link -->
        <a class="no-underline"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="socialbtn text-[#1773EA]">
            <i class="fab fa-facebook-f"></i>
          </span>
        </a>
        <!-- twitter link -->
        <a class="no-underline"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="socialbtn text-[#1C9CEA]">
            <i class="fab fa-twitter"></i>
          </span>
        </a>
        <!-- dribbble icon and link -->
        <a class="no-underline"
          href="https://dribbble.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="socialbtn text-[#e14a84]">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </span>
        </a>
        <!-- linkedin icon and link -->
        <a class="no-underline"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="socialbtn text-[#0072b1]">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </span>
        </a>
      </div>
      <!-- dowanload button -->
      <button class="dowanload-btn">
        <img
          src="https://bostamihtml.ibthemespro.com/images/icons/dowanload.png"
          alt="icon"
          class="mr-2"
        />Download CV
      </button>
    </div>
  `;
};

export default CardHeader;
