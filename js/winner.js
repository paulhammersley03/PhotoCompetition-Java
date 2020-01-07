'use strict';
// JavaScript for use with the index page.

function loadTopRated() {
    fetch(buildUrl('/top'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /top succeeded: ');
            console.log(json);

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);

            $("#author").text(json.author);
            $("#name").text(json.name);
            $("#licence").text(json.license);
            $("#score").text(json.score); 

        })
        .catch(function (err) {
            console.error('Request to /top failed: ', err);
        });
}

$(function () {
    loadTopRated();
});

