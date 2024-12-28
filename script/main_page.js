
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
        