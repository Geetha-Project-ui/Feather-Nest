
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
$(document).ready(function() {
    //Fixing jQuery Click Events for the iPad
    var ua = navigator.userAgent,
      event = (ua.match(/iPad/i)) ? "touchstart" : "click";
    if ($('.table').length > 0) {
      $('.table .expand').on(event, function() {
        $(this).toggleClass("active", "").nextUntil('.expand').css('display', function(i, v) {
          return this.style.display === 'table-row' ? 'none' : 'table-row';
        });
      });
    }
  })

