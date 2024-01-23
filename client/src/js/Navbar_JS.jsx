// export const Navbar_JS = () => {
  export let menu = document.querySelector("#menu-icon");
  export var navbar = document.querySelector(".navbar");
  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    if (navbar.style.display === "none" || navbar.style.display === "") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  };
  
// };
