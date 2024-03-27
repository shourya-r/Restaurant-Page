const dishes = ["Chicken Tikka", "Afghani Tikka", "Galouti Kebab",
 "Hyderabadi Biryani", "Butter Chicken", "Handi Chicken", "Mutton Curry",
  "Chicken Saag", "Khameeri Roti"];

const images = ["images/dish1.jpg", "images/dish2.jpg", "images/dish3.png",
"images/dish4.jpg", "images/dish5.jpg", "images/dish6.jpg", "images/dish7.jpg",
"images/dish8.jpg", "images/dish9.jpeg"];

function createImage(path){
    const chefImage = document.createElement('img');
    chefImage.src = path;
    chefImage.classList.add('menuImage');
    return chefImage;
}

function createImageDiv(path){
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('imageDiv');

    imageDiv.appendChild(createImage(path));

    return imageDiv;
}

function createDescriptionDiv(text){
    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = text;
    descriptionDiv.classList.add('menuItemName');

    return descriptionDiv;
}

function createMenuItem(name, path){
    const menuItem = document.createElement('div');
    menuItem.appendChild(createImageDiv(path));
    menuItem.appendChild(createDescriptionDiv(name));
    return menuItem;
}

function loadMenu(){
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menuGrid');

    for(let i = 0; i<9; i++){
        menuGrid.appendChild(createMenuItem(dishes[i], images[i]));
    }

    return menuGrid;
}

export {loadMenu};