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
function toggleDropdown() {
  let dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

function changeLanguage(language) {
  let languageBtn = document.getElementById("languageBtn");
  if (language === "ENG") {
    languageBtn.innerHTML = `<i class="fa-solid fa-globe"></i> ENG <i class="fa-solid fa-caret-down arrow-down"></i>`;
  } else if (language === "ARB") {
    languageBtn.innerHTML = `<i class="fa-solid fa-globe"></i> ARB <i class="fa-solid fa-caret-down arrow-down"></i>`;
  }
  localStorage.setItem("selectedLanguage", language);

  let dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.remove("show");
}

window.onload = function () {
  var languageBtn = document.getElementById("languageBtn");
  var selectedLanguage = localStorage.getItem("selectedLanguage");
  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  }

  document.addEventListener("click", function (event) {
    var dropdownContent = document.getElementById("myDropdown");
    var languageBtn = document.getElementById("languageBtn");

    if (event.target !== dropdownContent && event.target !== languageBtn) {
      dropdownContent.classList.remove("show");
    }
  });
};

const translations = {
  en: {
    home: "home",
    about: "about us",
    services: "services",
    contact: "contact us",
  },
  ar: {
    home: "الرئيسية",
    about: "معلومات عنا",
    services: "خدماتنا",
    contact: "تواصل معنا",
  },
};

const languageSelector = document.querySelector("#select");

languageSelector.addEventListener("change", (event) => {
  selectLanguage(event.target.value);
});

const selectLanguage = (language) => {
  const element = document.querySelectorAll("[i18n]");
  element.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
};

////////// //  CONTACT US (SEND EMAIL) //////////////

const form = document.querySelector("#contact-form");
const fullName = document.getElementById("name");
let email = document.getElementById("email");
let footerEmail = document.getElementById("footer-email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

//  FOOTER

function sendFooterEmail() {
  let bodyFooter = `Email: ${footerEmail.value} `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "eslam01003733553@gmail.com",
    Password: "29593BB1A7E0E15D7C5B17013266EC55FFF1",
    To: "eslam01003733553@gmail.com",
    From: "eslam01003733553@gmail.com",
    Subject: "KASSEL Website (Footer Email)",
    // Body : "and this is body"
    Body: bodyFooter,
  }).then(
    (message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Email sent Successfully",
          icon: "success",
        });
      }
    }
    // message => alert(message)
  );
}

// FOOTER

function checkFooterInputs() {
  let items = document.querySelectorAll(".f-item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    item.addEventListener("keyup", (e) => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

// FOOTER

const footerForm = document.getElementById("footer-form");

footerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkFooterInputs();
  if (!footerEmail.classList.contains("error")) {
    sendFooterEmail();
    // console.log("ok");
    footerForm.reset();
    return false;
  }
});

// CONTACT US

function sendEmail() {
  let bodyMessage = `Full Name: ${fullName.value} <br>
  Email: ${email.value} <br> Phone Number: ${phone.value} <br>
  Message: ${message.value} `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "info@kasselsoft.com",
    Password: "58F4B4F0C70A7FC7E792E14DEF93C4F07D63",
    To: "info@kasselsoft.com",
    From: "info@kasselsoft.com",
    Subject: "KASSEL Website (Contact Us)",
    // Body : "and this is body"
    Body: bodyMessage,
  }).then(
    (message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent Successfully",
          icon: "success",
        });
      }
    }
    // message => alert(message)
  );
}

// CONTACT US

function checkInputs() {
  let items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    item.addEventListener("keyup", (e) => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

// CONTACT US

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  // sendEmail();
  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();
    // console.log("ok");
    form.reset();
    return false;
  }
});

// NAV ICON
function hideSlider() {
  const menuIcon = document.querySelector("#menu-icon");
  menuIcon.style.display = "none";
  const closeIcon = document.querySelector("#close-icon");
  closeIcon.style.display = "flex";

  const navToggle = document.querySelector(".nav-toggle");
  navToggle.style.top = "0%";
}

function showSlider() {
  const menuIcon = document.querySelector("#menu-icon");
  menuIcon.style.display = "flex";
  const closeIcon = document.querySelector("#close-icon");
  closeIcon.style.display = "none";
  const navToggle = document.querySelector(".nav-toggle");
  navToggle.style.top = "-70%";
}
