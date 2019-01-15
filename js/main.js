(function ($) {

    var minWidth = 1024;

    $(document).ready(function () {
        // Show - Hide sidemenu
        $('.btn-bar').on('click', function () {
            if ($('#side-menu').is(':visible')) {
                $('#side-menu').removeClass('show');
                $('#side-menu').addClass('hide');
                $('#wrapper, #appbar').addClass('full');
                if (window.innerWidth < minWidth) {
                    $('.side-menu-bg').removeClass('show');
                    $('.side-menu-bg').addClass('hide');
                }
            } else {
                $('#side-menu').removeClass('hide');
                $('#side-menu').addClass('show');
                $('#wrapper, #appbar').removeClass('full');
                if (window.innerWidth < minWidth) {
                    $('.side-menu-bg').removeClass('hide');
                    $('.side-menu-bg').addClass('show');
                }
            }
        });


        $('.side-menu-bg').on('click', function () {
            $('#side-menu, .side-menu-bg').removeClass('show');
        });

        $(window).resize(function () {
            if (window.innerWidth >= minWidth) {
                $('#side-menu, .side-menu-bg').removeClass('show');
            }
        });
    });
})(jQuery);