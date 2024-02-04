const sliderEl = document.getElementById("feedback-slider");
const emojiDisplayEl = document.querySelector(".emoji-display");
// Function to update the fill color for Webkit browsers
function updateFill() {
  const percentage = ((sliderEl.value - sliderEl.min) / (sliderEl.max - sliderEl.min)) * 100;
  // Set the background gradient for the slider
  sliderEl.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
}

// Event listener to update the fill as the slider moves
sliderEl.addEventListener('input', updateFill);

// Initial call to set the fill on page load
updateFill();

sliderEl.addEventListener("input", () => {
  updateEmoji(sliderEl.value);
});

function updateEmoji(value) {
  let emoji = '';
  switch (value) {
    case '1':
      emoji = '😞';
      break;
    case '2':
      emoji = '😐';
      break;
    case '3':
      emoji = '😊';
      break;
    default:
      emoji = '😐';
  }
  emojiDisplayEl.textContent = emoji;
}

// Call updateEmoji on page load to set the initial emoji based on the slider's default value
updateEmoji(sliderEl.value);

// Existing code...
