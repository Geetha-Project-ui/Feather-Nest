
document.getElementById('show-sign-up').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('sign-in-form').classList.add('d-none');
    document.getElementById('sign-up-form').classList.remove('d-none');
});

document.getElementById('show-sign-in').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('sign-up-form').classList.add('d-none');
    document.getElementById('sign-in-form').classList.remove('d-none');
});


$("#leftside-navigation .sub-menu > a").click(function(e) {
    $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation()
  })