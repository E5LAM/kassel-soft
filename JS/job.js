
const jobForm = document.getElementById('job-form');
const jobName = document.getElementById('job-name');
const jobEmail = document.getElementById('job-email');
const jobPhone = document.getElementById('job-phone');
const jobAddress = document.getElementById('job-address');
const jobTitle = document.getElementById('job-title');
const cv = document.getElementById('cv');

        //  JOB

function sendJobData(){
  let bodyJobMessage = `Full Name: ${jobName.value} <br>
  Email: ${jobEmail.value} <br> Phone Number: ${jobPhone.value} <br>
  Address: ${jobAddress.value} <br> Job Title: ${jobTitle.value} <br>
  CV: ${cv.value}`;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jobs@kasselsoft.com",
    Password : "7003B962AD36E45D99D399F50F26F7B482EF",
    To : 'jobs@kasselsoft.com',
    From : "jobs@kasselsoft.com",
    Subject : "KASSEL Website (Job Data)",
    // Body : "this is body"
    Body : bodyJobMessage
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
    // message => alert(message)
  );
}


function checkJobInputs(){
  let items = document.querySelectorAll('.job-item')

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

jobForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  checkJobInputs();
//   sendJobData();

//   edite
  if(!jobName.classList.contains("error") && !jobEmail.classList.contains("error") &&
  !jobPhone.classList.contains("error") && !jobAddress.classList.contains("error")&&
  !jobTitle.classList.contains("error") && !cv.classList.contains("error") ){
    sendJobData();
    // console.log("ok");
    jobForm.reset();
    return false;
  }
})


const openLinks = document.querySelectorAll('.open-link');
const closeBtns = document.querySelectorAll('.close-btn');
const boxes = document.querySelectorAll('.overview-box');

function openBox(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة
  const box = event.target.closest('.box').querySelector('.overview-box');

  box.style.opacity = '1';
  box.style.display = 'block';
  box.style.transition = 'all 1s ease-in-out';
  box.style.top = '5%' ;// إظهار الصندوق
  box.style.left = '5%' ;// إظهار الصندوق
}

function closeBox(event) {
  const box = event.target.closest('.overview-box');
   // إظهار الصندوق
  box.style.opacity = '0'; 
  box.style.display = "none";
  box.style.transition = 'all 1s ease-in-out';
  box.style.top = '50%'; // إظهار الصندوق
  box.style.left = '45%';
}

// openLinks.forEach(link => link.addEventListener('click', openBox));
// closeBtns.forEach(btn => btn.addEventListener('click', closeBox));
