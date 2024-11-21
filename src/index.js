import "./styles.css";
import logoPath from './images/logo.png'; // Import image path

// Dynamically update the logo in the header
document.querySelector('.logo img').src = logoPath;


// Importing functions that generate content for each page
import { createHomePage, initializeTextRotation } from "./home.js";
import createMenuPage from "./menu";
import createContactPage from "./contact";
import createTeamPage from "./team";
import createservicesPage from "./services";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function loadPage(pageFunction, initializeFunction) {
  clearContent();
  const content = document.getElementById("content");
  content.appendChild(pageFunction());

  // Call the initialization function if provided
  if (initializeFunction) {
    initializeFunction();
  }
}

// Event listeners for navigation buttons to load respective pages
document
  .getElementById("home")
  .addEventListener("click", () =>
    loadPage(createHomePage, initializeTextRotation)
  );
document
  .getElementById("menu")
  .addEventListener("click", () => loadPage(createMenuPage));
document
  .getElementById("contact")
  .addEventListener("click", () => loadPage(createContactPage));
document
  .getElementById("team")
  .addEventListener("click", () => loadPage(createTeamPage));
document
  .getElementById("services")
  .addEventListener("click", () => loadPage(createservicesPage));

// Initial page load
loadPage(createHomePage, initializeTextRotation);
