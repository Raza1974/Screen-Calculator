function updateTime() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    document.getElementById('currentTime').innerText = currentTime;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  updateTime();
  
document.addEventListener('DOMContentLoaded', function () {
    let displayValue = ''; // Stores the current display value

    // Function to append characters to the display
    window.appendCharacter = function (character) {
        displayValue += character;
        document.getElementById('display').innerText = displayValue;
    };

    // Function to clear the display
    window.clearDisplay = function () {
        displayValue = '';
        document.getElementById('display').innerText = '0';
    };

    // Function to calculate the result
    window.calculateResult = function () {
        try {
            displayValue = eval(displayValue); // Evaluate the expression
            document.getElementById('display').innerText = displayValue;
        } catch (error) {
            document.getElementById('display').innerText = 'Error';
        }
    };
});
