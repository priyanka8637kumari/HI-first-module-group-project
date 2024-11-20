/* Generates the content for the Team Page */
import priyankaImage from "./images/Priyanka.jpg";
import profiraImage from "./images/Profira.jpg";
import rannaImage from "./images/Raana.jpeg";
import sergioImage from "./images/Sergio.jpg";

function createTeamPage() {
    const teamDiv = document.createElement('div');
    teamDiv.classList.add('teamPageContainer');
  
    // Define the inner HTML structure for the contact page
    teamDiv.innerHTML = `
      <section class="team">
      <h2 class="portfolio-title">Who We Are</h2>
      
        <div class="team-member">
          <img src="${priyankaImage}" alt="Priyanka" />
          <div>
            <h2>Priyanka Kumari</h2>
            <p>
              An aspiring frontend developer passionate about crafting
              responsive and user-friendly web interfaces. Eager to grow into a
              skilled software developer by continuously learning and building
              innovative solutions.
            </p>
          </div>
        </div>
        <div class="team-member">
          <img src="${profiraImage}" alt="Profira" />
          <div>
            <h2>Profira Rusu</h2>
            <p>
              Interested in new technologies and working methods. I like to come
              up with ideas that permit me to improve business processes.
              Passionate about web development, web design, and NLP.
            </p>
          </div>
        </div>
        <div class="team-member">
          <img src="${rannaImage}" alt="Raana" />
          <div>
            <h2>Raana Barimani</h2>
            <p>
              With over 7 years in IT support, system management, and front-end
              development, I thrive on guiding users through platform
              transitions and fostering their success. Combining technical
              expertise in JavaScript, HTML, CSS, and PHP with a people-centered
              approach, I focus on making technology accessible and delivering
              seamless, satisfying user experiences.
            </p>
          </div>
        </div>
        <div class="team-member">
          <img src="${sergioImage}" alt="Sergio" />
          <div>
            <h2>Sergio Prin</h2>
            <p>
              I have a keen interest in people and tech with 7 years of
              experience in various HR, sales, and business development roles.
              I'm currently a junior front-end developer with experience in
              HTML, CSS, and JavaScript, eager to learn about new technologies
              and expand my portfolio.
            </p>
          </div>
        </div>
      </section>
  
     
    `;
  
    return teamDiv;
  }
  
  export default createTeamPage;
  