let counter = 0;
document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();
    console.log("DOM fully loaded and parsed");
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function() {
    counter++;
    document.getElementById("counter").innerHTML = ""+counter;   
    });
});