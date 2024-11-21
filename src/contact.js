/* Generates the content for the Contact Page */
function createContactPage() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contactPageContainer');

  // Define the inner HTML structure for the contact page
  contactDiv.innerHTML = `
   
    
    <!-- Contact Information Section -->
    <section class="contact-section">
    <h2 class="portfolio-title">Contact</h2>
    <div class="contact-container">
      <div class="contact-text">
       
        <p>
          We’re here to help! Whether you have a question, need support, or want to learn more about our services, we’re just a message away. Feel free to reach out through any of the following channels.
        </p>
      </div>
      <div class="contact-form">
        <form action="#" method="post">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </section>

    <!-- Footer Section with Copyright -->
      <footer>
      <p>Copyright ©404Found Studio 2024</p>
    </footer>
  `;

  return contactDiv;
}

export default createContactPage;
