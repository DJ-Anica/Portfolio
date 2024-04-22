document.addEventListener("DOMContentLoaded", function(event) {
    // Get the header element
    var header = document.getElementById("header");

    // Add a class to show the header with a fade-in effect
    header.classList.add("fade-in-header");

    // Wait for a very short moment, then remove the opacity to start the animation
    setTimeout(function() {
        header.style.opacity = 1;
    }, 100);

    // Get the flexbox container element
    var flexboxContainer = document.querySelector(".flexbox-container");

    // Add a class to show the flexbox container with a fade-in effect
    flexboxContainer.classList.add("fade-in");
});
