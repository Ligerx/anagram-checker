$("document").ready(function() {
  // Get the text box inputs
  var input1 = $("#one");
  var input2 = $("#two");

  // Get the text element that will display the result
  var output = $("#output");

  // Get the text element to restate the strings entered
  // This way users have feedback that their input is correct
  var restateInput = $("#restate-input");


  // When the form is submitted, prevent the default submission,
  // check if the inputs are anagrams, and update the DOM
  $('form').on('submit', function(e) {
    e.preventDefault();

    var text1 = input1.val();
    var text2 = input2.val();
    var anagram = isAnagram(text1, text2);

    if(text1 === '' && text2 === '') {
      // Don't change anything when no text has been entered
      return;
    }
    else {
      if(anagram) {
        output.text("Yup, that's an anagram alright");
      }
      else {
        output.text("Nope, that ain't an anagram");
      }

      // Reprint the inputted text to give feedback to the user
      restateInput.text("[" + text1 + "] and [" + text2 + "]");
    }
  });
});

function isAnagram(rawString1, rawString2) {
  var string1 = processString(rawString1);
  var string2 = processString(rawString2);

  return string1 === string2;
}

function processString(unsorted) {
  // Note: function does not remove non-space characters
  // This means that characters like punctuation and numbers are not removed
  // A regex function could be added if it becomes a necessary requirement

  var processedString = unsorted
                        .toLowerCase() // Make upper case and lower case equivalent
                        .split('')     // Sort the string
                        .sort()
                        .join('')
                        .trim();       // Ignore spaces between words and trailing spaces

                        return processedString;
}
