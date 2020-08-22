// Get the #section element
var sectionSelect = document.querySelector('#section');

// Get the #app element
var app = document.querySelector('#app');

// Store the endpoint and API key
var section = 'home';
var apiKey = '0q2Pwnu4SiIy7UxplCJ745E0PGRohgVb';
var endpoint = 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=' + apiKey;

/**
 * Get the JSON from the API
 * @param   {Object} response The response from the API
 * @returns {Object}          The JSON data or a rejected promise
 */
function getJSON(response) {
  return response.ok ? response.json() : Promise.reject(response);
}

/**
 * Add the articles to the DOM
 * @param   {Object} articles The JSON data from the API
 */
function displayArticles(articles) {
  app.innerHTML = articles.results.map(function (article) {
    return (
      '<article>' +
      '<h2>' + article.section + '</h2>' +
      '<a href="' + article.url + '">' +
      '<img src="' + article.multimedia[0].url + '" alt="' + article.multimedia[0].caption + '">' +
      '<h3>' + article.title + '</h3>' +
      '<p>' + article.abstract + '</p>' +
      '<time datetime="' + article.published_date + '">' + new Date(article.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + '</time>' +
      '</a>' +
      '</article>'
    );
  }).join('');
}

/**
 * Add an error message to the DOM
 * @param   {Object}  error The rejected promise
 */
function displayError(error) {
  app.style.display = 'block';
  app.innerHTML = '<p class="error">We\'re experiencing some technical difficulties.<br>Please try again later or view today\'s top stories directly on <a href="https://www.nytimes.com/">The New York Times</a> website.</p>';
}

fetch(endpoint)
  .then(getJSON)
  .then(displayArticles)
  .catch(displayError);


// Listen for changes to the section select element
sectionSelect.addEventListener('change', function(){
  console.log(sectionSelect.value);
});
  