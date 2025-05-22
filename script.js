// let stars = document.getElementById('stars');
// let moon = document.getElementById('moon');
// let stars = document.getElementById('moun');
// let stars = document.getElementById('stars');
// let stars = document.getElementById('stars');
// let stars = document.getElementById('stars');
// let stars = document.getElementById('stars');

const stars = document.getElementById('stars');
const moon = document.querySelector('#moon');
const navLinks = document.querySelectorAll('header ul li a');
const contentSection = document.querySelector('.content');
const logo = document.querySelector('header .logo');

// Create a new element for a call-to-action button
const ctaButton = document.createElement('button');
ctaButton.textContent = 'Explore Now';
ctaButton.style.padding = '10px 20px';
ctaButton.style.borderRadius = '20px';
ctaButton.style.background = '#fff';
ctaButton.style.color = '#200016';
ctaButton.style.border = 'none';
ctaButton.style.cursor = 'pointer';
ctaButton.style.margin = '20px';

// Use DocumentFragment to create a form with input
const fragment = document.createDocumentFragment();
const formContainer = document.createElement('div');
formContainer.className = 'contact-form';
formContainer.innerHTML = `
  <form id="contactForm">
    <label for="email">Subscribe to Newsletter:</label>
    <input type="email" id="email" placeholder="Enter your email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">
    <button type="submit">Submit</button>
  </form>
  <p id="formMessage"></p>
`;
fragment.appendChild(formContainer);

// Append the form and button to the content section
contentSection.appendChild(ctaButton);
contentSection.appendChild(fragment);

// Navigate using parent-child-sibling relationship
const firstNavLink = navLinks[0];
const nextLink = firstNavLink.nextElementSibling;
nextLink.style.fontWeight = 'bold'; // Style the second nav link

// Iterate over nav links to add active class on click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    // Update content text based on clicked link
    contentSection.querySelector('h2').textContent = `Welcome to ${link.textContent}`;
  });
});

// Parallax scrolling effect using BOM properties
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  
  stars.style.transform = `translateY(${scrollY * 0.5}px)`;
  moon.style.transform = `translateY(${scrollY * 0.8 - 75}px)`;
  document.getElementById('mountains3').style.transform = `translateY(${scrollY * 0.3}px)`;
  document.getElementById('mountains4').style.transform = `translateY(${scrollY * 0.2}px)`;
  document.getElementById('river').style.transform = `translateY(${scrollY * 0.1}px)`;
  document.getElementById('boat').style.transform = `translateY(${scrollY * 0.05}px)`;
});

// CTA button event listener
ctaButton.addEventListener('click', () => {
  ctaButton.classList.toggle('active');
  if (ctaButton.classList.contains('active')) {
    ctaButton.style.background = '#200016';
    ctaButton.style.color = '#fff';
    ctaButton.textContent = 'Discover More';
  } else {
    ctaButton.style.background = '#fff';
    ctaButton.style.color = '#200016';
    ctaButton.textContent = 'Explore Now';
  }
  // Update logo attribute
  logo.setAttribute('data-clicked', ctaButton.classList.contains('active') ? 'true' : 'false');
});

// Form validation
const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  
  // DOM event-based validation
  if (!emailValue.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
    formMessage.textContent = 'Please enter a valid email address';
    formMessage.style.color = '#ff4d4d';
  } else {
    formMessage.textContent = 'Thank you for subscribing!';
    formMessage.style.color = '#4CAF50';
    emailInput.value = '';
  }
});

// Ensure smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});