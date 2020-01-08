'use strict';
// JavaScript for use with the index page.

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
  }

function loadRandomImage() {
    fetch(buildUrl('/random'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ');
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /random succeeded: ');
            console.log(json);
            console.log(json.id);

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);

            $("#author").text(json.author);
            $("#name").text(json.name);
            $("#licence").text(json.license);
            $("#score").text(json.score);          
            
            $('#Like').click(function () {
                $.post(buildUrl('/id/' + json.id + '/vote/up'));
                wait(500);
                window.location.reload();
            })

            $('#DontLike').click(function () {
                $.post(buildUrl('/id/' + json.id + '/vote/down'));
                wait(500);
                window.location.reload();
            })       
        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });
}

$(function () {
    loadRandomImage();
});


