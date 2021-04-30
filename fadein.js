const sections = document.querySelectorAll('.fadein');

observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {
  if(entry.intersectionRatio > 0) {
    entry.target.style.animation = `fadein1 2s ease-out`;
  }
  else {
    entry.target.style.animation = 'none';
  }
})

});

sections.forEach(section => {
  observer.observe(section);
})

const sections2 = document.querySelectorAll('.fadein2');

observer2 = new IntersectionObserver((entries) => {

entries.forEach(entry => {
  if(entry.intersectionRatio > 0) {
    entry.target.style.animation = `fadein1 4s ease-out`;
  }
  else {
    entry.target.style.animation = 'none';
  }
})

});

sections2.forEach(section2 => {
  observer2.observe(section2);
})

const sections3 = document.querySelectorAll('.fadein3');

observer3 = new IntersectionObserver((entries) => {

entries.forEach(entry => {
  if(entry.intersectionRatio > 0) {
    entry.target.style.animation = `fadein1 5s ease-out`;
  }
  else {
    entry.target.style.animation = 'none';
  }
})

});

sections3.forEach(section3 => {
  observer3.observe(section3);
})

const sections4 = document.querySelectorAll('.fadein4');

observer4 = new IntersectionObserver((entries) => {

entries.forEach(entry => {
  if(entry.intersectionRatio > 0) {
    entry.target.style.animation = `fadein1 6s ease-out`;
  }
  else {
    entry.target.style.animation = 'none';
  }
})

});

sections4.forEach(section4 => {
  observer4.observe(section4);
})
