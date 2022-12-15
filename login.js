function loginPressed() {

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

   if (username === "dev" || username === "user1" && password === "correct_password!" || username === "user2" && password === "correct_password!" || username === "guest" && password === "correct_password!") {
        alert("Log in successful.");
        window.location ="second.html";
   } else {
        alert("Username or password is invalid, please try again.");
   }

}

function logoutPressed() {
   window.location = "main.html";
}