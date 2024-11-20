import "./styles.css";

// Importing functions that generate content for each page
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';
import createTeamPage from './team';
import createservicesPage from './services';

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

function loadPage(pageFunction) {
  clearContent();
  const content = document.getElementById('content');
  content.appendChild(pageFunction());
}

// Event listeners for navigation buttons to load respective pages
document.getElementById('home').addEventListener('click', () => loadPage(createHomePage));
document.getElementById('menu').addEventListener('click', () => loadPage(createMenuPage));
document.getElementById('contact').addEventListener('click', () => loadPage(createContactPage));
document.getElementById('team').addEventListener('click', () => loadPage(createTeamPage));
document.getElementById('services').addEventListener('click', () => loadPage(createservicesPage));
// Initial page load
loadPage(createHomePage);
