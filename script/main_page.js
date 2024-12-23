// Get the checkbox input and body element
const themeToggleCheckbox = document.getElementById('theme-toggle');
const body = document.body;

// Check if dark mode is previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggleCheckbox.checked = true;
}

// Add an event listener to the checkbox to toggle dark mode
themeToggleCheckbox.addEventListener('change', () => {
    if (themeToggleCheckbox.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
