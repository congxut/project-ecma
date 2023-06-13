import CardHeader from "../CardHeader";
import Header from "../Header";

const BaseLayout = () => {
  return /*html */ `
  <div class="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
    <div class="z-50">
      <div class="container">
        ${Header()}
        ${CardHeader()}
        
      </div>
    </div>
  </div>
  `;
};

export default BaseLayout;
