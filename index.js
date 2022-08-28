const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener(onclick, () => {
    nav.classList.add("active");
  });
}
if (close) {
  bar.addEventListener(onclick, () => {
    nav.classList.remove("active");
  });
}
