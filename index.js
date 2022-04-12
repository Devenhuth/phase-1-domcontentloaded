// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const p = document.querySelector('#text');
    console.log(p)
    p.innerHTML = "This is really cool!"
  });