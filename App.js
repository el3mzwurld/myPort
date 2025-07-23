const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");
const body = document.querySelector("body");

darkBtn.addEventListener("click", () => {
  body.classList.remove("light");
  body.classList.add("dark");
  darkBtn.classList.add("none");
  lightBtn.classList.add("show");
});

lightBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    return;
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    darkBtn.style.dislay = "flex";
    lightBtn.style.display = "none";
  }
});
