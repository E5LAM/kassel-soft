
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
    Username : "eslam01003733553@gmail.com",
    Password : "29593BB1A7E0E15D7C5B17013266EC55FFF1",
    To : 'eslam01003733553@gmail.com',
    From : "eslam01003733553@gmail.com",
    Subject : "KASSEL Website (Job Data)",
    // Body : "this is body"
    Body : bodyJobMessage
  }).then(
    // message => {
    //   if(message == "OK"){
    //     Swal.fire({
    //       title: "Success!",
    //       text: "Data sent Successfully",
    //       icon: "success"
    //     });
    //   }
    // }
    message => alert(message)
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