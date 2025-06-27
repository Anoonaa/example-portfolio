// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("loadBtn");
  const clearButton = document.getElementById("clearBtn");
  const output = document.getElementById("output");

  // Check if elements exist
  if (!button || !clearButton || !output) {
    console.error("Error: One or more elements (loadBtn, clearBtn, output) not found.");
    return;
  }

  // Event listener for show greeting
  button.addEventListener("click", () => {
    const message = generateGreeting("Visitor");
    displayMessage(message);
  });

  // Event listener for clear message
  clearButton.addEventListener("click", () => {
    resetOutput();
  });
});

// Generate time-based greeting
function generateGreeting(name) {
  const hour = new Date().getHours();
  let timeGreeting;
  if (hour < 12) timeGreeting = "Good morning";
  else if (hour < 18) timeGreeting = "Good afternoon";
  else timeGreeting = "Good evening";
  return `${timeGreeting}, ${name}! Welcome to my portfolio.`;
}

// Display message with styles
function displayMessage(message) {
  const output = document.getElementById("output");
  if (!output) {
    console.error("Error: Element with id 'output' not found.");
    return;
  }
  output.innerText = message;
  output.style.marginTop = "1.5rem";
  output.style.fontWeight = "600";
  output.style.color = "#0071e3";
  output.classList.add("active");
}

// Reset content and styles
function resetOutput() {
  const output = document.getElementById("output");
  if (!output) {
    console.error("Error: Element with id 'output' not found.");
    return;
  }
  output.innerText = "";
  output.removeAttribute("style");
  output.classList.remove("active");
}
