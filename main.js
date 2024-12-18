const intro = document.querySelector('.intro')
const waitText = document.querySelector(".wait-text");
const introText = document.querySelector(".intro-text");
setTimeout(() => {
  introText.style.display = "none";
  waitText.style.display = "block";
  setTimeout(() => {
    intro.style.display="none";
    waitText.style.display = "none";
  }, 2000);
}, 3000);
