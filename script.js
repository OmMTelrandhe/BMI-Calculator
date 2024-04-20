function redirectToIndex() {
    if(document.getElementById("email").value == "ayot@example.com" && document.getElementById("pass").value == "123456"){
    window.location.href = '/HOME/index.html';
    }
}


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// function auth(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("pass").value;

//     if(email=="ayot@example.com" && password=="123456"){
//         alert("Please Enter Email");
//         window.location.assign = "/HOME/iho.html";
//     }
//     else{
//         alert("Please Enter Valid input");
//         return;
//     }
    
// }