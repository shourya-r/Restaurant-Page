function createHeader(){
    const header = document.createElement("header");

    const title = document.createElement("h1");
    title.textContent = "Tikka Treasure";

    const navBar = createNavBar();

    header.appendChild(title);
    header.appendChild(navBar);

    return header;
}

function createNavBar(){
    const navBar = document.createElement('nav');
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact Us";

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    return navBar;
}

const main = document.querySelector(".main");

function initialiseWebsite(){
    main.appendChild(createHeader());
}

initialiseWebsite();