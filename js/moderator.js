'use strict';
// JavaScript for use with the index page.
function getImage(item, index) {

    console.log(item.id)

    let imageName = document.createElement('img');
        imageName.id = ('grid-image' + index);
        imageName.className = ('grid-image');
        
        let placeHolder = ('image-placeholder');
        document.getElementById(placeHolder).appendChild(imageName)
        
    let gridImage = $('#grid-image' + index);
        gridImage.attr('src', item.url);
}

function getAllImages() {
    fetch(buildUrl('')) 
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /image suceeded: ');
            console.log(json);
                        
            let images = json;
            images.forEach(getImage) 
                          
        })
        .catch(function (err) {
            console.error('Request to /image failed: ', err);
        });   
}

$(function () {
    getAllImages();
});




