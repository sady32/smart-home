// Demo interaktif Lampu & Kipas
const lampuBtn = document.getElementById("lampuBtn");
const kipasBtn = document.getElementById("kipasBtn");
const lampuIcon = document.getElementById("lampuIcon");
const kipasIcon = document.getElementById("kipasIcon");

let lampuOn = false;
let kipasOn = false;

lampuBtn.addEventListener("click", () => {
  lampuOn = !lampuOn;
  lampuBtn.textContent = `Lampu: ${lampuOn ? "ON" : "OFF"}`;
  lampuIcon.className = lampuOn 
    ? "fas fa-lightbulb fa-4x text-warning me-5" 
    : "fas fa-lightbulb fa-4x text-secondary me-5";
});

kipasBtn.addEventListener("click", () => {
  kipasOn = !kipasOn;
  kipasBtn.textContent = `Kipas: ${kipasOn ? "ON" : "OFF"}`;
  kipasIcon.className = kipasOn 
    ? "fas fa-fan fa-spin fa-4x text-info" 
    : "fas fa-fan fa-4x text-secondary";
});
