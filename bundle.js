(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]),r.push([n.id,'/* Import Google Font - Montserrat */\n\n/* Global Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Montserrat", sans-serif;\n  background-color: #eff2f3;\n  text-align: center;\n  min-height: 100vh;\n}\n\n/* Header Styling */\nheader {\n  padding: 10px 20px;\n  background-color: #0b8080;\n  display: flex;\n  flex-wrap: wrap; /* Allow wrapping for smaller screens */\n  align-items: center;\n  justify-content: space-between; /* Space between logo and navigation */\n  gap: 10px; /* Add space between elements */\n}\n\n/* Logo Styling */\n.logo img {\n  height: 60px; /* Adjust logo height */\n  width: auto; /* Maintain aspect ratio */\n  max-width: 100%; /* Prevent logo from overflowing */\n}\n\n/* Navigation Buttons */\nnav {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap; /* Allow buttons to wrap */\n  justify-content: center; /* Center align buttons when wrapped */\n}\n\nbutton {\n  background-color: #eff2f3;\n  font-family: inherit;\n  font-size: 1.2rem; /* Slightly smaller font for consistency */\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n}\n\n/* Header Responsiveness */\n@media (max-width: 1024px) {\n  header {\n    flex-direction: column; /* Stack logo and nav vertically */\n    align-items: center; /* Center align elements */\n    gap: 20px; /* Increase spacing for stacked layout */\n  }\n\n  .logo img {\n    height: 50px; /* Adjust logo size for smaller screens */\n  }\n\n  nav {\n    flex-wrap: wrap; /* Allow buttons to wrap */\n    justify-content: center;\n    gap: 10px; /* Reduce gap between buttons */\n  }\n\n  button {\n    font-size: 1rem; /* Reduce font size */\n    padding: 8px 15px; /* Adjust padding for smaller buttons */\n    flex: 1 1 auto; /* Allow buttons to shrink dynamically */\n    max-width: 150px; /* Optional: Set a maximum width for each button */\n    min-width: 100px; /* Optional: Prevent buttons from shrinking too much */\n  }\n}\n\n@media (max-width: 480px) {\n  header {\n    padding: 10px; /* Reduce padding for very small screens */\n  }\n\n  .logo img {\n    height: 40px; /* Further adjust logo size */\n  }\n\n  button {\n    font-size: 0.9rem; /* Reduce button font size */\n    padding: 5px 10px; /* Smaller padding for buttons */\n  }\n}\n\n/* Home Page Styling */\n.homePageContainer,\n.contactPageContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.homePageContainer h2 {\n  font-size: 3rem;\n}\n\n/* New home page */\n\n.intro {\n  display: table;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  color: white;\n}\n\n.intro .intro-body {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 15%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.brand-heading {\n  font-size: 100px;\n  font-family: "Montserrat", sans-serif;\n  font-weight: 700;\n  text-align: left;\n  color: #40e0d0;\n}\n\n.intro .intro-body .intro-text {\n  font-size: 25px;\n  font-family: "Montserrat", sans-serif;\n  text-align: left;\n}\n\nspan.city {\n  background-color: #40e0d0;\n  color: #fff;\n  border-radius: 4px;\n  width: 15px;\n}\n\n@media (min-width: 768px) {\n  .intro {\n    height: 100%;\n    padding: 0;\n    text-align: center;\n    padding: 20px;\n  }\n  .intro .intro-body .brand-heading {\n    font-size: 130px;\n  }\n  .intro .intro-body .intro-text {\n    font-size: 35px;\n  }\n}\n\n/* About Section */\n\n.about-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  text-align: center;\n}\n\n.about-intro {\n  font-size: 1.2rem;\n  color: #555;\n  margin-bottom: 20px;\n}\n\n.highlight {\n  color: teal;\n  font-weight: bold;\n}\n\n.download-btn {\n  background: teal;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n\n.download-btn:hover {\n  background: darkcyan;\n}\n\n.social-links {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 40px;\n}\n\n.social-links img {\n  width: 40px;\n  height: 40px;\n}\n\n.stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n}\n\n.stat-item {\n  text-align: center;\n}\n\n.stat-item .icon {\n  font-size: 2rem;\n  color: teal;\n  margin-bottom: 10px;\n}\n\n.stat-item h2 {\n  font-size: 1.5rem;\n  color: #333;\n}\n\n.stat-item p {\n  font-size: 0.9rem;\n  color: #777;\n}\n\n/* Responsive */\n@media (max-width: 768px) {\n  h1 {\n    font-size: 2rem;\n  }\n\n  .download-btn {\n    font-size: 0.9rem;\n    padding: 8px 16px;\n  }\n\n  .intro {\n    font-size: 1rem;\n  }\n}\n/* Portfolio Section */\n\nh2 {\n  margin: 0;\n}\n\n.portfolio-section {\n  padding: 50px 20px;\n  text-align: center;\n  background-color: #f9f9f9;\n}\n\n.portfolio-title {\n  font-size: 2.5rem;\n  color: teal;\n  margin-bottom: 30px;\n  position: relative;\n}\n\n.portfolio-title::after {\n  content: "";\n  display: block;\n  width: 80px;\n  height: 3px;\n  background: teal;\n  margin: 10px auto;\n}\n\n/* Portfolio Cards */\n.portfolio-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n}\n\n.portfolio-card {\n  width: 300px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.portfolio-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n}\n\n/* Portfolio Image */\n.portfolio-image {\n  width: 100%;\n  height: auto;\n}\n\n/* Portfolio Content */\n.portfolio-content {\n  padding: 20px;\n}\n\n.portfolio-content h3 {\n  margin: 10px 0 5px;\n  font-size: 1.2rem;\n  color: #333;\n}\n\n.portfolio-content p {\n  margin: 0;\n  font-size: 1rem;\n  color: #666;\n}\n\n.portfolio-button {\n  display: inline-block;\n  margin-top: 15px;\n  padding: 10px 20px;\n  font-size: 1rem;\n  color: #fff;\n  background-color: teal;\n  border: none;\n  border-radius: 5px;\n  text-decoration: none;\n  transition: background-color 0.3s ease;\n}\n\n.portfolio-button:hover {\n  background-color: #005f5f;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .portfolio-container {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n/* Contact Section*/\n.contact-section {\n  padding: 40px 20px;\n  background-color: #fff;\n  color: #333;\n}\n\n.contact-container {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1200px;\n  margin: 0 auto;\n  gap: 20px;\n}\n\n.contact-text {\n  flex: 1 1 40%;\n  margin-right: 20px;\n}\n\n.contact-text h2 {\n  color: #008080; /* teal color */\n  margin-bottom: 10px;\n}\n\n.contact-text p {\n  line-height: 1.6;\n  font-size: 1rem;\n}\n\n.contact-form {\n  flex: 1 1 50%;\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput,\ntextarea {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n\ntextarea {\n  resize: none;\n}\n\n.submit-btn {\n  background-color: #008080; /* teal color */\n  color: #fff;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.submit-btn:hover {\n  background-color: #005f5f;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .contact-container {\n    flex-direction: column;\n  }\n\n  .contact-text,\n  .contact-form {\n    flex: 1 1 100%;\n    margin-right: 0;\n  }\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .menu-item img {\n    height: 150px;\n  }\n\n  .menu-section h2,\n  .menu-item h3 {\n    font-size: 1.25rem;\n  }\n\n  .menu-item p {\n    font-size: 0.9rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .menu-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .menu-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .hero h2 {\n    font-size: 3rem;\n  }\n\n  .hero p {\n    font-size: 1.5rem;\n  }\n}\n\n/*Team Section */\n\n.team {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.team h1 {\n  font-size: 46px;\n  color: #008080;\n}\n\n.team-member {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.team-member img {\n  width: 175px;\n  height: 175px;\n  border-radius: 50%;\n  border: solid 5px #008080;\n  margin-right: 40px;\n}\n\n.team-member div {\n  text-align: left;\n}\n\n.team-member h2 {\n  font-size: 28px;\n  color: #008080;\n  padding-bottom: 10px;\n}\n\n.team-member p {\n  font-size: 20px;\n}\n\n@media (max-width: 800px) {\n  .team-member {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .team-member div {\n    text-align: center;\n  }\n\n  .team-member img {\n    margin: 0;\n  }\n\n  .team-member h2 {\n    margin-top: 10px;\n  }\n}\nsvg {\n  width: 30px;\n  margin-left: 20px;\n  padding-bottom: 5px;\n}\n\nsvg:hover {\n  cursor: pointer;\n}\n\n.name-icon {\n  display: flex;\n  flex-direction: row;\n}\n\n.name-icon a {\n  align-self: center;\n}\n\n/* services section */\n\n.services {\n  text-align: center;\n  padding: 40px 20px;\n  background-color: #f8f9fa;\n  color: #00796b;\n}\n\n.services h1 {\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n  color: #004d40;\n}\n\n.services-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n}\n\n.service-card {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n  transition: transform 0.3s;\n}\n\n.service-card:hover {\n  transform: scale(1.05);\n}\n\n.service-card .icon img {\n  width: 60px;\n  margin-bottom: 15px;\n}\n\n.service-card h2 {\n  font-size: 1.5rem;\n  color: #00bfa5;\n  margin-bottom: 10px;\n}\n\n.service-card p {\n  font-size: 1rem;\n  color: #555;\n  line-height: 1.6;\n}\n\n/* Footer Styling */\nfooter {\n  background-color: #333;\n  color: white;\n  text-align: center;\n  padding: 10px 0;\n  width: 100%;\n}\n',""]);const s=r},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var m=t(p),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(g);else{var f=i(g,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var c=o(n,i),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.nc=void 0;var o=t(72),i=t.n(o),a=t(825),r=t.n(a),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),m=t.n(p),g=t(113),f=t.n(g),u=t(365),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=m(),i()(u.A,h),u.A&&u.A.locals&&u.A.locals;const v=t.p+"65b2da8fc7209310924f.png",x=t.p+"3023c837e044ba1c5deb.png",b=t.p+"ee682d0bb0fe0db9eeec.png",w=t.p+"26656d858ec3b0d23a42.jpeg";function y(){const n=document.createElement("div");return n.classList.add("homePageContainer"),n.innerHTML=`\n     <section class="intro">\n      <div class="intro-body">\n        <div class="container">\n          <div class="row">\n            <div class="col-md-8 col-md-offset-2">\n              <div class="brand-heading">\n                <span class="txt-rotate" data-period="2000" data-rotate='[ "سلام,", "Salut,", "Hola,", "Hej,", "नमस्ते," ]'></span>\n              </div>\n              <p class="intro-text">we are Raana, Priyanka, Sergio and Profira,\n             <span class="intro-text-hgl"> front-end developers</span>\n              based in beautiful Sweden.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n   <section id="about">\n    <div class="about-container">\n      <h2 class="portfolio-title">About</h2>\n      \n      <p class="about-intro">\n      <span class="highlight">404 Found</span> is a creative studio of four talented\n              front-end developers specializing in building sleek, user-friendly\n              web experiences. The team thrives on\n              <i\n                ><b\n                  >problem-solving, crafting responsive designs, and pushing the\n                  boundaries of modern web technologies</b\n                ></i\n              >. With a passion for clean code and intuitive interfaces, we\n              transform ideas into engaging digital solutions. Known for our\n              collaborative spirit and innovative approach,\n              <span class="highlight">404 Found</span> ensures every project stands out in both\n              form and function.\n      </p>\n      <button class="download-btn">Download CV</button>\n      <div class="social-links">\n        <a href="#"><img src="${x}" alt="CodePen"></a>\n        <a href="#"><img src="${b}" alt="LinkedIn"></a>\n        <a href="#"><img src="${w}" alt="GitHub"></a>\n      </div>\n      <div class="stats">\n        <div class="stat-item">\n          <div class="icon">💻</div>\n          <h2>90000</h2>\n          <p>lines of code</p>\n        </div>\n        <div class="stat-item">\n          <div class="icon">✔️</div>\n          <h2>28</h2>\n          <p>projects done</p>\n        </div>\n        <div class="stat-item">\n          <div class="icon">👨‍💻</div>\n          <h2>10000</h2>\n          <p>hours of study</p>\n        </div>\n        <div class="stat-item">\n          <div class="icon">☕</div>\n          <h2>999</h2>\n          <p>cups of coffee</p>\n        </div>\n      </div>\n    </div>\n  </section> \n      <footer>\n      <p>Copyright ©404Found Studio 2024</p>\n    </footer>\n  `,n}class C{constructor(n,e,t){this.words=e,this.element=n,this.period=t||2e3,this.currentWordIndex=0,this.currentText="",this.isDeleting=!1,this.rotate()}rotate(){const n=this.words[this.currentWordIndex];this.isDeleting?this.currentText=n.substring(0,this.currentText.length-1):this.currentText=n.substring(0,this.currentText.length+1),this.element.innerHTML=`<span class="wrap">${this.currentText}</span>`;let e=150;this.isDeleting&&(e/=2),this.isDeleting||this.currentText!==n?this.isDeleting&&""===this.currentText&&(this.isDeleting=!1,this.currentWordIndex=(this.currentWordIndex+1)%this.words.length,e=500):(e=this.period,this.isDeleting=!0),setTimeout((()=>this.rotate()),e)}}function k(){const n=document.querySelector(".txt-rotate"),e=JSON.parse(n.getAttribute("data-rotate")),t=parseInt(n.getAttribute("data-period"),10);new C(n,e,t)}const S=t.p+"58252dfc3c7b433233d4.jpeg",A=t.p+"8219b5dfff646226836c.png",P=t.p+"c767cff45de9126dab1a.jpeg",j=t.p+"0d4150349b032a1ecb3a.jpeg",M=t.p+"952d66ba170bb6ec8ea5.jpeg",I=t.p+"fa63ee2316ad668b01c3.jpeg",H=t.p+"015ad395e8932e93311b.png",T=t.p+"eaafd7eb778142a8fa45.png",z=function(){const n=document.createElement("div");return n.classList.add("menuPageContainer"),n.innerHTML=`\n    <section class="portfolio-section">\n        <h2 class="portfolio-title">Portfolio</h2>\n        <div class="portfolio-container">\n\n          \x3c!-- Card 1 --\x3e\n          <div class="portfolio-card">\n            <img src="${S}" alt="Project 1" class="portfolio-image" width="300px" height="200px">\n            <div class="portfolio-content">\n              <h3>Sign-Up form Project</h3>\n              <p>It is a responsive and accessible user registration form. <br>Key concepts: form validation, input handling, and CSS styling.</p>\n              <a href="https://github.com/prinsergioprin/sign-up-form\n              " class="portfolio-button">Go To Project</a>\n            </div>\n          </div>\n          \x3c!-- Card 2 --\x3e\n\n          <div class="portfolio-card">\n            <img src="${A}" alt="Project 2" class="portfolio-image">\n            <div class="portfolio-content">\n              <h3>Etch-a-Sketch project</h3>\n              <p>It is a fun and interactive browser-based drawing tool. <br>Key concepts: customizable grid, HTML, CSS, JavaScript Skills</p>\n              <a href="https://github.com/prinsergioprin/etch-a-sketch-prinsergioprin" class="portfolio-button">Go To Project</a>\n            </div>\n          </div>\n\n          \x3c!-- Card 3 --\x3e\n          <div class="portfolio-card">\n            <img src="${P}" alt="Project 3" class="portfolio-image">\n            <div class="portfolio-content">\n              <h3>Tic Tac Toe Project</h3>\n              <p>It is a classic implementation of the popular two-player strategy game.<br>Key concepts: DOM manipulation using JavaScript, HTML, and CSS</p>\n              <a href="#" class="portfolio-button">Go To Project</a>\n            </div>\n          </div>\n\n           \x3c!-- Card 4 --\x3e\n        <div class="portfolio-card">\n          <img\n            src="${j}"\n            alt="Project 3"\n            class="portfolio-image"\n          />\n          <div class="portfolio-content">\n            <h3>Restaurant Page Project</h3>\n            <p>\n              It is a fully functional, responsive restaurant webpage <br />Key\n              concepts: JavaScript, Webpack, and modular ES6 architecture\n            </p>\n            <a href="#" class="portfolio-button">Go to Project</a>\n          </div>\n        </div>\n\n        \x3c!-- Card 5 --\x3e\n        <div class="portfolio-card">\n          <img\n            src="${M}"\n            alt="Project 3"\n            class="portfolio-image"\n          />\n          <div class="portfolio-content">\n            <h3>Weather App</h3>\n            <p>\n              It is an interactive web application that fetches real-time\n              weather data.<br />Key concepts: HTML, CSS, JavaScript and APIs\n            </p>\n            <a\n              href="https://github.com/RaanaBrm/Weather-App"\n              class="portfolio-button"\n              >Go to Project</a\n            >\n          </div>\n        </div>\n\n        \x3c!-- Card 6 --\x3e\n        <div class="portfolio-card">\n          <img\n            src="${I}"\n            alt="Project 3"\n            class="portfolio-image"\n          />\n          <div class="portfolio-content">\n            <h3>To-do List Project</h3>\n            <p>\n              Some quick example text to build on the card title and make up the\n              bulk of the card's content.\n            </p>\n            <a\n              href="https://github.com/RaanaBrm/To-Do-List"\n              class="portfolio-button"\n              >Go to Project</a\n            >\n          </div>\n        </div>\n\n        \x3c!-- Card 7 --\x3e\n        <div class="portfolio-card">\n          <img\n            src="${H}"\n            alt="Project 3"\n            class="portfolio-image"\n          />\n          <div class="portfolio-content">\n            <h3>Library Project</h3>\n            <p>\n              It is a web app to manage a collection of books. <br />Key\n              concepts: Object-oriented programming, and DOM manipulation\n            </p>\n            <a href="https://library-hi26.netlify.app/" class="portfolio-button"\n              >Go to Project</a\n            >\n          </div>\n        </div>\n\n        \x3c!-- Card 8 --\x3e\n        <div class="portfolio-card">\n          <img\n            src="${T}"\n            alt="Project 3"\n            class="portfolio-image"\n          />\n          <div class="portfolio-content">\n            <h3>Calculator Project</h3>\n            <p>\n              Some quick example text to build on the card title and make up the\n              bulk of the card's content.\n            </p>\n            <a href="#" class="portfolio-button">Go to Project</a>\n          </div>\n        </div>\n          </div></section>\n            <footer>\n      <p>Copyright ©404Found Studio 2024</p>\n    </footer>\n  `,n},L=function(){const n=document.createElement("div");return n.classList.add("contactPageContainer"),n.innerHTML='\n   \n    \n    \x3c!-- Contact Information Section --\x3e\n    <section class="contact-section">\n    <h2 class="portfolio-title">Contact</h2>\n    <div class="contact-container">\n      <div class="contact-text">\n       \n        <p>\n          We’re here to help! Whether you have a question, need support, or want to learn more about our services, we’re just a message away. Feel free to reach out through any of the following channels.\n        </p>\n      </div>\n      <div class="contact-form">\n        <form action="#" method="post">\n          <div class="form-group">\n            <label for="name">Name</label>\n            <input type="text" id="name" name="name" placeholder="Your Name" required>\n          </div>\n          <div class="form-group">\n            <label for="email">Email</label>\n            <input type="email" id="email" name="email" placeholder="Your Email" required>\n          </div>\n          <div class="form-group">\n            <label for="message">Message</label>\n            <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>\n          </div>\n          <button type="submit" class="submit-btn">Send Message</button>\n        </form>\n      </div>\n    </div>\n  </section>\n\n    \x3c!-- Footer Section with Copyright --\x3e\n      <footer>\n      <p>Copyright ©404Found Studio 2024</p>\n    </footer>\n  ',n},E=t.p+"bc5185f4251084274c87.jpg",V=t.p+"2527bbcb38102fc8e1b9.jpg",R=t.p+"12614d46be1ccebeb405.jpeg",B=t.p+"d48b94e63766091078e7.jpg",D=function(){const n=document.createElement("div");return n.classList.add("teamPageContainer"),n.innerHTML=`\n      <section class="team">\n      <h2 class="portfolio-title">Who We Are</h2>\n      \n       <div class="team-member">\n          <img src="${E}" alt="Priyanka" />\n          <div>\n            \x3c!-- Added icons and new div below --\x3e\n            <div class="name-icon">\n              <h2>Priyanka Kumari</h2>\n              <a href="https://github.com/priyanka8637kumari" target="_blank">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                  <title>github</title>\n                  <path\n                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"\n                  />\n                </svg>\n              </a>\n            </div>\n            \x3c!-- ends here --\x3e\n            <p>\n              An aspiring frontend developer passionate about crafting\n              responsive and user-friendly web interfaces. Eager to grow into a\n              skilled software developer by continuously learning and building\n              innovative solutions.\n            </p>\n          </div>\n        </div>\n       <div class="team-member">\n          <img src="${V}" alt="Profira" />\n          <div>\n            \x3c!-- Added icons and new div below --\x3e\n            <div class="name-icon">\n              <h2>Profira Rusu</h2>\n              <a href="https://github.com/profiraa" target="_blank">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                  <title>github</title>\n                  <path\n                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"\n                  />\n                </svg>\n              </a>\n              <a\n                href="https://www.linkedin.com/in/profirarusu/"\n                target="_blank"\n              >\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                  <title>linkedin</title>\n                  <path\n                    d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"\n                  />\n                </svg>\n              </a>\n            </div>\n            \x3c!-- ends here --\x3e\n            <p>\n              Interested in new technologies and working methods. I like to come\n              up with ideas that permit me to improve business processes.\n              Passionate about web development, web design, and NLP.\n            </p>\n          </div>\n        </div>\n\n        <div class="team-member">\n          <img src="${R}" alt="Raana" />\n          <div>\n            \x3c!-- Added icons and new div below --\x3e\n            <div class="name-icon">\n              <h2>Raana Barimani</h2>\n              <a\n                href="https://www.linkedin.com/in/raana-barimani-a0b8a8323/"\n                target="_blank"\n              >\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                  <title>linkedin</title>\n                  <path\n                    d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"\n                  />\n                </svg>\n              </a>\n            </div>\n            \x3c!-- ends here --\x3e\n            <p>\n              With over 7 years in IT support, system management, and front-end\n              development, I thrive on guiding users through platform\n              transitions and fostering their success. Combining technical\n              expertise in JavaScript, HTML, CSS, and PHP with a people-centered\n              approach, I focus on making technology accessible and delivering\n              seamless, satisfying user experiences.\n            </p>\n          </div>\n        </div>\n\n\n     <div class="team-member">\n          <img src="${B}" alt="Sergio" />\n          <div>\n            \x3c!-- Added icons and new div below --\x3e\n            <div class="name-icon">\n              <h2>Sergio Prin</h2>\n              <a href="https://github.com/prinsergioprin" target="_blank">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                  <title>github</title>\n                  <path\n                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"\n                  />\n                </svg>\n              </a>\n              <a href="https://www.linkedin.com/in/sergioprin/" target="_blank">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n                  <title>linkedin</title>\n                  <path\n                    d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"\n                  />\n                </svg>\n              </a>\n            </div>\n            \x3c!-- ends here --\x3e\n            <p>\n              I have a keen interest in people and tech with 7 years of\n              experience in various HR, sales, and business development roles.\n              I'm currently a junior front-end developer with experience in\n              HTML, CSS, and JavaScript, eager to learn about new technologies\n              and expand my portfolio.\n            </p>\n          </div>\n        </div>\n      </section>\n    <footer>\n      <p>Copyright ©404Found Studio 2024</p>\n    </footer>\n     \n    `,n},$=function(){const n=document.createElement("div");return n.classList.add("servicesPageContainer"),n.innerHTML='\n      <section class="services">\n        <h2 class="portfolio-title">Our Services</h2>\n        <div class="services-container">\n            <div class="service-card">\n                <div class="icon">\n                    <img src="https://img.icons8.com/ios/100/code.png" alt="Code Icon">\n                </div>\n                <h2>front-end development</h2>\n                <p>Building responsive, user-friendly websites and applications using modern technologies like HTML, CSS, JavaScript, and React.</p>\n            </div>\n            <div class="service-card">\n                <div class="icon">\n                    <img src="https://img.icons8.com/color/100/angularjs.png" alt="Angular Icon">\n                </div>\n                <h2>angular development</h2>\n                <p>Creating visually appealing and user-friendly websites and applications using Angular for seamless experiences.</p>\n            </div>\n            <div class="service-card">\n                <div class="icon">\n                    <img src="https://img.icons8.com/color/100/java-coffee-cup-logo.png" alt="Java Icon">\n                </div>\n                <h2>java development</h2>\n                <p>Providing short-term Java development solutions tailored to your business needs for stable and scalable applications.</p>\n            </div>\n            <div class="service-card">\n                <div class="icon">\n                    <img src="https://img.icons8.com/ios-filled/100/monitor.png" alt="IT Recruitment Icon">\n                </div>\n                <h2>it recruitment</h2>\n                <p>Specialized recruitment services to help you find the best IT professionals who match your organization\'s goals and culture.</p>\n            </div>\n            <div class="service-card">\n                <div class="icon">\n                    <img src="https://img.icons8.com/ios-filled/100/megaphone.png" alt="Employer Branding Icon">\n                </div>\n                <h2>employer branding</h2>\n                <p>Enhancing your company’s reputation to attract top talent by showcasing your values, culture, and workplace benefits.</p>\n            </div>\n            <div class="service-card">\n                <div class="icon">\n                    <img src="https://img.icons8.com/ios-filled/100/group.png" alt="Diversity Icon">\n                </div>\n                <h2>diversity and inclusion</h2>\n                <p>Promoting an inclusive workplace where diverse talents feel valued, ensuring a collaborative and innovative environment.</p>\n            </div>\n        </div>\n    </section>\n  \n      \x3c!-- Footer Section with Copyright --\x3e\n        <footer>\n      <p>Copyright ©404Found Studio 2024</p>\n    </footer>\n    ',n};function F(n,e){document.getElementById("content").innerHTML="",document.getElementById("content").appendChild(n()),e&&e()}document.querySelector(".logo img").src=v,document.getElementById("home").addEventListener("click",(()=>F(y,k))),document.getElementById("menu").addEventListener("click",(()=>F(z))),document.getElementById("contact").addEventListener("click",(()=>F(L))),document.getElementById("team").addEventListener("click",(()=>F(D))),document.getElementById("services").addEventListener("click",(()=>F($))),F(y,k)})();