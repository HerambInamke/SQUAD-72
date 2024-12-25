const bgToggleBtn = document.getElementById('bg-toggle-btn');

// Theme Colors
const themes = [
    {
        background: '#f5f5f5', // Light mode background
        color: '#333',
        navbarBackground: '#333',
        buttonBackground: '#333',
        buttonColor: '#fff'
    },
    {
        background: 'linear-gradient(to right, #ff0000, #8b0000)', // Red gradient for dark mode
        color: '#f5f5f5',
        navbarBackground: '#555',
        buttonBackground: '#ff6f61',
        buttonColor: '#fff'
    }
];

let currentThemeIndex = 0;

// Toggle Theme
bgToggleBtn.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];

    // Apply Theme
    document.body.style.background = theme.background;
    document.body.style.color = theme.color;

    const navbar = document.querySelector('.navbar');
    navbar.style.background = theme.navbarBackground;

    bgToggleBtn.style.background = theme.buttonBackground;
    bgToggleBtn.style.color = theme.buttonColor;
});
