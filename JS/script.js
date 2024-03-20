var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

// document.addEventListener("mousemove", function(e) {
//     cursor.style.cssText = cursor2.style.cssText =
//     "left: " + e.clientX + "px; top: " + e.clientY + "px;";
// });

            // CARD //

// const card = document.querySelector('.card');

// function clickRotate() {
//   card.classList.toggle('rotated');
// }
// card.addEventListener('click', clickRotate);


// const cards = document.querySelectorAll('.card');

// function clickRotate(e) {
//   e.target.classList.toggle('rotated');
// }

// cards.forEach(card => {
//   card.addEventListener('click', clickRotate);
// });


const cards = document.querySelectorAll('.card');

function hoverRotate(e) {
  e.target.classList.add('rotated');
}

function hoverOutRotate(e) {
  e.target.classList.remove('rotated');
}

cards.forEach(card => {
  card.addEventListener('mouseenter', hoverRotate);
  card.addEventListener('mouseleave', hoverOutRotate);
});
