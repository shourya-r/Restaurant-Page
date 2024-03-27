function createImage(path){
    const chefImage = document.createElement('img');
    chefImage.src = path;
    chefImage.classList.add('locationImage');
    return chefImage;
}

function createImageDiv(){
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('imageDiv');

    imageDiv.appendChild(createImage('images/location.png'));

    return imageDiv;
}

function createDescriptionDiv(text){
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv');

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = text;
    descriptionDiv.classList.add('descriptionDiv');

    outerDiv.appendChild(descriptionDiv);
    return outerDiv;
}

function loadContact(){
    const contentDiv = document.createElement('div');
    contentDiv.appendChild(createDescriptionDiv('📞123 456 7890'));
    contentDiv.appendChild(createDescriptionDiv('📍Worldmark-1 (Aerocity)'));
    contentDiv.appendChild(createImageDiv());
    contentDiv.classList.add('contentDiv');
    return contentDiv;
}

export {loadContact};