//when pages loads make a alert that makes a cookie and doesnt show the alert again
$(document).ready(function () {
    swal({ title: "Monthly Update!",
    text: "Monthly Update! So I made an update to the beta site (https://unblockedtech.netlify.app/beta) I added 2 new games! and if you don't know, there is a secret riddle school game! ask someone in your school about it! Well thats all goodbye bozo!",
    imageUrl: "../beta/water.png",
    confirmButtonText: "Alright!",
    imageWidth: 70,
    imageHeight: 100, });
    timer: 10000;
    swal.showLoading()
    
    //change confirm button color
    $('.swal2-confirm').css('background-color', '#00bfff');

    //make show loading stop after 5 seconds
    setTimeout(function () {
        swal.hideLoading()
    }, 5000)
});