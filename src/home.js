// Import the restaurant image used on the homepage
//import restaurantImage from "./images/restaurant_image.png";

/*Generates the content for the Home Page */
function createHomePage() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("homePageContainer");

  // Define the inner HTML structure of the home page
  homeDiv.innerHTML = `
     <section class="intro">
      <div class="intro-body">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="brand-heading">
                <span class="txt-rotate" data-period="100" data-rotate='[ "سلام,", "Salut,", "Hola,", "Hej,", "नमस्ते," ]'></span>
              </div>
              <p class="intro-text">we are Raana, Priyanka, Sergio and Profira,
             <span class="intro-text-hgl"> front-end developers</span>
              based in beautiful Sweden.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <footer>
      <p>&copy; 2024 Delicious Bites - All Rights Reserved</p>
    </footer>
  `;

  return homeDiv;
}

export default createHomePage;
