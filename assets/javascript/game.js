
  
  

  var score = 0;
  var wins = 0;
  var losses = 0;
  var numberOptions = [12, 5, 3, 7];
  var randomPicValue1 = Math.floor(Math.random() * 13);
  var randomPicValue2 = Math.floor(Math.random() * 13);
  var randomPicValue3 = Math.floor(Math.random() * 13);
  var randomPicValue4 = Math.floor(Math.random() * 13);
  var targetNumber = Math.floor(Math.random() * 120) + 50;
  var numberToGuess = $("#number-to-guess").text(targetNumber);

  // Putting html in the index, I put it here so the code will show up when the page load
  $("#wins").html("<h2>Wins: " + wins + "</h2>");
  $("#losses").html("<h2>Losses: " + losses + "</h2>");
  $("#score").text(score);


  // Now for the hard part. Creating multiple crystals each with their own unique number value.
  // We create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Creating a specific ID for each image 
    imageCrystal.attr("id", "imgID" + numberOptions[i]);


    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // Function to reset the game
  function reset() {

    // Redefine targetNumber to generate a new random number 
    targetNumber = Math.floor(Math.random() * 120) + 50;


    // Display random number in html
    $("#number-to-guess").text(targetNumber);


    // Assign randomPicValues variables to a random number between 1 and 12. 
    randomPicValue1 = Math.floor(Math.random() * 12) + 1;
    randomPicValue2 = Math.floor(Math.random() * 12) + 1;
    randomPicValue3 = Math.floor(Math.random() * 12) + 1;
    randomPicValue4 = Math.floor(Math.random() * 12) + 1;

    // Give the individual images the random values defined above
    $("#imgID12").attr("data-crystalvalue", randomPicValue1);
    $("#imgID5").attr("data-crystalvalue", randomPicValue2);
    $("#imgID3").attr("data-crystalvalue", randomPicValue3);
    $("#imgID7").attr("data-crystalvalue", randomPicValue4);

    // Set score variable back to zero
    score = 0;
  }
  

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the score
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);


    // We then add the crystalValue to the user's "score" which is a global variable.
    // Every click, from every crystal adds to the global score.
    score += crystalValue;
    console.log(score);
    $("#score").text(score);


  // Putting html in the index, I put it here so the code will update the wins, losses, and score.
    $("#wins").html("<h2>Wins: " + wins + "</h2>");
    $("#losses").html("<h2>Losses: " + losses + "</h2>");
    $("#score").text(score);


    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // Run this if statement if the user win the game
    if (score === targetNumber) {
      wins++;
      score = 0;
      alert("You win!");
      reset();
    }
  
    // Run this else if statement if the user lose the game
    else if (score >= targetNumber) {
      losses++;
      score = 0;
      alert("You lose!!");
      reset();
    }

  });
