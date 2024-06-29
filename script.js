// Get all elements with class "app-icon"
const appIcons = document.querySelectorAll('.app-icon');

// Add an event listener to each element
appIcons.forEach(icon => {
  let toggle = true;
  icon.addEventListener('click', () => {
    // Get all elements with class "googleApps"
    const googleApps = document.querySelectorAll('.googleApps');

    // Toggle the ID
    if (toggle) {
      googleApps.forEach(app => {
        app.id = 'googleApp';
        app.style.display = ''; // Show the element
      });
    } else {
      googleApps.forEach(app => {
        app.id = '';
        app.style.display = 'none'; // Hide the element
      });
    }
    toggle =!toggle;
  });
});

// Add an event listener to the document to hide .googleApps when clicked anywhere
document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('app-icon')) {
    const googleApps = document.querySelectorAll('.googleApps');
    googleApps.forEach(app => {
      app.style.display = 'none';
    });
  }
});

//--------------------------------------------------------------------------------------//

// Get all elements with class "app-icon"
const proIcons = document.querySelectorAll('.profile-icon');

// Add an event listener to each element
proIcons.forEach(icon => {
  let toggle = true;
  icon.addEventListener('click', () => {
    // Get all elements with class "googleApps"
    const profileCard = document.querySelectorAll('.profile-card');

    // Toggle the ID
    if (toggle) {
      profileCard.forEach(card => {
        card.id = 'googleApp';
        card.style.display = ''; // Show the element
      });
    } else {
      profileCard.forEach(card => {
        card.id = '';
        card.style.display = 'none'; // Hide the element
      });
    }
    toggle = !toggle;
  });
});

// Add an event listener to the document to hide .profile-card when clicked anywhere
document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('profile-icon')) {
    const profileCard = document.querySelectorAll('.profile-card');
    profileCard.forEach(card => {
      card.style.display = 'none';
    });
  }
});