let loader = document.querySelector("#loader");
let list = document.querySelector("#listing");

export function loaderDisplay() {
  loader.classList.remove("d-none");
  loader.classList.add("d-flex");
  document.body.style.overflow = "hidden";
}

export function loaderHide() {
  loader.classList.remove("d-flex");
  loader.classList.add("d-none");
  document.body.style.overflow = "auto";
}

export function emptyList() {
  list.innerHTML = "";
}
