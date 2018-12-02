vhCheck();

particlesJS.load('eatabeat', 'assets/particles-eatabeat.json', function() {});
particlesJS.load('particles-bg', 'assets/particles-dots.json', function() {});

$("#menu").click(e => {
    e.preventDefault();
    $("#menu").toggleClass("open");
    $("#content").toggle();
    $(".menu-overlay").toggleClass("open");
});

window.onresize = () => {
  if (window.innerWidth > 400) {
    $("#menu").removeClass("open");
    $("#content").show();
    $(".menu-overlay").removeClass("open");
  }
}
