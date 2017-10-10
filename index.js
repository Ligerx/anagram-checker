$("document").ready(function() {
  var input1 = $("#one");
  var input2 = $("#two");

  $('form').on('submit', function(e) {
    e.preventDefault();

    console.log(isAnagram(input1.val(), input2.val()));
  });
});

function isAnagram(rawString1, rawString2) {
  var string1 = processString(rawString1);
  var string2 = processString(rawString2);

  return string1 === string2;
}

function processString(unsorted) {
  // Note, function does not remove non-space characters
  // This means that characters like punctuation and numbers are not removed

  var processedString = unsorted
                        .toLowerCase() // Make upper case and lower case equivalent
                        .split('')     // Sort the string
                        .sort()
                        .join('')
                        .trim();       // Ignore spaces between words and trailing spaces

  return processedString;
}
