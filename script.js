// let stars = document.getElementById('stars');
// let moon = document.getElementById('moon');
// let stars = document.getElementById('moun');
// let stars = document.getElementById('stars');
// let stars = document.getElementById('stars');
// let stars = document.getElementById('stars');
// let stars = document.getElementById('stars');

// 1. Cache at least one element using selectElementById (5%)
const mainSection = document.getElementById("river"); // Cached for later use

// 2. Cache at least one element using querySelector or querySelectorAll (5%)
const navLinks = document.querySelectorAll("header ul li a");

// 3. Use parent-child-sibling relationships (5%)
const firstLink = navLinks[0];
console.log("First link text:", firstLink.textContent);
const parentList = firstLink.parentNode;
const nextLink = firstLink.nextElementSibling;

// Modify style of next sibling link
if (nextLink) {
    nextLink.style.backgroundColor = "#ff0";
    nextLink.style.color = "#000";
}

// 4. Iterate over a collection of elements (10%)
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Remove 'active' class from all links
        navLinks.forEach(l => l.classList.remove("active"));
        
        // Add 'active' class to clicked link
        this.classList.add("active");
    });
});

// 5. Create at least one element using createElement (5%)
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was dynamically created with JavaScript!";
newParagraph.id = "dynamic-paragraph";

// 6. Use appendChild to add new elements (5%)
document.querySelector(".content").appendChild(newParagraph);

// 7. Use DocumentFragment or cloneNode (2%)
const template = document.createElement("template");
template.innerHTML = `
    <div class="alert">
        <p>This alert box was added via HTML templating.</p>
    </div>
`;
document.body.appendChild(template.content.cloneNode(true));

// 8. Modify innerText/innerHTML in response to user interaction (10%)
const moonImage = document.getElementById("moon");
moonImage.addEventListener("click", () => {
    const messageBox = document.getElementById("dynamic-paragraph");
    if (messageBox) {
        messageBox.textContent = "You clicked on the moon! 🌙";
        messageBox.style.fontSize = "24px";
        messageBox.style.color = "#0ff";
    }
});

// 9. Modify style or classes (5%)
const homeLink = document.querySelector("header ul li a.active");
if (homeLink) {
    homeLink.classList.add("highlighted");
    homeLink.style.fontWeight = "bold";
}

// 10. Modify attributes (3%)
const boatImage = document.getElementById("boat");
if (boatImage) {
    boatImage.setAttribute("alt", "A small boat floating down the river.");
}

// 11. Register event listeners & handlers (10%)
document.getElementById("stars").addEventListener("mouseover", showStarMessage);
function showStarMessage() {
    alert("You hovered over the stars!");
}

document.getElementById("moon").addEventListener("dblclick", moveMoon);
function moveMoon() {
    moonImage.style.transform = "translateY(200px)";
}

// 12. Use BOM properties/methods (3%)
console.log("Browser window width: ", window.innerWidth);
window.addEventListener("resize", () => {
    console.log("Window resized to: ", window.innerWidth + "x" + window.innerHeight);
});

// 13. Include a form with HTML validation (5%)
// Added dynamically:
const formContainer = document.createElement("div");
formContainer.innerHTML = `
    <form id="contactForm" style="margin:30px;color:#fff;">
        <h3>Contact Us</h3>
        <label>Name: <input type="text" required minlength="2"></label><br><br>
        <label>Email: <input type="email" required></label><br><br>
        <button type="submit">Submit</button>
    </form>
`;
document.body.appendChild(formContainer);

// 14. DOM-based validation (5%)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const emailInput = this.querySelector("input[type='email']");
    const emailValue = emailInput.value.trim();

    if (!validateEmail(emailValue)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form submitted successfully!");
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// 15. Ensure no runtime errors (comment out anything broken)

// Optional: Git commits and README handled separately

// Optional: UX improvements
document.body.style.transition = "background 0.5s ease";