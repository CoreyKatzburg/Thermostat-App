//Home button

function homeBtnPressed(){
   window.location="index.html";
}

//Temp buttons

let temp = 68;

function tempIncrease() {
   
   if(temp < 84) {
   temp = (temp + 1);
   document.getElementById("temp-subitem-2").innerHTML = temp + "&#176;F";
   }

   if(temp > 75) {
      document.getElementById("temp-subitem-2").style.color = "red";
   } else if(temp > 65 && temp < 76) {
      document.getElementById("temp-subitem-2").style.color = "black";
   }

   if(temp === 81) {
      window.alert("Warning\nThe temperature is above the recommended maximum");
   }
}

function tempDecrease() {

   if(temp > 58) {
   temp = (temp - 1);
   document.getElementById("temp-subitem-2").innerHTML = temp + "&#176;F";
   }

   if(temp < 66) {
      document.getElementById("temp-subitem-2").style.color = "blue";
   } else if(temp > 65 && temp < 76) {
      document.getElementById("temp-subitem-2").style.color = "black";
   }

   if (temp === 61) {
      window.alert("Warning\nThe temperature is below the recommended minimum");
   }
}
