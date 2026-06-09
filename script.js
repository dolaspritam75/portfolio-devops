// Typing Effect

const roles = [
  "Senior IT Supervisor",
  "System Administrator",
  "Desktop Support Engineer",
  "DevOps Learner",
  "Cloud Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero-content h2");

function typeText() {

    if (!roleElement) return;

    if (charIndex < roles[roleIndex].length) {

        roleElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(deleteText, 1500);

    }
}

function deleteText() {

    if (charIndex > 0) {

        roleElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeText, 300);
    }
}

window.onload = () => {

    if (roleElement) {

        roleElement.textContent = "";

        typeText();

    }

};


// Back To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "90px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#38bdf8";
topButton.style.color = "#000";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Navbar Shadow

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow = "none";

    }

});


// Console Message

console.log("Pritam Portfolio Loaded Successfully 🚀");