// Get the DOM elements
var fieldError = document.querySelector('.field-error');
var searchInput = document.querySelector('input');
var searchButton = document.querySelector('button');
var searchResults = document.querySelector('#results');

// Store the API key and endpoint
var apiKey = '6PMeaEBxQZUYtzenqPxie3dt4XyehQh3';
var endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`

// Listen for a click on the button
searchButton.addEventListener('click', function() {
  event.preventDefault();

  var searchQuery = searchInput.value;
  
  if (searchQuery.length > 0) {
    console.log(searchQuery);
    fieldError.style.display = "none";
  } else {
    fieldError.style.display = "block";
    searchInput.focus();
  }
});
