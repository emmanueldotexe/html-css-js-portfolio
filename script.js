function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const navigation = document.querySelector(".primary-navigation");
  const navigationHeight = navigation.offsetHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
  );
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
