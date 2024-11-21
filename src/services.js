/* Generates the content for the Contact Page */
function createservicesPage() {
  const servicesDiv = document.createElement("div");
  servicesDiv.classList.add("servicesPageContainer");

  // Define the inner HTML structure for the contact page
  servicesDiv.innerHTML = `
      <section class="services">
        <h2 class="portfolio-title">Our Services</h2>
        <div class="services-container">
            <div class="service-card">
                <div class="icon">
                    <img src="https://img.icons8.com/ios/100/code.png" alt="Code Icon">
                </div>
                <h2>front-end development</h2>
                <p>Building responsive, user-friendly websites and applications using modern technologies like HTML, CSS, JavaScript, and React.</p>
            </div>
            <div class="service-card">
                <div class="icon">
                    <img src="https://img.icons8.com/color/100/angularjs.png" alt="Angular Icon">
                </div>
                <h2>angular development</h2>
                <p>Creating visually appealing and user-friendly websites and applications using Angular for seamless experiences.</p>
            </div>
            <div class="service-card">
                <div class="icon">
                    <img src="https://img.icons8.com/color/100/java-coffee-cup-logo.png" alt="Java Icon">
                </div>
                <h2>java development</h2>
                <p>Providing short-term Java development solutions tailored to your business needs for stable and scalable applications.</p>
            </div>
            <div class="service-card">
                <div class="icon">
                    <img src="https://img.icons8.com/ios-filled/100/monitor.png" alt="IT Recruitment Icon">
                </div>
                <h2>it recruitment</h2>
                <p>Specialized recruitment services to help you find the best IT professionals who match your organization's goals and culture.</p>
            </div>
            <div class="service-card">
                <div class="icon">
                    <img src="https://img.icons8.com/ios-filled/100/megaphone.png" alt="Employer Branding Icon">
                </div>
                <h2>employer branding</h2>
                <p>Enhancing your company’s reputation to attract top talent by showcasing your values, culture, and workplace benefits.</p>
            </div>
            <div class="service-card">
                <div class="icon">
                    <img src="https://img.icons8.com/ios-filled/100/group.png" alt="Diversity Icon">
                </div>
                <h2>diversity and inclusion</h2>
                <p>Promoting an inclusive workplace where diverse talents feel valued, ensuring a collaborative and innovative environment.</p>
            </div>
        </div>
    </section>
  
      <!-- Footer Section with Copyright -->
        <footer>
      <p>Copyright ©404Found Studio 2024</p>
    </footer>
    `;

  return servicesDiv;
}

export default createservicesPage;
