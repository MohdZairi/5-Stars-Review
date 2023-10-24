document.getElementById("submitOrderButton").addEventListener("click", function () {
    const lorryAnimation = document.getElementById("lorryAnimation");
    const message = document.getElementById("message");
    
    this.style.display = "none"; // Hide the button
    lorryAnimation.style.display = "block"; // Show the lorry animation
    
    setTimeout(function () {
        lorryAnimation.style.display = "none"; // Hide the lorry animation
        message.style.display = "block"; // Show the message
    }, 3000); // Replace 3000 with the desired animation duration in milliseconds
});
