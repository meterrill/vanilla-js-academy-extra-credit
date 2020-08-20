// Get the DOM elements
var fieldError = document.querySelector('.field-error');
var searchInput = document.querySelector('input');
var searchButton = document.querySelector('button');
var searchResults = document.querySelector('#results');

// Store the API key and endpoint
var apiKey = '6PMeaEBxQZUYtzenqPxie3dt4XyehQh3';
var endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`

/**
 * Get the data from the API
 * @param   {String} searchQuery The search query term or phrase
 * @returns {Object}             The API data
 */
function getGIFs(searchQuery) {
  fetch(endpoint + searchQuery).then(function(response) {
    return response.ok ? response.json() : Promise.reject(response);
  }).then(function(data) {
    console.log(data);
  }).catch(function(error) {
    console.log(error);
  });
}

// Listen for a click on the button
searchButton.addEventListener('click', function() {
  event.preventDefault();

  var searchQuery = searchInput.value;
  
  if (searchQuery.length > 0) {
    getGIFs(searchQuery);
    fieldError.style.display = "none";
  } else {
    fieldError.style.display = "block";
    searchInput.focus();
  }
});
