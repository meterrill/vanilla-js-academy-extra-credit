// Get the textarea
var text = document.querySelector('#text');

// Get the #word-count element
var wordCount = document.querySelector('#word-count');

// Get the #character-count element
var characterCount = document.querySelector('#character-count');

// Get the #word-list ul
var wordList = document.querySelector('#word-list');

/**
 * Get an array of words
 * @param   {String} text The text value from the textarea
 * @returns {Array}       The array of words
 */
function getWordsArray(text) {
  // Create an array of words from the text string
  var wordsArray = text.split(/\W+/);
  
  // Filter empty values from the array of words
  wordsArray = wordsArray.filter(function(word) {
    return word.length > 0;
  });
  
  // Return the array of words
  return wordsArray;
}

/**
 * Get an object of words and their counts
 * @param   {Array} wordsArray The array of words
 * @returns {Object}           The object of words and their counts
 */
function getWordsMap(wordsArray) {
  // Create an object to map the word count
  var wordsMap = {};

  // Count the words
  wordsArray.forEach(function(word) {
    // Convert the word to lower case
    word = word.toLowerCase();

    // If the word exists in the object
    if (wordsMap.hasOwnProperty(word)) {
      // Increment the count
      wordsMap[word]++;
    } else {
      // Add the word to the object and set the count to 1
      wordsMap[word] = 1;
    }
  });

  // Return the object
  return wordsMap;
}

/**
 * Sort the list of words by their count
 * @param   {Object} wordsMap The list of words and their counts
 * @returns {Array}           The sorted array
 */
function sortWordsList(wordsMap) {
  // Create an array of objects for each word
  var wordsList = Object.keys(wordsMap).map(function(key) {
    return {
      word: key,
      count: wordsMap[key]
    };
  });
  
  // Sort the words in descending order
  wordsList.sort(function(a, b) {
    return b.count - a.count;
  });

  // Return the sorted array
  return wordsList;
}

// Listen for input on the textarea
text.addEventListener('input', function() {
  var wordsArray = getWordsArray(text.value);
  var wordsMap = getWordsMap(wordsArray);
  var sortedWords = sortWordsList(wordsMap);

  // Add the word count to the DOM
  wordCount.textContent = wordsArray.length;

  // Add the character count to the DOM
  characterCount.textContent = text.value.length;

  // Add the words list to the DOM
  wordList.innerHTML = sortedWords.map(function(word) {
    return `<li><span>${word.word}:</span> <span>${word.count}</span></li>`;
  }).join('');
});