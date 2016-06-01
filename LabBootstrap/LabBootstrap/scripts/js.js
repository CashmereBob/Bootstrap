$(document).ready(function () {
    $(window).resize(function () {
        canvasset();
    });

    scrolli();
    diver();
    moray();
    shark();
    canvasset();
    stonefish();
    

});

function diver() {
    $("#diver").css("animation-duration", "15s");
    $("#divercontrol").on('input', function () {
        var value = $(this).val();
        value = 31 - parseInt(value);
        $("#diver").css("animation-duration", value + "s");
    });
}

function moray() {
    $("#moray").css("animation-name", "logo");
    $("#moray").css('animation-duration', '5s');

    $("#moraycontrol").on('input', function () {
        var value = $(this).val();
        
        switch(value) {
            case '0':
                $("#moray").css("animation-name", "morayaclock");
                $("#moray").css('animation-duration', '10s');
                break;
            case '2':
                $("#moray").css("animation-name", "morayclock");
                $("#moray").css('animation-duration', '10s');
                break;
            default:
                $("#moray").css("animation-name", "logo");
                $("#moray").css('animation-duration', '5s');
        }

    });
}

function stonefish() {
    $("#stonefish").css("animation-name", "stonefishsleep");

    $("#stonefishcontrol").on('input', function () {
        var value = $(this).val();

        switch (value) {
            case '0':
                $("#stonefish").css("animation-name", "stonefishleft");
                break;
            case '2':
                $("#stonefish").css("animation-name", "stonefishright");
                break;
            default:
                $("#stonefish").css("animation-name", "stonefishsleep");
        }

    });
}

    function shark() {
        $("#shark").css("animation-name", "logo");
        $("#shark").css("animation-iteration-count", "infinite");

        $("#sharkcontrol").on('input', function () {
            var value = $(this).val();
            
            var delay = 5000;

            switch(value) {
                case '0':
                    $("#shark").css("animation-name", "sharktofront");
                    $("#shark").css("animation-iteration-count", "1");

                    setTimeout(function () {
                        $("#shark").css("animation-name", "logo");
                        $("#shark").css("animation-iteration-count", "infinite");
                    }, delay);

                    break;
                case '2':
                    $("#shark").css("animation-name", "sharkaway");
                    $("#shark").css("animation-iteration-count", "1");

                    setTimeout(function () {
                        $("#shark").css("animation-name", "logo");
                        $("#shark").css("animation-iteration-count", "infinite");
                    }, delay);

                    break;
                default:
                    $("#shark").css("animation-name", "logo");
                    $("#shark").css("animation-iteration-count", "infinite");
            }

        });
}

function canvasset() {
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


}

function scrolli() {
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
}
