const container = document.querySelector('.container');
const textContainer = document.querySelector('.text-container');
const typingText = document.getElementById('typing-text');
const textToType = 'Welcome to the Future!';
let charIndex = 0;

// Function to type text
function typeText() {
    if (charIndex < textToType.length) {
        typingText.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Adjust typing speed here
    } else {
        container.style.transform = 'scaleY(1)'; // Expand the box
        textContainer.style.opacity = '1'; // Display text container
    }
}

// Start the animation when the page loads
window.onload = () => {
    setTimeout(typeText, 1500); // Delay before typing starts
};
