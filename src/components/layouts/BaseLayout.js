import CardHeader from "../CardHeader";
import Header from "../Header";

const BaseLayout = () => {
  return /*html */ `
  <div class="bg-homeBg z-50 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <div class="container">
        ${Header()}
        ${CardHeader()}
    </div>
  </div>
  `;
};

export default BaseLayout;
