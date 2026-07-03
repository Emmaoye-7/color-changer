// =============================================
// INTERACTIVE COLOR CHANGER - JavaScript
// =============================================

// Wait for the DOM to fully load before running any JS
document.addEventListener('DOMContentLoaded', function () {

  // ---- SELECT ELEMENTS FROM THE DOM ----
  var colorBox = document.getElementById('color-box');
  var changeBtn = document.getElementById('change-color-btn');
  var colorLabel = document.getElementById('color-label');
  var colorHistory = document.getElementById('color-history');

  // ---- TRACK HISTORY (max 8 colors) ----
  var history = [];

  // =============================================
  // FUNCTION: Generate a Random Hex Color
  // Returns a string like "#A3F2B1"
  // =============================================
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    // Loop 6 times to build a 6-character hex code
    for (var i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * 16);
      color += letters[randomIndex];
    }

    return color; // e.g. "#4A9F2C"
  }

  // =============================================
  // FUNCTION: Add Color to History Row
  // Creates a small circle swatch of the color
  // =============================================
  function addToHistory(color) {
    // Keep only the last 8 colors
    if (history.length >= 8) {
      history.shift(); // remove oldest
      colorHistory.removeChild(colorHistory.firstChild); // remove oldest swatch
    }

    history.push(color);

    // Create a circle swatch element
    var swatch = document.createElement('div');
    swatch.classList.add('history-swatch');
    swatch.style.backgroundColor = color;
    swatch.title = color; // tooltip on hover

    // Clicking a swatch brings back that color
    swatch.addEventListener('click', function () {
      colorBox.style.backgroundColor = color;
      colorLabel.textContent = color;
    });

    colorHistory.appendChild(swatch);
  }

  // =============================================
  // EVENT LISTENER: Button Click
  // Changes the color box to a random color
  // =============================================
  changeBtn.addEventListener('click', function () {
    var newColor = getRandomColor();

    // Apply new background color to the box
    colorBox.style.backgroundColor = newColor;

    // Update the color code label inside the box
    colorLabel.textContent = newColor;

    // Save to history row
    addToHistory(newColor);
  });

  // =============================================
  // BONUS: Add the default starting color
  // to history on page load
  // =============================================
  addToHistory('#3498db');

});
