// Get textarea and span elements
var text = document.querySelector('#text');
var wordCount = document.querySelector('#word-count');
var characterCount = document.querySelector('#character-count');

// Listen for input on the textarea
text.addEventListener('input', function () {
  // Create an array of strings from the textarea
  var stringsArray = text.value.split(/\s+/);
  // Filter empty values from the array of strings
  var wordsArray = stringsArray.filter(function (string) {
    return string.length > 0;
  });
  // Update the word count in the DOM
  wordCount.textContent = wordsArray.length;

  // Get the length of the value in the textarea and update the DOM
  characterCount.textContent = text.value.length;
});