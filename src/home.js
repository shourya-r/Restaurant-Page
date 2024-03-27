function createImage(path){
    const chefImage = document.createElement('img');
    chefImage.src = path;
    chefImage.classList.add('chefImage');
    return chefImage;
}

function createImageDiv(){
    const imageDiv = document.createElement('div');

    imageDiv.classList.add('imageDiv');

    imageDiv.appendChild(createImage('images/chef1.jpg'));
    imageDiv.appendChild(createImage('images/chef2.jpg'));
    return imageDiv;
}
function loadHome(){
    const contentDiv = document.createElement('div');
    contentDiv.appendChild(createImageDiv());
    return contentDiv;
}

export {loadHome};