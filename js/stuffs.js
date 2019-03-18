$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 400, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// var flkty = new Flickity('.carousel');
// flkty.on('change', function (index) {
//     console.log('Flickity change ' + index);
// });
// <!-- data-flickity='{ "imagesLoaded": true, "wrapAround" : true }'> -->
// var $carousel = $('.carousel').flickity({
//     "imagesLoaded": true,
//     "wrapAround": true
// });

// $carousel.on('change.flickity', function (event, index) {
//     console.log('Flickity change ' + index);
// });

// var flkty = new Flickity('.carousel', {
//     "imagesLoaded": true,
//     "wrapAround": true
// });
const projTitle = document.getElementById('proj-title');
var flkty = new Flickity('.carousel', {
    "imagesLoaded": true,
    "wrapAround": true
    },{
    on: {
        ready: function () {
            console.log('Flickity ready');
            
            projTitle.innerHTML = 'Virtual Pets Amok!';
        }
    }
});
flkty.on('change', function (index) {
    console.log('Flickity change ' + index);
    if (index < 1) {
        console.log('yo0');
        projTitle.innerHTML = 'Virtual Pets Amok!';
    } else if (index == 1) {
        console.log('yo1');
        projTitle.innerHTML = 'Boat Reviews!';
    } else if (index == 2) {
        console.log('yo2');
        projTitle.innerHTML = 'Random Colored Random Rain!';
    } else {
        console.log('yo3');
        projTitle.innerHTML = 'University Clinic, The Hospital!';
    }
});