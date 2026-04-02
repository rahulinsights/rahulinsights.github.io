/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* FADE-IN ON SCROLL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});

/* BUTTON RIPPLE EFFECT */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    let x = e.clientX - this.offsetLeft;
    let y = e.clientY - this.offsetTop;

    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

/* TYPING EFFECT */
const text = "Aspiring Data Analyst | Turning Data into Insights";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".hero p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}

document.querySelector(".hero p").innerHTML = "";
typing();