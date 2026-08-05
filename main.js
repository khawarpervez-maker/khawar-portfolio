// Simple theme toggle and small interactive bits
const themeToggle = document.getElementById('themeToggle');
if(themeToggle){
  themeToggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('light');
    if(document.documentElement.classList.contains('light')){
      themeToggle.textContent = '☼';
    } else themeToggle.textContent = '☾';
  });
}

// Placeholder for contact form submission
const form = document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit', ()=>{
    alert('Thank you! Message functionality is not wired in this demo.');
  });
}