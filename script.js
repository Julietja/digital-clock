  	setInterval(showDate, 1000)
    function showDate() {
const date = new Date();
/*let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds(); 
not in use here
but can be used*/
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 document.getElementById("daty").textContent = days[date.getDay()] + " | " + " " + date.getDate() +"/"
 + [date.getMonth()+1] + "/" + date.getFullYear();
  

document.getElementById('demo').textContent = date.toLocaleTimeString() //hour + ":" + min + ":" + sec;
  }
  
    // you can just set the innerHTML to = date.toLocaleTimeString(); you wont need to declare the h s and m, just declare only today date