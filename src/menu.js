// Importing images used for each menu item
import signUpImage from "./images/Sign-up.png";
import etchasketchImage from "./images/Etch-a-sketch.png";
import tictactoeImage from "./images/tictactoe.png";
import restaurantImage from "./images/restaurant_image.png";

import weatherappImage from "./images/WeatherApp.png";
import todolistImage from "./images/To-do list.png";
import libraryImage from "./images/library.png";
import calculatorImage from "./images/calculator.png";


/* Generates the content for the Menu Page */
function createMenuPage() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuPageContainer");

  // Define the inner HTML structure for the menu page
  menuDiv.innerHTML = `
    <section class="portfolio-section">
        <h2 class="portfolio-title">Portfolio</h2>
        <div class="portfolio-container">

          <!-- Card 1 -->
          <div class="portfolio-card">
            <img src="${signUpImage}" alt="Project 1" class="portfolio-image" width="300px" height="200px">
            <div class="portfolio-content">
              <h3>Sign-Up form Project</h3>
              <p>It is a responsive and accessible user registration form. <br>Key concepts: form validation, input handling, and CSS styling.</p>
              <a href="https://github.com/prinsergioprin/sign-up-form
              " class="portfolio-button">Go To Project</a>
            </div>
          </div>
          <!-- Card 2 -->

          <div class="portfolio-card">
            <img src="${etchasketchImage}" alt="Project 2" class="portfolio-image">
            <div class="portfolio-content">
              <h3>Etch-a-Sketch project</h3>
              <p>It is a fun and interactive browser-based drawing tool. <br>Key concepts: customizable grid, HTML, CSS, JavaScript Skills</p>
              <a href="https://github.com/prinsergioprin/etch-a-sketch-prinsergioprin" class="portfolio-button">Go To Project</a>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="portfolio-card">
            <img src="${tictactoeImage}" alt="Project 3" class="portfolio-image">
            <div class="portfolio-content">
              <h3>Tic Tac Toe Project</h3>
              <p>It is a classic implementation of the popular two-player strategy game.<br>Key concepts: DOM manipulation using JavaScript, HTML, and CSS</p>
              <a href="#" class="portfolio-button">Go To Project</a>
            </div>
          </div>

           <!-- Card 4 -->
        <div class="portfolio-card">
          <img
            src="${restaurantImage}"
            alt="Project 3"
            class="portfolio-image"
          />
          <div class="portfolio-content">
            <h3>Restaurant Page Project</h3>
            <p>
              It is a fully functional, responsive restaurant webpage <br />Key
              concepts: JavaScript, Webpack, and modular ES6 architecture
            </p>
            <a href="#" class="portfolio-button">Go to Project</a>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="portfolio-card">
          <img
            src="${weatherappImage}"
            alt="Project 3"
            class="portfolio-image"
          />
          <div class="portfolio-content">
            <h3>Weather App</h3>
            <p>
              It is an interactive web application that fetches real-time
              weather data.<br />Key concepts: HTML, CSS, JavaScript and APIs
            </p>
            <a
              href="https://github.com/RaanaBrm/Weather-App"
              class="portfolio-button"
              >Go to Project</a
            >
          </div>
        </div>

        <!-- Card 6 -->
        <div class="portfolio-card">
          <img
            src="${todolistImage}"
            alt="Project 3"
            class="portfolio-image"
          />
          <div class="portfolio-content">
            <h3>To-do List Project</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="https://github.com/RaanaBrm/To-Do-List"
              class="portfolio-button"
              >Go to Project</a
            >
          </div>
        </div>

        <!-- Card 7 -->
        <div class="portfolio-card">
          <img
            src="${libraryImage}"
            alt="Project 3"
            class="portfolio-image"
          />
          <div class="portfolio-content">
            <h3>Library Project</h3>
            <p>
              It is a web app to manage a collection of books. <br />Key
              concepts: Object-oriented programming, and DOM manipulation
            </p>
            <a href="https://library-hi26.netlify.app/" class="portfolio-button"
              >Go to Project</a
            >
          </div>
        </div>

        <!-- Card 8 -->
        <div class="portfolio-card">
          <img
            src="${calculatorImage}"
            alt="Project 3"
            class="portfolio-image"
          />
          <div class="portfolio-content">
            <h3>Calculator Project</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="portfolio-button">Go to Project</a>
          </div>
        </div>
          </div></section>
  `;

  return menuDiv;
}

export default createMenuPage;
