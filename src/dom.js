import searchIcon from "./icons/search.svg";
import githubIcon from "./icons/github-mark-grey.svg";

// Search Bar icon
const searchBtn = document.getElementById("searchBtn");
searchBtn.innerHTML = searchIcon;

// Footer logo
const link = document.querySelector(".github-link");
link.innerHTML = githubIcon;
const ghLogoSvg = link.querySelector("svg");
ghLogoSvg.classList.add("github-logo");
