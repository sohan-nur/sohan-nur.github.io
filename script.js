// --- script.js ---

// Scroll reveal effect
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ✅ EmailJS Integration
(function () {
  emailjs.init("GhH9BFqEYGu-2tQ-t"); // Your public key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_l4ifv6n", "template_4t6qeom", this)
    .then(function () {
      alert("✅ Message sent successfully!");
    }, function (error) {
      alert("❌ Failed to send message: " + JSON.stringify(error));
    });

  this.reset();
});
