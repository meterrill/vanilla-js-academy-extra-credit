// Get the DOM elements
var searchInput = document.querySelector('input');
var searchButton = document.querySelector('button');
var searchResults = document.querySelector('#results');

// Store the API key and endpoint
var apiKey = '6PMeaEBxQZUYtzenqPxie3dt4XyehQh3';
var endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`
