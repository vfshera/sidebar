const leftSidebar = document.querySelector("#leftSidebar");
const headerTitle = document.querySelector("#headerTitle");
const menuTitles = Array.from(document.querySelectorAll(".menu-title"));

function toggleNav(toggleBtn) {
  if (leftSidebar?.getAttribute("data-expanded") === "true") {
    leftSidebar?.classList.remove("w-72");
    leftSidebar?.classList.add("w-20");

    leftSidebar?.setAttribute("data-expanded", "false");
  } else {
    leftSidebar?.classList.add("w-72");
    leftSidebar?.classList.remove("w-20");
    leftSidebar?.setAttribute("data-expanded", "true");
  }

  // rotate toggle
  toggleBtn?.classList.toggle("rotate-180");

  // hide header title
  headerTitle?.classList.toggle("scale-0");

  // hide title
  menuTitles.forEach((title) => title.classList.toggle("hidden"));
}

function slideMenu() {
  leftSidebar?.classList.toggle("-translate-x-[100%]");
}
