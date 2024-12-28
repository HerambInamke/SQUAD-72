
// Get the switch input
const switchInput = document.querySelector('.ui-switch input');

// Check for saved user preference in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    switchInput.checked = currentTheme === 'dark-mode'; // Set switch state
}

// Add event listener to the switch
switchInput.addEventListener('change', () => {
    if (switchInput.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode'); // Save preference
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode'); // Save preference
    }
});
let angle = 1; // Initialize angle for the wave pattern
const speed = 0.03; // Speed of the movement
const amplitude = 600; // Amplitude of the wave (height of the wave)
const card2 = document.querySelector('.card2'); // Get the card2 element
const astronaut = document.querySelector('.astronaut'); // Get the astronaut element

// Function to move the astronaut in a wave pattern
function moveAstronaut() {
    const card2Rect = card2.getBoundingClientRect();
    const maxX = card2Rect.width - astronaut.offsetWidth; // Maximum x position
    const maxY = card2Rect.height - astronaut.offsetHeight; // Maximum y position

    // Calculate new x and y positions using sine and cosine for wave movement
    const x = (angle * 100) % maxX; // Horizontal movement
    const y = (Math.sin(angle) * amplitude) + (maxY / 2); // Vertical wave movement

    // Set the new position of the astronaut
    astronaut.style.position = 'absolute'; // Ensure it's positioned absolutely
    astronaut.style.left = `${x}px`;
    astronaut.style.top = `${y}px`;

    angle += speed; // Increment the angle for the next frame
}

// Move the astronaut every 50 milliseconds for smooth animation
setInterval(moveAstronaut, 50);  
