import './styles.css';
import { loadHome } from './home.js';
import { loadContact } from './contact.js';
const body = document.querySelector("body");

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
    homeBtn.addEventListener('click', ()=>{
        const main = document.querySelector('.main');
        main.textContent = '';
        main.appendChild(loadHome());
    });
    
    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.classList.add('navButton');

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact Us";
    contactBtn.classList.add('navButton');
    contactBtn.addEventListener('click',()=>{
        const main = document.querySelector('.main');
        main.textContent = '';
        main.appendChild(loadContact());
    });

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    return navBar;
}

function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');
    return main;
}

function initialiseWebsite(){
    body.appendChild(createHeader());
    const main = createMain();
    body.appendChild(main);
    main.appendChild(loadHome());
}

initialiseWebsite();