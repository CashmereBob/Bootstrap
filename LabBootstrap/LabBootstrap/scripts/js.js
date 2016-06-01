$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });


    });

    var height = document.body.clientHeight;
    var width = document.body.clientWidth;
    var htmlCanvas = document.getElementById('canvas');

    htmlCanvas.width = window.innerWidth;
    htmlCanvas.height = window.innerHeight;

    var img = new Image();
    img.onload = function () {
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height,    // source rectangle
                   0, 0, canvas.width, canvas.height); // destination rectangle
    }
    img.src = '../images/aquarium.png';

    $("#diver").css("animation-duration", "15s")
    $("#divercontrol").on('input', function () {
        var value = $(this).val();
        value = 31 - parseInt(value);
        $("#diver").css("animation-duration", value + "s");
    });

});