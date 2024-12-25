
  const switchInput = document.querySelector('.ui-switch input'); // Get the switch input
  const body = document.body; // Get the body element

  switchInput.addEventListener('change', () => {
    if (switchInput.checked) {
      // When switch is ON (checked), change to black and red gradient background
      body.style.background = 'linear-gradient(to right, black, red)';
    } else {
      // When switch is OFF (unchecked), reset to default background
      body.style.background = ''; // Reset background to default
    }
  });

    // Select the button using its class name
    const button = document.querySelector('.ui-btn');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
      // Navigate to the desired page
      window.location.href = '2nd_page.html'; // Replace with the desired URL
    });
