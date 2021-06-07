/* CSS Website Responsiveness */
function navResponse() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

/* ----- Homepage Slideshow Start ----- */
var slideIndex = 1;

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("estateslides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* ----- Homepage Slideshow End ----- */

/* ----- FAQ Start ----- */
/* ----- FAQ End ----- */

/* ----- Contact Form Start ----- */
function validateForm() {
    var re = /^[a-zA-Z\u0020]*$/
    var x = document.forms["contactForm"]["fullname"].value;
    if (x === "") {
        alert("Full name must be filled out! (E.g. John Smith)");
        return false;
    }
    if (re.test(x) === false) {
        alert("No numbers are allowed in the name field!");
        return false;
    }

    var y = document.forms["contactForm"]["phonenumber"].value;
    if (y === "") {
        alert("Phone number must be filled out! (E.g. 0411222333)");
        return false;
    }
    if (isNaN(y) || y.length === 7 || y.length === 11 || y.length === 9) {
        alert("Invalid phone number, please confirm and try again!");
        return false;
    }

    var regex = /\S+@\S+\.\S+/;
    var z = document.forms["contactForm"]["emailaddress"].value;
    if (z === "") {
        alert("Email address must be filled out! (E.g. example@email.com)");
        return false;
    }
    if (regex.test(z) === false) {
        alert("Please enter a valid email address! (E.g. example@email.com");
        return false;
    }
    else {
        var name = document.getElementById("fname").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("emaila").value;
        var bedroom = document.getElementById("bedroom").value;
        var comment = document.getElementById("subject").value;
        return confirm("Are you sure you wish to submit the following details? \n" +
            "Full Name: " + name + "\n" +
            "Phone Number: " + phone + "\n" +
            "Email Address: " + email + "\n" +
            "Number of Bedrooms: " + bedroom + "\n" +
            "Additional Comments: " + comment);
    }
}
/* ----- Contact Form End ----- */