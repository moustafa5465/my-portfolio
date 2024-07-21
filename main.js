var closeBtn = document.getElementById("close");
var menuBtn = document.getElementById("menu");
var sidebar = document.getElementById("sidebar");

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});
