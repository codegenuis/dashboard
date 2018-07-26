$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true
  });
});
function openSideMenu(){
  document.getElementById('side-menu').style.width = '294px'
  document.getElementById('main').style.marginLeft = '294px'
  document.getElementById('main').style.width = 'max-content'
}
function closeSideMenu(){
  document.getElementById('side-menu').style.width = '0px'
  document.getElementById('main').style.marginLeft = '0px'
  document.getElementById('main').style.width = '100%'
}