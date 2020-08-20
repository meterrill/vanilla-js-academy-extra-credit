// Get the DOM elements
var fieldError = document.querySelector('.field-error');
var searchInput = document.querySelector('input');
var searchButton = document.querySelector('button');
var searchResults = document.querySelector('#results');

// Store the API key and endpoint
var apiKey = '6PMeaEBxQZUYtzenqPxie3dt4XyehQh3';
var endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`

/**
 * Add the GIFs to the DOM
 * @param {Object} data The API data
 */
function displayGIFs(data, searchQuery) {
  searchResults.innerHTML = `
    <hr>
    <p>Results for "${searchQuery}"</p>
    <ul>
      ${data.data.map(function(gif) {
        return `
          <li>
            <a href="${gif.url}">
              <img src="${gif.images.downsized.url}" alt="${gif.title}">
            </a>
          </li>
        `;
      }).join('')}
    </ul>
  `;
}

/**
 * Add an error message to the DOM
 */
function displayError(error) {
  searchResults.innerHTML = `
    <hr>
    <p>Sorry, there seems to be a problem. Please try again later.</p>
    <div style="width:100%;height:0;padding-bottom:79%;position:relative;"><iframe src="https://giphy.com/embed/d7fTn7iSd2ivS" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/sorry-reaction-d7fTn7iSd2ivS">via GIPHY</a></p>
  `;
}

/**
 * Get the data from the API
 * @param   {String} searchQuery The search query term or phrase
 * @returns {Object}             The API data
 */
function getGIFs(searchQuery) {
  fetch(endpoint + searchQuery).then(function(response) {
    return response.ok ? response.json() : Promise.reject(response);
  }).then(function(data) {
    displayGIFs(data, searchQuery);
  }).catch(function(error) {
    displayError(error);
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
