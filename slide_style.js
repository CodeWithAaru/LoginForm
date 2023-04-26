
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");

let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


function Authenticate(){
    let name = document.getElementById("Aryan");
    let name1 = name.value;
    let pass = document.getElementById("aryanpass");
    let pass1 = pass.value

    let original_email = localStorage.getItem('username');
    let original_password = localStorage.getItem('password')

    

    if(name1==original_email && pass1 == original_password)
    {
    
    swal.fire({
        title: "Congratulation "+ name1,
        text: "Log in succesfull",
        icon: "success",
        button: "Login"
      }); 
    }
    else
    {
        swal.fire({
            title: "Wrong Id or Password ",
            text: "hint : "+ original_email,
            icon: "warning",
            button: "Login",
          });  
    }

}

function Data_submit(){

    let name = document.getElementById("email");
    let name1 = name.value;
    let pass = document.getElementById("pass");
    let pass1 = pass.value;
    if(name1 == '' && pass1 == '')
    {
        swal.fire({
            title: "please Enter email and password :)",
            text: "Email and Passworld Filed Must be Filled",
            icon: "warning",
            button: "Login Other"
          }); 
    }
    else
    {

        localStorage.setItem("username", name1);
        localStorage.setItem("password", pass1);
        

    swal.fire({
        title: "Congratulations :)",
        text: "Your Email is :" + name1 +"\n Your Pass is :"+ pass1,
        icon: "success",
        button: "Login Other"
      });  
    } 

}