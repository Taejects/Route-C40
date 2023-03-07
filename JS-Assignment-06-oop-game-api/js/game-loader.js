let loader = document.querySelector("#loader");

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
