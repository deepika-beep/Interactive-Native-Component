let btns = document.querySelectorAll(".btn-container button");
let card2 = document.querySelector(".card-2");
let card1 = document.querySelector(".card");
let span = document.querySelector("span");
let submit = document.querySelector('.submit-btn');
Array.from(btns).forEach(btn =>{
  btn.addEventListener('click', e =>{
     const rating = e.target.textContent;
     
     submit.addEventListener('click', e =>{
card2.classList.remove('hide');
card1.classList.add('hide');
span.textContent = rating;
     })
     
  })
})