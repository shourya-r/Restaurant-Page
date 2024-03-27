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

function createDescriptionDiv(text){
    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = text;
    descriptionDiv.classList.add('descriptionDiv');
    return descriptionDiv;
}

function loadHome(){
    const contentDiv = document.createElement('div');
    contentDiv.appendChild(createImageDiv());
    contentDiv.appendChild(createDescriptionDiv('Experience the vibrant flavors of North India at Tikka Treasure. From sizzling tandoori delights to rich, creamy curries, every dish is a journey for your taste buds. Come indulge in the essence of India, right here on your plate.'));
    contentDiv.appendChild(createDescriptionDiv('Helmed by renowned Indian chefs Vikas Khanna and Ranveer Brar, Tikka Treasure honors their culinary legacy with authentic flavors and expert craftsmanship, inviting diners on a journey through the rich tapestry of North Indian cuisine.'))
    contentDiv.classList.add('contentDiv');
    return contentDiv;
}

export {loadHome};