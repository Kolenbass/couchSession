$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .right').toggleClass('active');
        $('body').toggleClass('lock');
    })
})