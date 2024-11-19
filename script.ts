// Function to toggle theme text and icon
function toggleTheme(): void {
    // Get references to the text and image
    const themeText = document.querySelector('.theme-toggle') as HTMLDivElement | null;
    const themeIcon = document.getElementById('theme-icon') as HTMLImageElement | null;

    // Ensure elements are not null before accessing properties
    if (themeText && themeIcon) {
        // Check the current theme and toggle it
        if (themeText.textContent === 'Light') {
            themeText.textContent = 'Dark'; // Change text to "Dark"
            themeIcon.src = 'images/darkbulb-solid.svg'; // Change image to dark bulb
        } else {
            themeText.textContent = 'Light'; // Change text to "Light"
            themeIcon.src = 'images/lightbulb-regular.svg'; // Change image back to light bulb
        }
    } else {
        console.error('Theme toggle elements not found');
    }
}


