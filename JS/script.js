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


      //  CONTACT US (SEND EMAIL) //

const form = document.querySelector("form");
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

function sendEmail(){
  const bodyMessage = `Full Name: ${fullName.value} <br>
  Email: ${email.value} <br> Phone Number: ${phone.value} <br>
  Message: ${message.value} `;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kasselsoft@kasselsoft.com",
    Password : "BF446770BDF25335CCE4B9CDC25BC9CE79D3",
    To : 'kasselsoft@kasselsoft.com',
    From : "kasselsoft@kasselsoft.com",
    Subject : subject.value,
    Body : bodyMessage
  }).then(
    message => {
      if(message == "OK"){
        Swal.fire({
          title: "Success!",
          text: "Message sent Successfully",
          icon: "success"
        });
      }
    }
  );
}

function checkInputs(){
  const items = querySelectorAll(".item")
  for(const item of  items ){
    if(item.value == ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    item.addEventListener("keyup" , (e) =>{
      if(item.value != ""){
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
      }else{
      item.classList.add("error");
      item.parentElement.classList.add("error");
      }
    })
  }
}

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  sendEmail();
})