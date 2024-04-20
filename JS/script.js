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


// const cards = document.querySelectorAll('.card');

// function hoverRotate(e) {
//   e.target.classList.add('rotated');
// }

// function hoverOutRotate(e) {
//   e.target.classList.remove('rotated');
// }

// cards.forEach(card => {
//   card.addEventListener('mouseenter', hoverRotate);
//   card.addEventListener('mouseleave', hoverOutRotate);
// });

    //////// TRANSLATE ///////////////
    const translations = {
      en: {
        home: "home",
        about : "about us",
        services: "services",
        contact: "contact us",
    
      },
      ar: {
        home: "الرئيسية",
        about : "معلومات عنا",
        services: "خدماتنا",
        contact: "تواصل معنا",
    
      },
    }
    
    const languageSelector = document.querySelector('#select') 
    
    languageSelector.addEventListener('change' , (event) =>{
      selectLanguage(event.target.value);
    })
    
    const selectLanguage = (language) => {
      const element = document.querySelectorAll("[i18n]");
      element.forEach((element) =>{
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationKey];
      })
    }

  
     ////////// //  CONTACT US (SEND EMAIL) //////////////


let form = document.getElementById("contact-form");
const fullName = document.getElementById("name");
let email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const address = document.getElementById("address");
const jobTitle = document.getElementById("job-title");
const cv = document.getElementById("cv");
const message = document.getElementById("message");


        //  FOOTER

function sendFooterEmail(){
  let bodyMessage = `Email: ${email.value} `;

  Email.send({
    SecureToken : "b4f57967-11c5-4cf6-825a-09d39b72db2b",
    To : 'kasselsoft@kasselsoft.com',
    From : "kasselsoft@kasselsoft.com",
    Subject : email.value,
    Body : bodyMessage
  }).then(
    message => {
      if(message == "OK"){
        Swal.fire({
          title: "Success!",
          text: "Email sent Successfully",
          icon: "success"
        });
      }
    }
  );
}


      // FOOTER

function checkFooterInputs(){
  let items = document.querySelectorAll('.f-item')

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




        // FOOTER

const footerForm = document.getElementById('footer-form');

footerForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  checkFooterInputs();
  if(!email.classList.contains("error") 
    ){
      sendFooterEmail();
    // console.log("ok");
    footerForm.reset();
    return false;
  }
})


      // CONTACT US

function sendEmail(){
  let bodyMessage = `Full Name: ${fullName.value} <br>
  Email: ${email.value} <br> Phone Number: ${phone.value} <br>
  Message: ${message.value} `;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "eslam01003733553@gmail.com",
    Password : "6BA0F43439DF0D939E13504146C3322FBD08",
    To : 'eslam01003733553@gmail.com',
    From : "eslam01003733553@gmail.com",
    Subject : "This is the subject",
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


      // CONTACT US

function checkInputs(){
  let items = document.querySelectorAll('.item')

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


      // CONTACT US

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  checkInputs();

  if(!fullName.classList.contains("error") && !email.classList.contains("error") &&
  !phone.classList.contains("error") && !subject.classList.contains("error")&&
  !message.classList.contains("error")  ){
    sendEmail();
    // console.log("ok");
    form.reset();
    return false;
  }
})


        //  JOB

function sendJobData(){
  let bodyMessage = `Full Name: ${fullName.value} <br>
  Email: ${email.value} <br> Phone Number: ${phone.value} <br>
  Address: ${address.value} <br> Job Title: ${jobTitle.value} <br>
  CV: ${cv.value} `;

  Email.send({
    SecureToken : "b4f57967-11c5-4cf6-825a-09d39b72db2b",
    To : 'kasselsoft@kasselsoft.com',
    From : "kasselsoft@kasselsoft.com",
    Subject : fullName.value,
    Body : bodyMessage
  }).then(
    message => {
      if(message == "OK"){
        Swal.fire({
          title: "Success!",
          text: "Data sent Successfully",
          icon: "success"
        });
      }
    }
  );
}


function checkJobInputs(){
  let items = document.querySelectorAll('.item')

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


        // JOB

const jobForm = document.getElementById('job-form');


jobForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  checkJobInputs();
  if(!fullName.classList.contains("error") && !email.classList.contains("error") &&
  !phone.classList.contains("error") && !address.classList.contains("error")&&
  !jobTitle.classList.contains("error")  ){
    // sendJobData();
    console.log("ok");
    jobForm.reset();
    return false;
  }
})




      

      // NAV ICON
function hideSlider(){
  const menuIcon = document.querySelector("#menu-icon");
  menuIcon.style.display = 'none';
  const closeIcon = document.querySelector("#close-icon");
  closeIcon.style.display = 'flex';

  const navToggle = document.querySelector(".nav-toggle");
  navToggle.style.top = '0%';
}

function showSlider(){
  const menuIcon = document.querySelector("#menu-icon");
  menuIcon.style.display = 'flex';
  const closeIcon = document.querySelector("#close-icon");
  closeIcon.style.display = 'none';
  const navToggle = document.querySelector(".nav-toggle");
  navToggle.style.top = '-70%';
}


