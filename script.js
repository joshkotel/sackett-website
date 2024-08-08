function openNav() {
  document.getElementById(".hamburger-nav").style.display = "block";
}

function closeNav() {
  document.getElementById(".hamburger-nav").style.display = "none";
}

$('.hamburger-menu:has(input:checked)').on('click', function(){
  $('body').addClass('no-scroll');
});

$('').on('click', function(){
  $('body').removeClass('no-scroll');
});