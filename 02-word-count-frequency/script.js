// Get textarea, span elements, and #word-list div
var text = document.querySelector('#text');
var wordCount = document.querySelector('#word-count');
var characterCount = document.querySelector('#character-count');
var wordList = document.querySelector('#word-list');

// Listen for input on the textarea
text.addEventListener('input', function() {
  // Create an array of strings from the textarea
  var strings = text.value.split(/\s+/);
  
  // Filter empty values from the array of strings
  var words = strings.filter(function(string) {
    return string.length > 0;
  });

  // Create an object to map the word count
  var wordsMap = {};
  words.forEach(function(word) {
    if (wordsMap.hasOwnProperty(word)) {
      wordsMap[word]++;
    } else {
      wordsMap[word] = 1;
    }
  });

  // Sort the words in descending order
  var sortedWords = Object.keys(wordsMap).map(function(word) {
    return {
      word: word,
      total: wordsMap[word]
    };
  }).sort(function(a, b) {
    return b.total - a.total;
  });

  // Update the word count in the DOM
  wordCount.textContent = words.length;

  // Get the length of the value in the textarea and update the DOM
  characterCount.textContent = text.value.length;

  // Add the sorted words list to the DOM
  wordList.innerHTML = sortedWords.map(function(word) {
    return `<li>${word.word}: ${word.total}</li>`;
  }).join('');
});