// Get textarea and span elements
var text = document.querySelector('#text');
var wordCount = document.querySelector('#word-count');
var characterCount = document.querySelector('#character-count');

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

  // Update the word count in the DOM
  wordCount.textContent = words.length;

  // Get the length of the value in the textarea and update the DOM
  characterCount.textContent = text.value.length;
});