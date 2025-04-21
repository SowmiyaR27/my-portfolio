var typed = new Typed("#element", {
	strings: ["Web Developer.", "Web Designer.", "Software Developer."],
	typeSpeed: 50,
});

// JavaScript to smooth scroll to the Contact section if you want to use it
document.querySelector(".contact-btn").addEventListener("click", function (e) {
	e.preventDefault();
	window.location.href = "#contact";
});
