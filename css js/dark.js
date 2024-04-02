const btn = document.getElementById('theme-toggle-btn');
const body = document.body;

btn.addEventListener('click', function() {
 
  body.classList.toggle('light');
  body.classList.toggle('dark');
});

// Check system preference for dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkMode.matches) {
  
  body.classList.add('light');
} else {
  body.classList.add('dark');
}
