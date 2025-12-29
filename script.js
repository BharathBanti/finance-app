// Mobile Menu
const hamBurger = document.querySelector("#ham-burger");
const menu = document.querySelector("#menu");
const hLink = document.querySelectorAll(".hLink");
const faSolid = document.querySelector(".fa-solid");

hamBurger.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-bars");
  faSolid.classList.toggle("fa-xmark");
});

// ✅ CLOSE MENU WHEN A LINK IS CLICKED
hLink.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    faSolid.classList.add("fa-bars");
    faSolid.classList.remove("fa-xmark");
  });
});

// Testimonials
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

function showReview(){
  for(let userPic of userPics){
    userPic.classList.remove('active-pic');
  }
  for(let userText of userTexts){
    userText.classList.remove('active-text');
  }

  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add('active-pic');
  userTexts[i].classList.add('active-text');
}

// Pricing Section
const toggleBtn = document.getElementById('toggleBtn');
const card_1_front = document.querySelector('#card_1_front');
const card_1_back = document.querySelector('#card_1_back');

const card_2_front = document.querySelector('#card_2_front');
const card_2_back = document.querySelector('#card_2_back');

const card_3_front = document.querySelector('#card_3_front');
const card_3_back = document.querySelector('#card_3_back');

toggleBtn.addEventListener('change', () =>{
  card_1_front.classList.toggle('-rotate-y-180');
  card_1_back.classList.toggle('rotate-y-180');

  card_2_front.classList.toggle('-rotate-y-180');
  card_2_back.classList.toggle('rotate-y-180');

  card_3_front.classList.toggle('-rotate-y-180');
  card_3_back.classList.toggle('rotate-y-180');
})