$("document").ready(function() {
  // console.log("Testing index.js");

  var input1 = $("#one");
  var input2 = $("#two");

  // console.log(input1);
  // console.log(input2);

  $('form').on('submit', function(e) {
    e.preventDefault();

    // console.log("form submitted");
    // console.log("Input1: " + input1.val());
    // console.log("Input2: " + input2.val());

    console.log(isAnagram(input1.val(), input2.val()));
  });
});

function isAnagram(rawString1, rawString2) {
  var string1 = processString(rawString1);
  var string2 = processString(rawString2);

  console.log("isAnagram");
  console.log("[" + string1 + "]");
  console.log("[" + string2 + "]");

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
