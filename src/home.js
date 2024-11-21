import codepenImage from "./images/codepen.png";
import linkedinImage from "./images/linkedin.png";
import githubImage from "./images/github.jpeg";

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
                <span class="txt-rotate" data-period="2000" data-rotate='[ "سلام,", "Salut,", "Hola,", "Hej,", "नमस्ते," ]'></span>
              </div>
              <p class="intro-text">we are Raana, Priyanka, Sergio and Profira,
             <span class="intro-text-hgl"> front-end developers</span>
              based in beautiful Sweden.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

   <section id="about">
    <div class="about-container">
      <h2 class="portfolio-title">About</h2>
      
      <p class="about-intro">
      <span class="highlight">404 Found</span> is a creative studio of four talented
              front-end developers specializing in building sleek, user-friendly
              web experiences. The team thrives on
              <i
                ><b
                  >problem-solving, crafting responsive designs, and pushing the
                  boundaries of modern web technologies</b
                ></i
              >. With a passion for clean code and intuitive interfaces, we
              transform ideas into engaging digital solutions. Known for our
              collaborative spirit and innovative approach,
              <span class="highlight">404 Found</span> ensures every project stands out in both
              form and function.
      </p>
      <button class="download-btn">Download CV</button>
      <div class="social-links">
        <a href="#"><img src="${codepenImage}" alt="CodePen"></a>
        <a href="#"><img src="${linkedinImage}" alt="LinkedIn"></a>
        <a href="#"><img src="${githubImage}" alt="GitHub"></a>
      </div>
      <div class="stats">
        <div class="stat-item">
          <div class="icon">💻</div>
          <h2>90000</h2>
          <p>lines of code</p>
        </div>
        <div class="stat-item">
          <div class="icon">✔️</div>
          <h2>28</h2>
          <p>projects done</p>
        </div>
        <div class="stat-item">
          <div class="icon">👨‍💻</div>
          <h2>10000</h2>
          <p>hours of study</p>
        </div>
        <div class="stat-item">
          <div class="icon">☕</div>
          <h2>999</h2>
          <p>cups of coffee</p>
        </div>
      </div>
    </div>
  </section> 
      <footer>
      <p>Copyright ©404Found Studio 2024</p>
    </footer>
  `;

  return homeDiv;
}

// Text Rotator Class
class TextRotator {
  constructor(element, words, period) {
    this.words = words;
    this.element = element;
    this.period = period || 2000; // Default rotation period
    this.currentWordIndex = 0;
    this.currentText = "";
    this.isDeleting = false;

    this.rotate(); // Start the rotation
  }

  rotate() {
    const currentWord = this.words[this.currentWordIndex];

    if (this.isDeleting) {
      // Remove characters
      this.currentText = currentWord.substring(0, this.currentText.length - 1);
    } else {
      // Add characters
      this.currentText = currentWord.substring(0, this.currentText.length + 1);
    }

    // Update the element's text
    this.element.innerHTML = `<span class="wrap">${this.currentText}</span>`;

    // Determine the rotation speed
    let delay = 150; // Typing speed
    if (this.isDeleting) delay /= 2; // Faster when deleting

    // If word is complete
    if (!this.isDeleting && this.currentText === currentWord) {
      delay = this.period; // Pause before deleting
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === "") {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length; // Move to next word
      delay = 500; // Pause before typing the next word
    }

    setTimeout(() => this.rotate(), delay);
  }
}

// Initialize the rotator after the content is appended to the DOM
function initializeTextRotation() {
  const rotatingTextElement = document.querySelector(".txt-rotate");
  const words = JSON.parse(rotatingTextElement.getAttribute("data-rotate"));
  const period = parseInt(rotatingTextElement.getAttribute("data-period"), 10);

  new TextRotator(rotatingTextElement, words, period);
}

export { createHomePage, initializeTextRotation };
