/* =========================
   JS INTERACTIF - SYSTÈME SOLAIRE
   ========================= */

// Animation au scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Effet planète sur l’image
const heroImg = document.querySelector(".heroImg");

if (heroImg) {
  heroImg.addEventListener("mouseover", () => {
    heroImg.style.transform = "scale(1.05) rotate(1deg)";
    heroImg.style.transition = "transform 0.5s ease";
  });

  heroImg.addEventListener("mouseout", () => {
    heroImg.style.transform = "scale(1) rotate(0)";
  });
}

// Horloge spatiale
const clock = document.createElement("div");
clock.style.position = "fixed";
clock.style.top = "20px";
clock.style.right = "20px";
clock.style.background = "rgba(0,0,0,0.6)";
clock.style.color = "#00adb5";
clock.style.padding = "8px 14px";
clock.style.borderRadius = "12px";
clock.style.fontSize = "14px";
clock.style.fontWeight = "600";
clock.style.backdropFilter = "blur(6px)";

document.body.appendChild(clock);

function updateClock() {
  const now = new Date();
  clock.textContent = `🕒 ${now.toLocaleTimeString()}`;
}

setInterval(updateClock, 1000);
updateClock();

// Info pédagogique
const infoBtn = document.createElement("button");
infoBtn.textContent = "🧠 Info Espace";
infoBtn.style.position = "fixed";
infoBtn.style.bottom = "20px";
infoBtn.style.left = "20px";
infoBtn.style.padding = "10px 16px";
infoBtn.style.borderRadius = "20px";
infoBtn.style.border = "none";
infoBtn.style.cursor = "pointer";
infoBtn.style.background = "#393e46";
infoBtn.style.color = "#eeeeee";
infoBtn.style.fontWeight = "600";

document.body.appendChild(infoBtn);

infoBtn.addEventListener("click", () => {
  alert(
    "🌍 Le système solaire s’est formé il y a environ 4,6 milliards d’années !"
  );
});
// Infos supplémentaires sur les planètes
document.querySelectorAll(".planetCard").forEach((card) => {
  card.addEventListener("click", () => {
    const planet = card.querySelector("h3").textContent;
    alert(`🪐 Tu as sélectionné la planète ${planet} !`);
  });
});
// Animation apparition des planètes au scroll
const planets = document.querySelectorAll(".planet");

const planetObserver = new IntersectionObserver (
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);
planets.forEach(planet => {
  planetObserver.observe(planet);
});
// Infos supplémentaires sur les planètes
document.querySelectorAll(".planetCard").forEach((card) => {
  card.addEventListener("click", () => {
    const planet = card.querySelector("h3").textContent;
    alert(`🪐 Tu as sélectionné la planète ${planet} !`);
  });
}); 
