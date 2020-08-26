;(function () {

	// Get the #table-of-contents element
	var tableOfContents = document.querySelector('#table-of-contents');
	
	// Get the heading elements
  var headings = document.querySelectorAll('h2, h3, h4, h5, h6');
	
	/**
   * Create an ID from the heading text
   * @param   {Node}  heading  The current heading
   * @returns {String}         The ID
   */
	function createID(heading) {
    heading.id = heading.textContent.replace(/\W+/g, '-').toLowerCase();
  }
	
	/**
   * Create a list item/anchor from heading
   * @param   {Node}  heading The current heading
   * @returns {String}        The list item/anchor
   */
	function createLink(heading) {
		return `<li>
			<a href="#${heading.id}">${heading.innerText}</a>
		</li>`;
  }
  
  /**
   * Display the Table of Contents
   */
  function generateTOC() {
    // Only generate markup if heading elements exist
    if (headings.length > 0) {
      // Create a list of anchor links and render to the DOM
      tableOfContents.innerHTML = `<ul>
        ${Array.prototype.slice.call(headings).map(function(heading) {
          // Check for missing IDs
          if (!heading.id) {
            createID(heading);
          }
    
          return createLink(heading);
        }).join('')}
      </ul>`;
    }
  }
  
  // Display the Table of Contents
  generateTOC();
  
})();