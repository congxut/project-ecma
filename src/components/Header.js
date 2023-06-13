const Header = () => {
  return /*html */ `
   <header
      class="container flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]"
    >
      <div
        class="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent "
      >
        <div
          class="flex justify-between w-full items-center space-x-4 lg:my-8 my-5"
        >
          <!-- website logo -->
          <a class="text-5xl font-semibold" href="/">
            <img
              class="h-[26px] lg:h-[32px]"
              src="https://bostamihtml.ibthemespro.com/images/logo/logo.png"
              alt="logo"
            />
          </a>
          <div class="flex items-center">
            <!-- light and dark mode button -->
            <button
              id="theme-toggle-mobile"
              type="button"
              class=" lg:hidden w-[44px] h-[44px] ml-2"
            >
              <i
                id="theme-toggle-dark-icon-mobile"
                class="fa-solid text-xl fa-moon"
              ></i>
              <i
                id="theme-toggle-light-icon-mobile"
                class="fa-solid fa-sun text-xl hidden"
              ></i>
            </button>
            <!-- mobile toggle button -->
            <button id="menu-toggle" type="button" class="menu-toggle-btn">
              <i
                id="menu-toggle-open-icon"
                class="fa-solid fa-bars text-xl"
              ></i>
              <i
                id="menu-toggle-close-icon"
                class="fa-solid fa-xmark text-xl hidden"
              ></i>
            </button>
          </div>
        </div>
      </div>

      <!-- header items two for large screens -->
      <nav class="hidden lg:block">
        <ul class="flex my-12">
          <li>
            <a class="menu-item-two-active" href="/">
              <span class="mr-2 text-base">
                <i class="fas fa-home"></i>
              </span>
              Home
            </a>
          </li>
          <li>
            <a class="menu-item-two" href="/about">
              <span class="mr-2 text-base">
                <i class="far fa-user"></i>
              </span>
              About
            </a>
          </li>
          <li>
            <a class="menu-item-two" href="/resume">
              <span class="mr-2 text-base">
                <i class="fa fa-file-text-o" aria-hidden="true"></i>
              </span>
              Resume
            </a>
          </li>
          <li>
            <a class="menu-item-two" href="/projects">
              <span class="mr-2 text-base">
                <i class="fas fa-briefcase"></i>
              </span>
              Works
            </a>
          </li>
          <li>
            <a class="menu-item-two" href="/posts">
              <span class="mr-2 text-base">
                <i class="fa fa-pied-piper-pp" aria-hidden="true"></i>
              </span>
              Blogs
            </a>
          </li>
          <li>
            <a class="menu-item-two" href="/contact">
              <span class="mr-2 text-base">
                <i class="fa fa-id-badge" aria-hidden="true"></i>
              </span>
              Contact
            </a>
          </li>
          <li>
            <!-- light and dark mode button -->
            <button
              id="theme-toggle"
              type="button"
              class="w-[44px] h-[44px] ml-2 bg-white rounded-[100px]"
            >
              <i class="fa fa-moon-o" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </nav>

      <!-- mobile menu start -->
      <nav id="navbar" class="hidden lg:hidden">
        <ul
          class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white "
        >
          <li>
            <a class="mobile-menu-items-active" href="/">
              <span class="mr-2 text-xl">
                <i class="fa-solid fa-house"></i>
              </span>
              Home
            </a>
          </li>
          <li>
            <a class="mobile-menu-items" href="/about">
              <span class="mr-2 text-xl">
                <i class="fa-regular fa-user"></i>
              </span>
              About
            </a>
          </li>
          <li>
            <a class="mobile-menu-items" href="/resume">
              <span class="mr-2 text-xl">
                <i class="fa-regular fa-file-lines"></i>
              </span>
              Resume
            </a>
          </li>
          <li>
            <a class="mobile-menu-items" href="/projects">
              <span class="mr-2 text-xl">
                <i class="fas fa-briefcase"></i>
              </span>
              Works
            </a>
          </li>
          <li>
            <a class="mobile-menu-items" href="/posts">
              <span class="mr-2 text-xl">
                <i class="fa-brands fa-blogger"></i>
              </span>
              Blogs
            </a>
          </li>
          <li>
            <a class="mobile-menu-items" href="/contact">
              <span class="mr-2 text-xl">
                <i class="fa-solid fa-address-book"></i>
              </span>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <!-- mobile menu end -->
    </header> 
  `;
};

export default Header;
