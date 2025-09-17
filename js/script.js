// Mobile menu toggle
document.addEventListener("click", e => {
  if (e.target.classList.contains("menu-btn")) {
    document.querySelector(".nav-links").classList.toggle("active");
  }
});

// Load header & footer dynamically
function loadPart(id, file) {
  fetch(file).then(res => res.text()).then(data => {
    document.getElementById(id).innerHTML = data;
  });
}

window.onload = () => {
  loadPart("header", "header.html");
  loadPart("footer", "footer.html");
};
