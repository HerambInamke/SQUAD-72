
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

