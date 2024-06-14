var sidenav = document.querySelector('.side-navbar');

function showNavbar() {
  sidenav.style.display = 'block'; // Ensure the sidebar is displayed
  setTimeout(() => {
    sidenav.classList.add('active'); // Add the class to slide it in
  }, 10); // Slight delay to allow display property to take effect
}

function closeNavbar() {
  sidenav.classList.remove('active'); // Remove the class to slide it out
  sidenav.addEventListener('transitionend', () => {
    if (!sidenav.classList.contains('active')) {
      sidenav.style.display = 'none'; // Hide the sidebar after transition ends
    }
  }, { once: true });
}