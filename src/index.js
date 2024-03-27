import './styles.css';
import { loadHome } from './home.js';

function createHeader(){
    const header = document.createElement("header");
    header.classList.add('header');

    const title = document.createElement("h1");
    title.textContent = "Tikka Treasure";
    title.classList.toggle('title');

    const navBar = createNavBar();

    header.appendChild(title);
    header.appendChild(navBar);

    return header;
}

function createNavBar(){
    const navBar = document.createElement('nav');
    navBar.classList.add('navBar');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.classList.add('navButton');

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.classList.add('navButton');

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact Us";
    contactBtn.classList.add('navButton');

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    return navBar;
}

const main = document.querySelector(".main");

function initialiseWebsite(){
    main.appendChild(createHeader());
    main.appendChild(loadHome());
}

initialiseWebsite();