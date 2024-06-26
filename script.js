let string = "";
let buttons = document.querySelectorAll(".btn");
let previousString = ""; // Store the previous string value

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string, playClickSound);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "x²") {
      string = eval(string * string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      // Store the current string value before deletion
      previousString = string;
      // Remove the last character from the string
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
    playClickSound();
  });
});

// Add an event listener for undoing the deletion
document.querySelector("#undo").addEventListener("click", () => {
  string = previousString;
  document.querySelector("#display").value = string;
  // Play button click sound
  playClickSound();
});

function playClickSound(callback) {
  const clickSound = new Audio("click-sound.Wav");
  clickSound.onended = callback; // Execute the callback function after sound playback ends
  clickSound.play();
}
