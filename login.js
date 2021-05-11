let array=[];
const btn = document.getElementById("login");
const btn2 = document.getElementById("sign");
const user = document.getElementById("user");
const pass = document.getElementById("password");

var flag=0;
var p=0;

fetch("https://obscure-ocean-75269.herokuapp.com/")
  .then((data) => {
    return data.text();
  })
  .then((result) => {
     array = JSON.parse(result);
    });


    btn.addEventListener("click", (e) => {

        
      for (let i = 0; i < array.length; i++) {
         if(array[i].username===user.value)
         {flag=1;
            break;}
         else
         flag=0;
      }
      for (let i = 0; i < array.length; i++) {
        if(array[i].password===pass.value)
        {p=1;
            break;}
        else
        p=0;
     }

     if(flag==1 && p==1)
     alert("You have been succesfully logged in");

     else
     {alert("Error in Logging in Try Again");
     alert("If you are a new user, Please register yourself first");}

    });

    togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
    

    particlesJS.load("particles-js", "particles.json");