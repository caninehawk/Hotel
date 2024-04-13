import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";

let homeOption = document.querySelector(".home-option");
homeOption.addEventListener("click", () => {
    home();
    menu("none");
});

let menuOption = document.querySelector(".menu-option");
menuOption.addEventListener("click", () => {
    home("none");
    menu();
});
