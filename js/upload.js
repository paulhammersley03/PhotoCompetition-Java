'use strict';
// JavaScript for use with the index page.

function uploadImage(){
  const form = new FormData();//empty formData
  //puts text values from form into string constant
  const metaDataObject = {
        author: $('#author').val(),
        name: $('#image').val(),
        license: $('#licence').val()
  };
//convert text inputs from form into Json format (text)
  const blob = new Blob([JSON.stringify(metaDataObject)], {type : 'application/json'});
//does something with the upload file???
  const fileField = document.querySelector('input[type="file"]');
//add Json and raw data to FormData
  form.append('rawdata', fileField.files[0]);
  form.append('metadata', blob);
//send data to url
  fetch(buildUrl(''), {
    method: 'POST',
    body: form
  })
//error/success handling
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

//tells browser what to do when button is clicked
function registerUploadHandler(){
  $('#Upload').click(function (event) {
    event.preventDefault();
    console.log('its being called');
    uploadImage();
  })
}

//waits until html is loaded before anything can happen
$(function () {
  registerUploadHandler();
});