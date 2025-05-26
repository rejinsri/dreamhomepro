$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 56
            }, 800);
        }
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('bg-dark');
        }
    });

    // Form submission handling
    $('form').on('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // Property Search
    $('#searchForm').on('submit', function(e) {
        e.preventDefault();
        // Add search logic here
    });

    // Newsletter Subscription
    $('#newsletterForm').on('submit', function(e) {
        e.preventDefault();
        // Add newsletter subscription logic here
        alert('Thank you for subscribing!');
        this.reset();
    });

    // Property Gallery
    $('.property-card').on('click', function() {
        window.location.href = 'property-detail.html';
    });
});