//when pages loads make a alert that makes a cookie and doesnt show the alert again
$(document).ready(function () {
    swal({ title: "Disclaimer",
    text: "This is a beta version of the website, it is not finished and may contain bugs. If you find any bugs please report them to the developer. Thank you for your patience and understanding. -The Developer",
    imageUrl: "../beta/water.png",
    confirmButtonText: "Alright!",
    imageWidth: 70,
    imageHeight: 100, });
    timer: 5000;
    swal.showLoading()
    
    //change confirm button color
    $('.swal2-confirm').css('background-color', '#00bfff');

    //make show loading stop after 5 seconds
    setTimeout(function () {
        swal.hideLoading()
    }, 5000)
});